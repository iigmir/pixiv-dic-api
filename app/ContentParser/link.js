import { JSDOM } from "jsdom";

class LinkContent {
    constructor(source = "") {
        this.source = source;
    }
    /**
     * The reference DOM.
     * @returns {Element}
     */
    get dom() {
        const dom = new JSDOM( this.source );
        return dom.window.document.body;
    }
    /**
     * The link's href.
     * @returns {String}
     */
    get href() {
        return this.dom.href;
    }
    /**
     * In `image` mode, it's the image's ID,
     * In `encyclopedia` mode, it's encyclopedia's entry link.
     * In `external` mode, it's the same as `href`.
     * @returns {String}
     */
    get entry() {
        if( this.mode === "image" ) {
            const url = new URL(this.href);
            return url.pathname.replace(/^\/artworks\//g, "");
        }
        if( this.mode === "encyclopedia" ) {
            return decodeURIComponent( this.href.replace(/^\/a\//g, "") );
        }
        return this.href;
    }
    /**
     * Texts in the <a></a> element.
     * @returns {String}
     */
    get text() {
        return this.dom.textContent.trim();
    }
    /**
     * Three:
     * 1. `image`
     * 2. `encyclopedia`
     * 3. `external`
     *
     * @returns {String}
     */
    get mode() {
        if( /^www.pixiv.net\/artworks\//g.test(this.href) ) {
            return "image";
        }
        if( /^\/a\//g.test(this.href) ) {
            return "encyclopedia";
        }
        return "external";
    }
    /**
     * The interface.
     */
    get result() {
        const { entry, text, mode, href } = this;
        return { entry, text, mode, href };
    }
}

export default LinkContent;
