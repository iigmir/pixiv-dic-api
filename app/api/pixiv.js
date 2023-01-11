import request from "./ajax.js";
import { JSDOM } from "jsdom";

export const GetTag = (tag = "pixiv") => {
    const params = "lang=ja";
    const url = `https://www.pixiv.net/ajax/search/tags/${tag}?${params}`;
    return request(url);
};

export const GetEncyclopediaEntry = (tag = "pixiv") => {
    const url = `https://dic.pixiv.net/a/${tag}`;
    const ajax_response = new Promise( (resolve, reject) => {
        const r = request(url);
        const catch_error = error => reject( error );
        r.then( response => {
            const under_maintenance = /メンテナンス中/.test( response );
            if( under_maintenance ) {
                catch_error( "Under maintenance" );
            }
            resolve( response );
        }).catch( catch_error );
    });
    return ajax_response;
};

export const GetImageLinks = (id = "") => {
    const params = "lang=ja";
    const url = `https://www.pixiv.net/ajax/illust/${id}/pages?${params}`;
    return request(url);
};

const GetImageEntry = (id = "") => {
    const url = `https://www.pixiv.net/artworks/${id}`;
    return request(url);
};

export const GetImageMetadata = (id = "") => {
    return new Promise( (resolve, reject) => {
        const ajax = GetImageEntry(id);
        const render = (html = "<html></html>") => {
            const { document } = (new JSDOM(html)).window;
            const text = document.querySelector("#meta-preload-data")?.content ?? "{}";
            resolve(JSON.parse(text));
        };
        const failed = (error) => reject(error);
        ajax.then( render ).catch( failed );
    });
};
