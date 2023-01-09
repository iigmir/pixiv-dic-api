/**
 * Page status
 */
class PageStatus {
    constructor(entry = "", document = null) {
        this.entry = entry;
        this.document = document;
    }
    get uninitialised() {
        return this.document == null;
    }
    /**
     * @returns {String} Status texts
     */
    get message() {
        if( this.uninitialised ) {
            return "document-uninitialised";
        }
        const page_description = this.document.querySelector('meta[property="og:description" ]').content;
        if( /メンテナンス/.test( page_description ) ) {
            return "under-maintenance";
        }
        return "normal";
    }
    /**
     * Result
     * @return {PageStatusInterface} Of course.
     */
    get result() {
        /**
         * @typedef {Object} PageStatusInterface
         * @property {String} message The message.
         */
        return {
            message: this.message
        };
    }
}
export default PageStatus;
