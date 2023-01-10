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

/**
 * Each section's content infomation, containing source HTML, image info, texts, etc.
 *
 * Infomations will be sperated into new interfaces.
 */
class PixpediaContentItems {
    dom = null
    constructor(dom = [Element]) {
        this.dom = dom;
    }
    /**
     * Go
     * @todo Can improve
     * @param {Array} array
     * @returns Infos for sections.
     */
    main(array = []) {
        let sections = [];
        let current_section = new SectionItemInterface("Preface", []);
        const action = (dom = Element, index = 0, articles = []) => {
            // States
            const is_new_title = dom.nodeName === "H2";
            const is_last_section = index + 1 === articles.length;
            const new_content = new ContentInterface(dom);
            // Actions
            if (is_new_title) {
                sections.push( current_section.result );
                current_section.reset_data();
                current_section.title = dom.textContent.trim();
            } else {
                current_section.add_content( new_content.result );
            }
            if (is_last_section) {
                sections.push(current_section.result);
            }
        };
        array.forEach( action );
        return sections;
    }
    /**
     * The interface.
     */
    get result() {
        return this.main( this.dom );
    }
}

export default PixpediaContentItems;
