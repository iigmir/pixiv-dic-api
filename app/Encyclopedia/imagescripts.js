import PixivImageInfo from "../ImageInfo/index.js";

export const GetInageByEmbedimage = (embedimage = "<html></html>") => {
    const is_image = /class="embedimage"/.test(embedimage);
    if( is_image ) {
        const obj = new PixivImageInfo("embedimage", embedimage);
        return obj.result;
    }
    return null;
};
export const GetInageById = (id = "") => {
    const obj = new PixivImageInfo("id", id);
    return obj.result;
};
