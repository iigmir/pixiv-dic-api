import { GetInageByEmbedimage } from "./imagescripts.js";

/**
 * @typedef {Object} PixpediaSectionContentInterface
 * @property {String} source The HTML
 * @property {PixivImageInfoInterface|null} [image] If the content is an embedded image, return an object. Else, returns null.
 */

class PixpediaContentItems {
    dom = null
    constructor(dom = [Element]) {
        this.dom = dom;
    }
    /**
     * COntent interface
     * @param {Element} dom
     * @returns {PixpediaSectionContentInterface}
     */
    generate_section_content_interface(dom = Element) {
        const source = dom.outerHTML.trim();
        const image = GetInageByEmbedimage( source );
        return { source, image };
    }
    get ary() {
        let result = [];
        let section = {
            title: "Preface",
            contents: []
        };
        const action = (dom = Element, index = 0, articles = []) => {
            const is_new_section = dom.nodeName === "H2";
            const is_last_section = index + 1 === articles.length;
            if (is_new_section) {
                result.push(section);
                section = {
                    title: dom.textContent.trim(),
                    contents: []
                };
            } else {
                let content = this.generate_section_content_interface(dom);
                section = {
                    title: section.title,
                    contents: [...section.contents, content]
                };
            }
            if (is_last_section) {
                result.push(section);
            }
        };
        this.dom.forEach( action );
        return result;
    }
}

class PixpediaContentParser {
    constructor(document = Document) {
        this.document = document;
        this.contents = [];
    }
    get articles_source() {
        const article = this.document.querySelector("#article-body");
        const result = article == null ? [] : [...article.children];
        return result;
    }
    /**
     * Render contents
     */
    set_contents() {
        const p = new PixpediaContentItems( this.articles_source );
        this.contents = p.ary;
    }
    /**
     * The interface.
     */
    get result() {
        return this.contents;
    }
}

export default PixpediaContentParser;
