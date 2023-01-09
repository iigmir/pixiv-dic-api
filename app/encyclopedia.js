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
    get result() {
        return {
            message: this.message
        };
    }
}

class PixivEncyclopedia {
    constructor(entry = "") {
        this.entry = entry;
        this.summary = PixpediaSummaryInterface;
        this.document = null;
        this.status_object = null;
    }
    set_status_object(entry, document) {
        this.status_object = new PageStatus(entry, document);
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
    get_document() {
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
    get_summary() {
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
    get document_inited() {
        return this.document != null;
    }
    /**
     * @typedef {Object} PixpediaBreadcumbInterface
     * @property {String|null} name The item's name
     * @property {String|null} position THe item's position
     */
    /**
     * @returns {PixpediaBreadcumbInterface[]}
     */
    get breadcrumb() {
        /**
         * @type {PixpediaBreadcumbInterface}
         */
        const empty = [{ name: null, position: null }];
        if( this.document_inited ) {
            return generate_breadcrumb( this.document );
        }
        return empty;
    }
    /**
     * @typedef {Object} PixivEncyclopediaInterface
     * @property {PixpediaSummaryInterface} summary The summary.
     * @property {PixpediaBreadcumbInterface} breadcrumb The breadcrumb.
     */
    /**
     * The interface.
     * @returns {PixivEncyclopediaInterface}
     */
    get result() {
        return {
            summary: this.summary,
            breadcrumb: this.breadcrumb,
            status: this.status_object.result
        };
    }
}

const main = async (entry = "") => {
    const parser = new PixivEncyclopedia(entry);
    try {
        await parser.get_summary();
        await parser.get_document();
        return parser.result;
    } catch (error) {
        console.error(error);
        throw new Error("Request failed");
    }
};

export default main;
