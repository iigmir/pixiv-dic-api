import { GetTag, GetEncyclopediaEntry } from "../api/pixiv.js";
import { GenerateBreadcrumb as generate_breadcrumb } from "./utils.js";
import { JSDOM } from "jsdom";

/**
 * @interface
 */
const PixpediaSummaryInterface = {
    "abstract": "",
    "image": "",
    "id": "73684021",
    "yomigana": "",
    "parentTag": "",
    "siblingsTags": [""],
    "tag": ""
};

/**
 * Page status
 */
class PageStatus {
    constructor(entry = "", document = null) {
        this.entry = entry;
        this.document = document;
    }
    get uninitialised() {
        return this.document == null;
    }
    /**
     * @returns {String} Status texts
     */
    get message() {
        if( this.uninitialised ) {
            return "document-uninitialised";
        }
        const page_description = this.document.querySelector('meta[property="og:description" ]').content;
        if( /メンテナンス/.test( page_description ) ) {
            return "under-maintenance";
        }
        return "normal";
    }
    /**
     * Result
     * @return {PageStatusInterface} Of course.
     */
    get result() {
        /**
         * @typedef {Object} PageStatusInterface
         * @property {String} message The message.
         */
        return {
            message: this.message
        };
    }
}

/**
 * The encyclopedia object.
 */
class PixivEncyclopedia {
    constructor(entry = "") {
        this.entry = entry;
        this.summary = PixpediaSummaryInterface;
        this.document = null;
        this.status_object = null;
    }
    // Status
    set_status_object(entry, document) {
        this.status_object = new PageStatus(entry, document);
    }
    // Document
    ajax_document() {
        const main = async (resolve, reject) => {
            try {
                const response = await GetEncyclopediaEntry(this.entry);
                this.set_document(response);
                resolve(response);
            } catch (error) {
                this.set_document("");
                reject(error);
            }
        };
        return new Promise( main );
    }
    set_document(html) {
        const url = `https://dic.pixiv.net/a/${this.entry}`;
        const referrer = `https://dic.pixiv.net`;
        const options = {
            url: url,
            referrer: referrer,
            contentType: "text/html",
            includeNodeLocations: true,
        };
        const { document } = new JSDOM( html, options ).window;
        this.document = document;
        this.set_status_object(this.entry, this.document);
    }
    // Summary
    ajax_summary() {
        const main = async (resolve, reject) => {
            try {
                const response = await GetTag(this.entry);
                this.set_summary(response.body.pixpedia);
                resolve(response);
            } catch (error) {
                this.set_summary(PixpediaSummaryInterface);
                reject(error);
            }
        };
        return new Promise( main );
    }
    set_summary(input = PixpediaSummaryInterface) {
        this.summary = input;
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

const main = async (entry = "") => {
    const parser = new PixivEncyclopedia(entry);
    try {
        await parser.ajax_summary();
        await parser.ajax_document();
        return parser.result;
    } catch (error) {
        console.error(error);
        throw new Error("Request failed");
    }
};

export default main;
