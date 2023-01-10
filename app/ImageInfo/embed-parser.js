import { JSDOM } from "jsdom";

class PixivEmbedImageParser {
    source = ""
    document = null
    init_dom(embedimage = "<html></html>") {
        this.source = embedimage;
        this.set_dom_tree(embedimage);
    }
    set_dom_tree(embedimage = "<html></html>") {
        const dom = new JSDOM(embedimage);
        this.document = dom.window.document;
    }
    // DOM tree
    get document_link() {
        return this.document.querySelector(".embedimage a");
    }
    get dom_invalid() {
        if( this.source === "" ) {
            return true;
        }
        return this.document_link == null;
    }
    // Interfaces
    /**
     * @param {String} input URL
     * @returns ID
     */
    get_author_id(input = "https://example.com?id=0") {
        const url = new URL(input);
        const param = url.searchParams;
        const qsid = param.get("id");
        /**
         * Format is https://pixiv.net/users/0
         */
        if( qsid == null ) {
            const paths = url.pathname.split("/");
            const is_user = paths[1] === "users";
            return is_user ? paths[2] : "0";
        }
        return qsid ?? "0";
    }
    get author_interface() {
        const dataset = this.document_link.dataset;
        return {
            id: this.get_author_id(dataset.authorUrl),
            name: dataset.authorName,
        };
    }
    get id_interface() {
        const path = this.document_link.pathname.split("/");
        return path[2] ?? "";
    }
    get metadata_interface() {
        const { dataset } = this.document_link;
        return {
            title: this.document_link.title,
            description: dataset.caption,
        };
    }
    get interfaces() {
        return {
            author: this.author_interface,
            id: this.id_interface,
            metadata: this.metadata_interface,
        };
    }
}

export default PixivEmbedImageParser;
