import { JSDOM } from "jsdom";

const should_not_parse = (htmltext = "<html></html>") => {
    const regex = /(^<h1)|(^<h2)|(^<h3)|(^<h4)|(^<h5)|(^<h6)|(^<table)|(^<ul)|(d_toparticle_flux_ad)/g;
    return regex.test( htmltext );
};

const is_title = (htmltext = "<html></html>") => {
    const regex = /(^<h1)|(^<h2)|(^<h3)|(^<h4)|(^<h5)|(^<h6)/g;
    return regex.test( htmltext );
};

const get_html_texts = (htmltext = "<html></html>") => {
    const dom = new JSDOM(htmltext);
    const source = dom.window.document.body.textContent.trim();
    return source;
};

/**
 * `<p>Foobar</p>` => `Foobar`
 * @param {String} htmltext HTML text
 * @returns {Array|null} Array or null
 */
export const GetTextByHtml = (htmltext = "<html></html>") => {
    if( should_not_parse(htmltext) ) {
        return null;
    }
    const source = get_html_texts(htmltext);
    const rendered = source.split("\n\n").filter( i => i.trim() !== "" );
    return rendered.length > 0 ? rendered : null;
};

/**
 * `<h3 id="h3_1">Foobar</h3>` => `Foobar`
 * @param {String} htmltext
 * @returns {String|null} Title text
 */
export const GetTitle = (htmltext = "<html></html>") => {
    const source = get_html_texts(htmltext);
    return is_title(htmltext) ? source : "null";
};
