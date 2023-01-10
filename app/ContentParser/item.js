import { GetImageByEmbedimage } from "../Encyclopedia/imagescripts.js";

class ContentInterface {
    constructor( source ) {
        this.source = source;
    }
    /**
     * @returns {PixivImageInfoInterface} Image interface
     */
    get image() {
        return GetImageByEmbedimage( this.source );
    }
    /**
     * @typedef {Object} PixpediaSectionContentInterface
     * @property {String} source The HTML
     * @property {PixivImageInfoInterface|null} [image] If the content is an embedded image, return an object. Else, returns null.
     */
    /**
     * The interface.
     * @returns {PixpediaSectionContentInterface}
     */
    get result() {
        return {
            source: this.source,
            image: this.image,
        };
    }
}

class SectionItemInterface {
    constructor(title = "Preface", contents = []) {
        this.title = title;
        this.contents = contents;
    }
    add_content(input = {}) {
        this.contents = [...this.contents, input];
    }
    set_title(input = "") {
        this.title = input;
    }
    reset_data() {
        this.title = "";
        this.contents = [];
    }
    get result() {
        return {
            title: this.title,
            contents: this.contents,
        };
    }
}

class PixpediaContentItems {
    dom = null
    constructor(dom = [Element]) {
        this.dom = dom;
    }
    get ary() {
        let result = [];
        let section = new SectionItemInterface("Preface", []);
        const action = (dom = Element, index = 0, articles = []) => {
            // States
            const is_new_title = dom.nodeName === "H2";
            const is_last_section = index + 1 === articles.length;
            const new_content = new ContentInterface(dom);
            // Actions
            if (is_new_title) {
                result.push( section.result );
                section.reset_data();
                section.title = dom.textContent.trim();
            } else {
                section.add_content( new_content.result );
            }
            if (is_last_section) {
                result.push(section.result);
            }
        };
        this.dom.forEach( action );
        return result;
    }
}

export default PixpediaContentItems;
