import { JSDOM } from "jsdom";

class PixivImageInfo {
    constructor() {
    }
    // Embedimage
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
    }
    // ID
    id =  ""
    // set_id(id = "") { this.id = id; }
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
            "author": {
                "id": "",
                "name": ""
            },
            "createDate": "",
            "uploadDate": "",
            "image_link": {
                "urls": {
                    "thumb_mini": "",
                    "small": "",
                    "regular": "",
                    "original": ""
                },
                "width": 0,
                "height": 0
            }
        };
    }
}

export default PixivImageInfo;
