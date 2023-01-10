import request from "./ajax.js";

export const GetTag = (tag = "pixiv") => {
    const params = "lang=ja";
    const url = `https://www.pixiv.net/ajax/search/tags/${tag}?${params}`;
    return request(url);
};

export const GetEncyclopediaEntry = (tag = "pixiv") => {
    const url = `https://dic.pixiv.net/a/${tag}`;
    return request(url);
};

export const GetImageLinks = (id = "") => {
    const params = "lang=ja";
    const url = `https://www.pixiv.net/ajax/illust/${id}/pages?${params}`;
    return request(url);
}
