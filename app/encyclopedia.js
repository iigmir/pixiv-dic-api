import { GetTag, GetEncyclopediaEntry } from "../api/pixiv.js";
import { JSDOM } from "jsdom";

const PixpediaSummaryInterface = {
    "abstract": "",
    "image": "",
    "id": "73684021",
    "yomigana": "",
    "parentTag": "",
    "siblingsTags": [""],
    "tag": ""
};

class PixivEncyclopedia {
    constructor(entry = "") {
        this.entry = entry;
        this.summary = PixpediaSummaryInterface;
        this.document = null;
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
    }
    get_document() {
        const main = async (resolve, reject) => {
            try {
                const response = await GetEncyclopediaEntry(this.entry);
                this.set_document(response.body);
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
        // console.log(input);
        this.summary = input;
    }
    get document_inited() {
        return this.document != null;
    }
    get breadcrumb() {
        const empty = [{ name: null, position: null }];
        if( this.document_inited ) {
            const document = this.document;
            const list = document.querySelectorAll('*[itemtype="http://schema.org/BreadcrumbList"] *[itemprop="itemListElement"]');
            const generate_interface = item => ({
                name: item.querySelector('*[itemprop="name"]').textContent,
                position: item.querySelector('*[itemprop="position"]').content
            });
            return [...list].length < 1 ? empty : [...list].map( generate_interface );
        }
        return empty;
    }
    /**
     * @typedef {PixivEncyclopediaInterface}
     * @type {PixpediaSummaryInterface} summary
     */
    /**
     * The interface.
     * @returns {Object} result
     * @returns {PixivEncyclopediaInterface}
     */
    get result() {
        return {
            summary: this.summary,
            breadcrumb: this.breadcrumb,
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
