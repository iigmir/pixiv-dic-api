import { GetImageByEmbedimage } from "../Encyclopedia/imagescripts.js";
import { GetTextByHtml, GetTitle } from "../TextParser/script.js";
import { GetAllLinksContent } from "./link.js";
import { GetTableData } from "./table.js";
import { GetItemType } from "./type.js";

class ContentInterface {
    constructor(source = "") {
        this.source = source;
    }
    /**
     * @returns {PixivImageInfoInterface} Image interface
     */
    get image() {
        return GetImageByEmbedimage( this.source );
    }
    /**
     * @returns {PixivImageInfoInterface} Text interface
     */
    get texts() {
        return GetTextByHtml( this.source );
    }
    /**
     * All links info.
     */
    get links() {
        return GetAllLinksContent( this.source );
    }
    /**
     * If it's a title, return the title's text.
     */
    get title() {
        return GetTitle( this.source );
    }
    /**
     * A JSON data converted from HTML.
     * @returns {Array}
     */
    get table() {
        return GetTableData( this.source );
    }
    /**
     * Current item type.
     * @returns {String}
     */
    get type() {
        return GetItemType( this.source );
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
        const { source, image, texts, title, links, table, type } = this;
        return { source, image, texts, title, links, table, type };
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
        const action = (dom = Element) => {
            // States
            const is_new_title = dom.nodeName === "H2";
            const new_content = new ContentInterface( dom.outerHTML.trim() );
            // Actions
            if (is_new_title) {
                sections.push( current_section.result );
                current_section.reset_data();
                current_section.title = dom.textContent.trim();
            } else {
                current_section.add_content( new_content.result );
            }
        };
        array.forEach( action );
        const still_got_contents = Boolean(current_section.result.contents.length);
        if( still_got_contents ) {
            sections.push(current_section.result);
        }
        return sections;
    }
    /**
     * The interface.
     * @returns {PixpediaSectionContentInterface[]}
     */
    get result() {
        return this.main( this.dom );
    }
}

export default PixpediaContentItems;
