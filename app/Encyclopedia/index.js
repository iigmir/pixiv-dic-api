import { GenerateBreadcrumb as generate_breadcrumb } from "./Encyclopedia/breadcrumb.js";
import PageSourceDOM from "./Encyclopedia/dom.js";
import PageStatus from "./Encyclopedia/status.js";
import PixpediaSummary from "./Encyclopedia/summary.js";

/**
 * The encyclopedia object.
 */
class PixivEncyclopedia {
    constructor(entry = "") {
        this.entry = entry;
        this.summary = {};
        this.document = null;
        this.status_object = null;
    }
    // Status
    set_status_object(entry, document) {
        this.status_object = new PageStatus(entry, document);
    }
    // Document
    ajax_document() {
        const main = async (resolve) => {
            const object = new PageSourceDOM();
            object.ajax(this.entry).finally( () => {
                this.document = object.result;
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
            summary.ajax_result(this.entry).finally( () => {
                this.summary = summary.result;
                resolve();
            });
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
                this.ajax_document(),
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
         */
        return {
            summary: this.summary,
            breadcrumb: this.breadcrumb,
            status: this.status
        };
    }
}

export default PixivEncyclopedia;
