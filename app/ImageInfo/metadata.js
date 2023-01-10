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
    /**
     * The interface.
     */
    get result() {
        return {
            title: this.title,
            description: this.description,
        };
    }
    set result({ title, description }) {
        this.title = title;
        this.description = description;
    }
}

export default PixivImageMetadata;
