import main from "../app/index.js";
import { strictEqual, deepStrictEqual } from "assert";

const is_stable = response => response.status.code === 200;

describe("Content module", () => {
    const vaild_input = "園田海未";
    describe( "Basic", () => {
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
    } );
    describe( "Image interface", () => {
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
    } );
    describe( "Text", () => {
        it("should have a text if it is a text", async () => {
            // Infos
            const expected = ["「それが穂乃果の凄い所なんです。わたしもことりも、μ'sのみんなもそう思っています」"];
            // Functions
            const response = await main(vaild_input);
            if( is_stable(response) ) {
                const content = response.content[0].contents[2];
                deepStrictEqual( content.texts, expected );
            } else {
                strictEqual( response.status.message, "normal" );
            }
        });
    } );
    describe( "Basic", () => {} );

});
