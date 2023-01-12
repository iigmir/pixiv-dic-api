class EntryRelationship {
    constructor(document = Document) {
        this.document = document;
    }
    get relation_main() {
        return this.document.querySelector("#article-relation");
    }
    get items() {
        return this.relation_main.querySelectorAll(".relation > .items");
    }
    get_links(element = Element) {
        const elements = element.querySelectorAll("a");
        const get_text = i => i.textContent.replace("もっと見る", "").trim();
        const has_text = t => t !== "";
        return [...elements].map(get_text).filter(has_text);
    }
    get result() {
        return {
            parents: this.get_links(this.items[0]),
            children: this.get_links(this.items[1]),
            siblings: this.get_links(this.items[2]),
            categories: this.get_links(this.relation_main.children[3])
        };
    }
}

export default EntryRelationship;
