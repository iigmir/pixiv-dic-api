import { JSDOM } from "jsdom";

class LinkContent {
    constructor(source = "") {
        const dom = new JSDOM( source );
        this.source = source;
        this.dom = dom.window.document.querySelector("a");
    }
    /**
     * The link's href.
     * @returns {String}
     */
    get href() {
        return this.dom?.href ?? "";
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
        if( this.mode === "anchor" ) {
            return this.href.replace( /about:blank/g, "" );
        }
        return this.href;
    }
    /**
     * Texts in the <a></a> element.
     * @returns {String}
     */
    get text() {
        const textContent = this.dom?.textContent ?? "";
        return textContent.trim();
    }
    /**
     * Three:
     * 1. `image`
     * 2. `encyclopedia`
     * 3. `anchor`
     * 4. `external`
     *
     * @returns {String}
     */
    get mode() {
        if( /www.pixiv.net\/artworks\//g.test(this.href) ) {
            return "image";
        }
        if( /^\/a\//g.test(this.href) ) {
            return "encyclopedia";
        }
        if( /about:blank/g.test(this.href) ) {
            return "anchor";
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

/**
 * querySelectorAll => All links info. 😊
 * @param {String} source
 * @returns
 */
const GetAllLinksContent = (source = "") => {
    const dom = new JSDOM( source );
    const links = [...dom.window.document.querySelectorAll("a")].map( (i) => i.outerHTML );
    return links.map( link => (new LinkContent(link)).result );
};

export { LinkContent, GetAllLinksContent };
