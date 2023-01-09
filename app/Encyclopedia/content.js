class PixpediaContentParser {
    constructor(document = Document) {
        this.document = document;
        this.contents = [];
    }
    get articles_source() {
        const article = this.document.querySelector("#article-body");
        return [...article.children];
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
        // List
        this.articles_source.forEach( (dom = Element) => {
            const is_new_section = dom.nodeName === "H2";
            if( is_new_section ) {
                section.title = dom.textContent;
                result.push( section );
                section = { title: "Preface", contents: [] };
            } else {
                section.contents.push({
                    source: dom.innerHTML
                });
            }
        });
        this.contents = result;
    }
    get result() {
        return this.contents;
    }
}

export default PixpediaContentParser;
