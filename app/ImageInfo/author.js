/**
 * @typedef {Object} PixivAuthorInterface
 * @property {String|Number} id Author ID in Pixiv
 * @property {String} name Author name in Pixiv
 */

/**
 * Author info
 */
class PixivAuthorInfo {
    /**
     * @type {PixivAuthorInterface}
     */
    data = {
        "id": "",
        "name": ""
    }
    /**
     * @return {PixivAuthorInterface}
     */
    get author() {
        return this.data;
    }
    /**
     * @param {PixivAuthorInterface}
     */
    set author({ id = "", name = "" }) {
        this.data = { id, name };
    }
    /**
     * @param {String} input URL
     * @returns ID
     */
    get_author_id(input = "https://example.com?id=0") {
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
    }
    /**
     * If the author info is from embed image, use them.
     * @param {Object} dataset HTML dataset
     */
    set_author_by_embedimage_dom(dataset = { authorUrl: "http://www.pixiv.net/member.php?id=0", authorName: "" }) {
        this.data = {
            id: this.get_author_id(dataset.authorUrl),
            name: dataset.authorName,
        };
    }
    /**
     * The interface.
     * @return {PixivAuthorInterface}
     */
    get result() {
        return this.author;
    }
}

export default PixivAuthorInfo;
