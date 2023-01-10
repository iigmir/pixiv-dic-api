import { JSDOM } from "jsdom";

import PixivAuthorInfo from "./author.js"
import PixivImageDatas from "./images.js";

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
    author_info = new PixivAuthorInfo()
    get author() {
        return this.author_info.result;
    }
    set author({ id = "", name = "" }) {
        this.author_info.author = { id, name };
    }
    set_author_by_dom() {
        this.author_info.set_author_by_embedimage_dom( this.document_link.dataset )
    }
    // Image link info
    image_links = new PixivImageDatas()
    get image_link() {
        return this.image_links.result;
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
