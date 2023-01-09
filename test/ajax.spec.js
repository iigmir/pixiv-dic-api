import { ExampleRequest } from "../api/example.js";
import { GetTag, GetEncyclopediaEntry } from "../api/pixiv.js";
import { strictEqual } from "assert";

describe("AJAX module", () => {
    describe("ExampleRequest", () => {
        it("should success", () => {
            ExampleRequest().then(user => {
                strictEqual(typeof (user[0].id), "number");
            });
        });
    });
    describe("GetTags", () => {
        it("should return vaild response when there's an entry", async () => {
            // Infos
            const input = "園田海未";
            const expected = "『ラブライブ!』の登場人物。通称「海未ちゃん」。";
            // Functions
            const response = await GetTag(input);
            const abstract = response.body.pixpedia.abstract;
            strictEqual( abstract, expected );
        });
        it("should return invaild response when there's no entry", async () => {
            // Infos
            const input = "qawsedrftgyhujiko";
            const expected = undefined;
            // Functions
            const response = await GetTag(input);
            const abstract = response.body.pixpedia.abstract;
            strictEqual( abstract, expected );
        });
    });
    describe("GetEncyclopediaEntry", () => {
        it("should return a HTML", async () => {
            // Infos
            const input = "園田海未";
            const expected = true;
            // Functions
            const response = await GetEncyclopediaEntry(input);
            const result = /<!DOCTYPE html>/.test( response );
            strictEqual( result, expected );
        });
    });
});

