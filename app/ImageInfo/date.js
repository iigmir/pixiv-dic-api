class PixivImageDate {
    /**
     * Created date
     * @type {String}
     */
    create = ""
    /**
     * Uploaded date
     * @type {String}
     */
    upload = ""
    /**
     * The interface.
     */
    get result() {
        return {
            createDate: this.create,
            uploadDate: this.upload,
        };
    }
    set result({ create, upload }) {
        this.createDate = create;
        this.uploadDate = upload;
    }
}

export default PixivImageDate;
