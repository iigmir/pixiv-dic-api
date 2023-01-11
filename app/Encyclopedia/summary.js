import { GetTag } from "../api/pixiv.js";

/**
 * Summary
 */
class PixpediaSummary {
    /**
     * @type {PixpediaSummaryInterface}
     */
    static get preview() {
        /**
         * @typedef {Object} PixpediaSummaryInterface
         * @property {String} abstract A simple text to introduce the subject.
         */
        return {
            "abstract": "",
            "image": "",
            "id": "",
            "yomigana": "",
            "parentTag": "",
            "siblingsTags": [""],
            "tag": ""
        };
    }
    /**
     * @param {String} entry
     */
    constructor() {
        /**
         * @type {PixpediaSummaryInterface}
         */
        this.result = this.preview;
    }
    ajax(entry = "") {
        const main = async (resolve, reject) => {
            try {
                const response = await GetTag(entry);
                this.result = {
                    ...response.body.pixpedia,
                    pixpedia_url: `https://dic.pixiv.net/a/${entry}`,
                }
                resolve(response);
            } catch (error) {
                this.result = {
                    pixpedia_url: `https://dic.pixiv.net/a/${entry}`,
                };
                reject(error);
            }
        };
        return new Promise( main );
    }
    set_result(input = {}) {
        this.result = input;
    }
}

export default PixpediaSummary;
