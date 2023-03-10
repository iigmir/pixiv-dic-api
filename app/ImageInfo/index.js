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

/**
 * AN image's infomation at Pixiv, containing author info, title, date, etc.
 */
class PixivImageInfo {
    /**
     * You can init the object by specifing its type and value.
     *
     * If type didn't provided or invalid, nothing will change.
     * You can, of course, change at anytime anyway.
     * @param {String} type State type. Currently there are three values:
     *
     * 1. `embedimage`: If the image is from embedded image in Pixiv Encyclopedia, use the value and provide the `class="embedimage"` HTML source code.
     * 2. `id`: The image ID from Pixiv. For example, `40137670` for <https://www.pixiv.net/artworks/40137670>.
     * 3. `none`: This is the default value and nothing executed.
     *
     * @param {*} value Input value
     */
    constructor(type = "none", value = null) {
        switch (type) {
            case "embedimage":
                this.embedimage = value;
                break;
            case "id":
                this.id = value;
                break;
            case "none":
            default:
                break;
        }
    }
    // ID
    id = "none"
    set_id_by_dom() {
        this.id = this.embedded_image.interfaces.id;
    }
    // Embed Image
    embedded_image = new PixivEmbedImageParser()
    get embedimage() {
        return this.embedded_image.source;
    }
    set embedimage(embedimage = "<html></html>") {
        this.embedded_image.init_dom(embedimage);
        this.dom_actions();
    }
    dom_actions() {
        this.set_author_by_dom();
        this.set_id_by_dom();
        this.set_metadata_by_dom();
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
        this.author_info.data = this.embedded_image.interfaces.author;
    }
    // Image link info
    image_links = new PixivImageDatas()
    get image_link() {
        return this.image_links.result;
    }
    // Image metadata
    metadata = new PixivImageMetadata()
    set_metadata_by_dom() {
        this.metadata.result = this.embedded_image.interfaces.metadata;
    }
    // Image date
    dates = new PixivImageDate()
    /**
     * The interface.
     * @returns {PixivImageInfoInterface}
     */
    get result() {
        const { id, author, image_link, metadata, dates } = this;
        const { title, description } = metadata;
        const { createDate, uploadDate } = dates.result;
        return { id, author, image_link, title, description, createDate, uploadDate };
    }
}

export default PixivImageInfo;
