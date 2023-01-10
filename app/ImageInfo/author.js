class PixivAuthorInfo {
    data = {
        "id": "",
        "name": ""
    }
    get author() {
        return this.data;
    }
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
    set_author_by_dom(dataset = { authorUrl: "http://www.pixiv.net/member.php?id=0", authorName: "" }) {
        this.data = {
            id: this.get_author_id(dataset.authorUrl),
            name: dataset.authorName,
        };
    }
    get result() {
        return this.author;
    }
}

export default PixivAuthorInfo;
