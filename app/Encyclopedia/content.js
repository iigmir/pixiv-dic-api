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
        // States
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
                section.contents.push({
                    source: dom.outerHTML.trim()
                });
            }
            if (is_last_section) {
                result.push(section);
            }
        };
        // List
        // console.log(this.articles_source.length);
        this.articles_source.forEach( action );
        this.contents = result;
    }
    get result() {
        return this.contents;
    }
}

export default PixpediaContentParser;
