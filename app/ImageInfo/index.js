import PixivAuthorInfo from "./author.js"
import PixivImageDatas from "./images.js";
import PixivImageMetadata from "./metadata.js";
import PixivImageDate from "./date.js";
import PixivEmbedImageParser from "./embed-parser.js";

/**
 * @typedef {Object} PixivImageInfoInterface
 * @property {String|Number} id Pixiv image ID
 * @property {String} title Pixiv image title
 */

class PixivImageInfo {
    /**
     * You can init the object by specifing its type and value.
     *
     * If type didn't provided or invalid, nothing will change.
     * You can, of course, change at anytime anyway.
     * @param {String} type State type
     * @param {*} value Input value
     */
    constructor(type = "none", value = null) {
        switch (type) {
            case "embedimage":
                this.embedimage = value
                break;
            case "id":
                this.id = value;
                break;
            default:
                break;
        }
    }
    // ID
    id = ""
    set_id_by_dom() {
        this.id = this.image_dom.interfaces.id;
    }
    // Embed Image
    image_dom = new PixivEmbedImageParser()
    get embedimage() {
        return this.image_dom.source;
    }
    set embedimage(embedimage = "<html></html>") {
        this.image_dom.init_dom(embedimage);
        this.dom_actions();
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
        this.author_info.set_author_by_embedimage_dom( this.image_dom.interfaces.author )
    }
    // Image link info
    image_links = new PixivImageDatas()
    get image_link() {
        return this.image_links.result;
    }
    // Image metadata
    metadata = new PixivImageMetadata()
    // Image date
    dates = new PixivImageDate()
    /**
     * The interface.
     * @returns {PixivImageInfoInterface}
     */
    get result() {
        return {
            "id": this.id,
            "title": this.metadata.result.title,
            "description": this.metadata.description,
            "author": this.author,
            "createDate": this.dates.result.createDate,
            "uploadDate": this.dates.result.uploadDate,
            "image_link": this.image_link
        };
    }
}

export default PixivImageInfo;
