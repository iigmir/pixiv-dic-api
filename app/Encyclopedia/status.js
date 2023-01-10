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
     * Return a HTTP response status code.
     * @see <https://developer.mozilla.org/en-US/docs/Web/HTTP/Status>
     * @returns {Number} code
     */
    get code() {
        switch (this.message) {
            case "normal": return 200;
            case "document-uninitialised": return 204;
            case "under-maintenance": return 503;
            default: return 500;
        }
    }
    /**
     * Result
     * @return {PageStatusInterface} Of course.
     */
    get result() {
        /**
         * @typedef {Object} PageStatusInterface
         * @property {String} message The message.
         * @property {String} code HTTP response status code.
         */
        return {
            message: this.message,
            code: this.code,
        };
    }
}
export default PageStatus;
