import main from "../app/index.js";
import { strictEqual, deepStrictEqual, notStrictEqual } from "assert";

describe("Parser module", () => {
    describe("when the entry is vaild", () => {
        const vaild_input = "園田海未";
        it("should return a summary", async () => {
            // Infos
            const expected = "『ラブライブ!』の登場人物。通称「海未ちゃん」。";
            // Functions
            const response = await main(vaild_input);
            const abstract = response.summary.abstract;
            strictEqual( abstract, expected );
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
            deepStrictEqual( breadcrumb[0], expected );
        });
        it("should return content", async () => {
            // Infos
            const expected = 8;
            // Functions
            const response = await main(vaild_input);
            const content = response.content;
            strictEqual( content.length, expected );
        });
    });
    describe("when somnething's wrong", () => {
        const vaild_input = "園田海未";
        it("should not throw expection", async () => {
            // Functions
            const response = await main(vaild_input);
            if( response.status.message !== "normal" ) {
                strictEqual( response.content, null );
                return;
            }
            notStrictEqual( 2 + 2, 5 );
        });
    });
});

