import main from "../app/index.js";
import { strictEqual, deepStrictEqual } from "assert";

const is_stable = response => response.status.message === "normal";

describe("Main parser module", async () => {
    const vaild_input = "園田海未";
    const response = await main(vaild_input);
    it("should return a summary", () => {
        // Infos
        const expected = "『ラブライブ!』の登場人物。通称「海未ちゃん」。";
        if( is_stable(response) ) {
            const abstract = response.summary.abstract;
            strictEqual( abstract, expected );
        } else {
            strictEqual( response.status.message, "normal" );
        }
    });
    it("should return a breadcrumb", () => {
        // Infos
        const expected = {
            name: "ピクシブ百科事典",
            position: 1
        };
        if( is_stable(response) ) {
            const breadcrumb = response.breadcrumb;
            deepStrictEqual( breadcrumb[0], expected );
        } else {
            strictEqual( response.status.message, "normal" );
        }
    });
    it("should return content", () => {
        // Infos
        const expected = 8;
        if( is_stable(response) ) {
            const content = response.content;
            strictEqual( content.length, expected );
        } else {
            strictEqual( response.status.message, "normal" );
        }
    });
    it("should return relation", async () => {
        // Infos
        const expected = {
            parents: [
                "μ's"
            ],
            children: [
                "ラブアローシュート",
                "海未ちゃん顔芸シリーズ",
                "うっみうっみうー",
                "もっと見る",
                "あなたは最低です!",
                "うみキチ",
                "山頂アタック",
                "海未ちゃんは不憫",
                "海未開き",
                "海未の日",
                "海未"
            ],
            siblings: [
                "矢澤にこ",
                "南ことり",
                "絢瀬絵里",
                "もっと見る",
                "東條希",
                "西木野真姫",
                "小泉花陽",
                "高坂穂乃果",
                "星空凛",
                "BiBi"
            ],
            categories: [
                "キャラクター",
                "アニメ",
                "音楽"
            ],
        };
        if( is_stable(response) ) {
            const relation = response.relation;
            deepStrictEqual( relation, expected );
        } else {
            strictEqual( response.status.message, "normal" );
        }
    });
});

