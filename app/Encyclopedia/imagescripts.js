import PixivImageInfo from "../ImageInfo/index.js";

export const GetInageByEmbedimage = (embedimage = "<html></html>") => {
    const obj = new PixivImageInfo();
    obj.embedimage = embedimage;
    return obj.result;
};
export const GetInageById = (id = "") => {
    const obj = new PixivImageInfo();
    obj.id = id;
    return obj.result;
};
