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
                this.set_result(response.body.pixpedia);
                resolve(response);
            } catch (error) {
                this.set_result(this.preview);
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
