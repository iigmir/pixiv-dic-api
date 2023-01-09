import { GenerateBreadcrumb as generate_breadcrumb } from "./breadcrumb.js";
import PageSourceDOM from "./dom.js";
import PageStatus from "./status.js";
import PixpediaSummary from "./summary.js";
import PixpediaContentParser from "./content.js";

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
    }
    // Status
    set_status_object(entry, document) {
        this.status_object = new PageStatus(entry, document);
    }
    // Document
    set_document() {
        const main = async (resolve) => {
            const dom = new PageSourceDOM();
            dom.ajax(this.entry).finally( () => {
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
        const main = async (resolve) => {
            const content = new PixpediaContentParser(this.document);
            content.set_contents();
            this.content = content.result;
            resolve();
        };
        return new Promise( main );
    }
    /**
     * @returns {PixpediaBreadcumbInterface[]}
     */
    get breadcrumb() {
        /**
         * @typedef {Object} PixpediaBreadcumbInterface
         * @property {String|null} name The item's name
         * @property {String|null} position THe item's position
         */
        /**
         * @type {PixpediaBreadcumbInterface}
         */
        const empty = [{ name: null, position: null }];
        if( this.status.message === "normal" ) {
            return generate_breadcrumb( this.document );
        }
        return empty;
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
                this.set_content(),
            ]);
            actions.then( () => {
                resolve();
            }).catch( (error) => {
                reject(error);
            });
        });
    }
    /**
     * The interface.
     * @returns {PixivEncyclopediaInterface}
     */
    get result() {
        /**
         * @typedef {Object} PixivEncyclopediaInterface
         * @property {PixpediaSummaryInterface} summary The summary.
         * @property {PixpediaBreadcumbInterface} breadcrumb The breadcrumb.
         * @property {PageStatusInterface} status The status.
         * @property {PixpediaContentInterface} content The content.
         */
        return {
            summary: this.summary,
            breadcrumb: this.breadcrumb,
            status: this.status,
            content: this.content,
        };
    }
}

export default PixivEncyclopedia;
