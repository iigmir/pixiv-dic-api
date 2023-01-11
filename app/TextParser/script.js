import { JSDOM } from "jsdom";

const should_not_parse = (htmltext = "<html></html>") => {
    const regex = /(^<h1)|(^<h2)|(^<h3)|(^<h4)|(^<h5)|(^<h6)|(^<table)|(^<ul)|(d_toparticle_flux_ad)/g;
    return regex.test( htmltext );
};

/**
 * `<p>Foobar</p>` => `Foobar`.
 * @param {String} htmltext HTML text
 */
export const GetTextByHtml = (htmltext = "<html></html>") => {
    if( should_not_parse(htmltext) ) {
        return null;
    }
    const dom = new JSDOM(htmltext);
    const source = dom.window.document.body.textContent.trim();
    const rendered = source.split("\n\n").filter( i => i.trim() !== "" );
    return rendered.length > 0 ? rendered : [];
};
