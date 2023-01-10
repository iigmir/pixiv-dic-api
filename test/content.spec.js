import main from "../app/index.js";
import { strictEqual, deepStrictEqual } from "assert";

describe("Content module", () => {
    const vaild_input = "園田海未";
    it("should have a HTML source", async () => {
        // Infos
        const expected = "string";
        // Functions
        const response = await main(vaild_input);
        const content = response.content[0];
        strictEqual( typeof(content), expected );
    });
    // it("should return a breadcrumb", async () => {
    //     // Infos
    //     const expected = {
    //         name: "ピクシブ百科事典",
    //         position: 1
    //     };
    //     // Functions
    //     const response = await main(vaild_input);
    //     const breadcrumb = response.breadcrumb;
    //     deepStrictEqual( breadcrumb[0], expected );
    // });
    // it("should return content", async () => {
    //     // Infos
    //     const expected = 8;
    //     // Functions
    //     const response = await main(vaild_input);
    //     const content = response.content;
    //     strictEqual( content.length, expected );
    // });
});

