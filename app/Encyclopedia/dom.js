import { GetEncyclopediaEntry } from "../../api/pixiv.js";
import { JSDOM } from "jsdom";

/**
 * DOM
 */
class PageSourceDOM {
    constructor() {
        this.document = null;
    }
    ajax(entry = "") {
        const main = async (resolve, reject) => {
            try {
                const response = await GetEncyclopediaEntry(entry);
                this.set_document(response, entry);
                resolve(this.result);
            } catch (error) {
                this.set_document("", entry);
                console.error( error );
                reject(error);
            }
        };
        return new Promise( main );
    }
    set_document(html, entry) {
        const url = `https://dic.pixiv.net/a/${entry}`;
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
    get result() {
        return this.document;
    }
}

export default PageSourceDOM;
