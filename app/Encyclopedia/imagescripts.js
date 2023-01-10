import PixivImageInfo from "../ImageInfo/index.js";

export const GetInageByEmbedimage = (embedimage = "<html></html>") => {
    const obj = new PixivImageInfo("embedimage", embedimage);
    return obj.result;
};
export const GetInageById = (id = "") => {
    const obj = new PixivImageInfo("id", id);
    return obj.result;
};
