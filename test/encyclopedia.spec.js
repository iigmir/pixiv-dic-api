import main from "../app/index.js";
import { strictEqual, deepStrictEqual } from "assert";

const is_stable = response => response.status.message === "normal";

describe("Main parser module", () => {
    const vaild_input = "園田海未";
    it("should return a summary", async () => {
        // Infos
        const expected = "『ラブライブ!』の登場人物。通称「海未ちゃん」。";
        // Functions
        const response = await main(vaild_input);
        if( is_stable(response) ) {
            const abstract = response.summary.abstract;
            strictEqual( abstract, expected );
        } else {
            strictEqual( response.status.message, "normal" );
        }
    });
    it("should return a breadcrumb", async () => {
        // Infos
        const expected = {
            name: "ピクシブ百科事典",
            position: 1
        };
        // Functions
        const response = await main(vaild_input);
        if( is_stable(response) ) {
            const breadcrumb = response.breadcrumb;
            deepStrictEqual( breadcrumb[0], expected );
        } else {
            strictEqual( response.status.message, "normal" );
        }
    });
    it("should return content", async () => {
        // Infos
        const expected = 8;
        // Functions
        const response = await main(vaild_input);
        if( is_stable(response) ) {
            const content = response.content;
            strictEqual( content.length, expected );
        } else {
            strictEqual( response.status.message, "normal" );
        }
    });
});

