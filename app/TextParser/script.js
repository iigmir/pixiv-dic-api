import { JSDOM } from "jsdom";

/**
 * `<p>Foobar</P>` => `Foobar`.
 * @param {String} htmltext HTML text
 */
export const GetTextByHtml = (htmltext = "<html></html>") => {
    const dom = new JSDOM(htmltext);
    const source = dom.window.document.body.textContent.trim();
    const rendered = source.split("\n\n");
    return { source, rendered };
};
