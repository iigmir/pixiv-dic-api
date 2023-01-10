class PixivImageMetadata {
    /**
     * Image title
     * @type {String}
     */
    title = ""
    /**
     * Image description
     * @type {String}
     */
    description = ""
    get data() {
        return {
            title: this.title,
            description: this.description,
        };
    }
    set data({ title, description }) {
        this.title = title;
        this.description = description;
    }
    /**
     * The interface.
     */
    get result() {
        return this.data;
    }
}

export default PixivImageMetadata;
