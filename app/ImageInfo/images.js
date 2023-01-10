/**
 * @typedef {Object} PixivImageDataInterface
 * @property {Object} urls Image URL paths
 * @property {Number} width Image width
 * @property {Number} height Image height
 */

/**
 * If you want to active image datas, set `ask_image_link` to `true`.
 *
 * The interface returns `null` if `ask_image_link` is, by default, `false`.
 */
class PixivImageDatas {
    /**
     * @returns {PixivImageDataInterface}
     */
    data = {
        "urls": {
            "thumb_mini": "",
            "small": "",
            "regular": "",
            "original": ""
        },
        "width": 0,
        "height": 0
    }
    ask_image_link = false
    get image_link() {
        return this.data;
    }
    /**
     * The interface.
     * @returns {PixivImageDataInterface|null}
     */
    get result() {
        return this.ask_image_link ? this.data : null;
    }
}

export default PixivImageDatas;
