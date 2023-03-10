import PixivImageInfo from "../ImageInfo/index.js";

export const GetImageByEmbedimage = (embedimage = "<html></html>") => {
    const is_embed = /class="embedimage"/.test(embedimage);
    if( is_embed ) {
        const obj = new PixivImageInfo("embedimage", embedimage);
        return obj.result;
    }
    return null;
};

export const GetInageById = (id = "") => {
    const obj = new PixivImageInfo("id", id);
    return obj.result;
};
