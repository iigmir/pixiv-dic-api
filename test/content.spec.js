import main from "../app/index.js";
import { strictEqual, deepStrictEqual } from "assert";

const is_stable = response => response.status.code === 200;

describe("Content module", () => {
    const vaild_input = "園田海未";
    it("should have a HTML source", async () => {
        // Infos
        const expected = "string";
        // Functions
        const response = await main(vaild_input);
        if( is_stable(response) ) {
            const content = response.content[0].contents[0];
            strictEqual( typeof(content.source), expected );
        } else {
            strictEqual( response.status.message, "normal" );
        }
    });
    it("should have an image if it is an image", async () => {
        // Infos
        const expected = "49284361";
        // Functions
        const response = await main(vaild_input);
        if( is_stable(response) ) {
            const content = response.content[2].contents[0];
            strictEqual( content.image.id, expected );
        } else {
            strictEqual( response.status.message, "normal" );
        }
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

