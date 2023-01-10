import { JSDOM } from "jsdom";


/**
 * @param {String} input URL
 * @returns ID
 */
const get_author_id = (input = "https://example.com?id=0") => {
    const param = new URLSearchParams(input);
    const qsid = param.get("id");
    /**
     * Format is https://pixiv.net/users/0
     */
    if( qsid == null ) {
        const path = (new URL(input)).pathname;
        const paths = path.split("/");
        const is_user = paths[1] === "users";
        return is_user ? paths[2] : "0";
    }
    return qsid ?? "0";
};

class PixivImageInfo {
    constructor() {
    }
    // ID
    id = ""
    set_id_by_dom() {
        const path = this.document_link.pathname.split("/");
        this.id = path[2] ?? "";
    }
    // Embed Image
    embedimage_source = ""
    embedimage_dom = null
    get embedimage() {
        return this.embedimage_source;
    }
    set embedimage(embedimage = "<html></html>") {
        this.embedimage_source = embedimage;
        this.set_embedimage_dom(this.embedimage);
    }
    set_embedimage_dom(embedimage = "<html></html>") {
        const dom = new JSDOM(embedimage);
        this.embedimage_dom = dom.window.document;
        this.dom_actions();
    }
    // DOM tree
    get document_link() {
        return this.embedimage_dom.querySelector(".embedimage a");
    }
    get dom_invalid() {
        if( this.embedimage === "" ) {
            return true;
        }
        return this.document_link == null;
    }
    dom_actions() {
        this.set_author_by_dom();
        this.set_id_by_dom();
    }
    // Author datas
    author_info = {
        "id": "",
        "name": ""
    }
    set author({ id = "", name = "" }) {
        this.author_info = { id, name };
    }
    set_author_by_dom() {
        const dataset = this.document_link.dataset;
        this.author = {
            id: get_author_id(dataset.authorUrl),
            name: dataset.authorName,
        };
    }
    get author() {
        return this.author_info;
    }
    // Image link info
    image_links = {
        "urls": {
            "thumb_mini": "",
            "small": "",
            "regular": "",
            "original": ""
        },
        "width": 0,
        "height": 0
    }
    get image_link() {
        return this.image_links;
    }
    // Ask image link
    ask_image_link = false
    set_ask_image_link(ask_image_link = false) {
        this.ask_image_link = ask_image_link;
    }
    /**
     * The interface.
     */
    get result() {
        return {
            "id": this.id,
            "title": "",
            "description": "",
            "author": this.author,
            "createDate": "",
            "uploadDate": "",
            "image_link": this.image_link
        };
    }
}

export default PixivImageInfo;
