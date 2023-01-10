import PixpediaContentItems from "./item.js";

/**
 * To render each sections' contents.
 */
class PixpediaContentParser {
    constructor(document = Document) {
        this.document = document;
        this.contents = [];
    }
    /**
     * The article element.
     */
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
        this.contents = p.result;
    }
    /**
     * The interface.
     */
    get result() {
        return this.contents;
    }
}

export default PixpediaContentParser;
