import { main as generate_breadcrumb } from "./breadcrumb.js";
import { GetPixpediaMetainfo } from "./metainfo.js";
import PageSourceDOM from "./dom.js";
import PageStatus from "./status.js";
import PixpediaSummary from "./summary.js";
import EntryRelationship from "./relation.js";
import PixpediaContentParser from "../ContentParser/index.js";

/**
 * The encyclopedia object.
 */
class PixivEncyclopedia {
    constructor(entry = "") {
        this.entry = entry;
        this.summary = null;
        this.document = null;
        this.status_object = null;
        this.content = null;
        this.metainfo = null;
        this.relation = null;
    }
    // Status
    set_status_object(entry, document) {
        this.status_object = new PageStatus(entry, document);
    }
    // Document
    set_document() {
        const main = async (resolve) => {
            const dom = new PageSourceDOM();
            const catch_action = error => {
                console.error(error);
                throw new TypeError("Something's wrong");
            };
            dom.ajax( this.entry ).catch( catch_action ).finally( () => {
                this.document = dom.result;
                this.set_status_object(this.entry, this.document);
                resolve();
            });
        };
        return new Promise( main );
    }
    // Summary
    set_summary() {
        const main = async (resolve) => {
            const summary = new PixpediaSummary();
            summary.ajax(this.entry).finally( () => {
                this.summary = summary.result;
                resolve();
            });
        };
        return new Promise( main );
    }
    // Content
    set_content() {
        const content = new PixpediaContentParser(this.document);
        content.set_contents();
        this.content = content.result;
        return Promise.resolve();
    }
    set_relation() {
        const relation = new EntryRelationship(this.document);
        // content.set_contents();
        this.relation = relation.result;
        return Promise.resolve();
    }
    // Metainfo
    set_metainfo() {
        this.metainfo = GetPixpediaMetainfo(this.document);
    }
    /**
     * @returns {PixpediaBreadcumbInterface[]}
     */
    get breadcrumb() {
        return generate_breadcrumb( this.status, this.document );
    }
    get status() {
        return this.status_object.result;
    }
    // Public methods
    /**
     * The main function. AJAXes start here.
     */
    async start() {
        return new Promise( (resolve, reject) => {
            const actions = Promise.all([
                this.set_summary(),
                this.set_document(),
            ]);
            actions.then( () => {
                // Actions
                this.set_content();
                this.set_metainfo();
                this.set_relation();
                // Resolve
                resolve();
            }).catch( (error) => {
                reject(error);
            });
        });
    }
    /**
     * @typedef {Object} PixivEncyclopediaInterface
     * @property {PixpediaSummaryInterface} summary The summary.
     * @property {PixpediaBreadcumbInterface} breadcrumb The breadcrumb.
     * @property {PageStatusInterface} status The status.
     * @property {PixpediaContentInterface} content The content.
     */
    /**
     * The interface.
     * @returns {PixivEncyclopediaInterface}
     */
    get result() {
        const status = this.status;
        if( status.message !== "normal" ) {
            return {
                status,
                summary: null,
                breadcrumb: null,
                content: null,
                metainfo: null,
                relation: null,
            };
        }
        return {
            status,
            summary: this.summary,
            breadcrumb: this.breadcrumb,
            content: this.content,
            metainfo: this.metainfo,
            relation: this.relation,
        };
    }
}

export default PixivEncyclopedia;
