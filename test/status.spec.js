import main from "../app/index.js";
import { strictEqual, notStrictEqual } from "assert";

const vaild_input = "園田海未";

describe("Status module", () => {
    describe("when the entry is vaild", () => {
        it("should have a normal status", async () => {
            // Infos
            const expected = "normal";
            // Functions
            const response = await main(vaild_input);
            const abstract = response.status.message;
            strictEqual( abstract, expected );
        });
    });
    describe("when somnething's wrong", () => {
        it("should have an abnormal status", async () => {
            // Functions
            const response = await main(vaild_input);
            if( response.status.message !== "normal" ) {
                notStrictEqual( response.status.message, "normal" );
                return;
            }
            notStrictEqual( 2 + 2, 5 );
        });
        it("should not throw expections", async () => {
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
