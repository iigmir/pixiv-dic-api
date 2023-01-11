import { JSDOM } from "jsdom";

/**
 * `<p>Foobar</P>` => `Foobar`.
 * @param {String} htmltext HTML text
 */
export const GetTextByHtml = (htmltext = "<html></html>") => {
    const dom = new JSDOM(htmltext);
    return dom.window.document.body.innerText;
};
