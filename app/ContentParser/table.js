import { JSDOM } from "jsdom";

const GetTableDom = (source = "<div></div>") => {
    try {
        const dom = new JSDOM( source );
        return dom.window.document.querySelector("table");
    } catch (error) {
        return null;
    }
};

export const GetTableData = (input = "<div></div>") => {
    const table = GetTableDom(input);
    if( table != null ) {
        const td_cb = td => td.textContent;
        const tr_cb = tr => [...tr.querySelectorAll("th, td")].map( td_cb );
        return [...table.querySelectorAll("tr")].map( tr_cb );
    }
    return null;
};
