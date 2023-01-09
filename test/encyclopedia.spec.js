import main from "../app/encyclopedia.js";
import { equal } from "assert";


describe("Parser module", () => {
    describe("when the entry is vaild", () => {
        const vaild_input = "園田海未";
        it("should return a summary", async () => {
            // Infos
            const expected = "『ラブライブ!』の登場人物。通称「海未ちゃん」。";
            // Functions
            const response = await main(vaild_input);
            const abstract = response.summary.abstract;
            equal( abstract, expected );
        });
        it("should return a breadcrumb", async () => {
            // Infos
            const expected = {
                name: "ピクシブ百科事典",
                position: 1
            };
            // Functions
            const response = await main(vaild_input);
            const breadcrumb = response.breadcrumb;
            equal( breadcrumb, expected );
        });
    });

    // ピクシブ百科事典
});

