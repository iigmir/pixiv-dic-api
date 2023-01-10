import PixivEncyclopedia from "./Encyclopedia/index.js";

const main = async (entry = "") => {
    const parser = new PixivEncyclopedia(entry);
    try {
        await parser.start();
        return parser.result;
    } catch (error) {
        throw new Error(error);
    }
};

export default main;
