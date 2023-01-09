import PixivEncyclopedia from "./Encyclopedia/index.js";

const main = async (entry = "") => {
    const parser = new PixivEncyclopedia(entry);
    try {
        await parser.start();
        return parser.result;
    } catch (error) {
        console.error(error);
        throw new Error("Request failed");
    }
};

export default main;
