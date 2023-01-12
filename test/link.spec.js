import { LinkContent } from "../app/ContentParser/link.js";
import { strictEqual, deepStrictEqual } from "assert";


describe( "LinkContent", () => {
    describe( "when Pixiv image link provided", () => {
        const input = `<a href="https://www.pixiv.net/artworks/40559974" title="人魚姫" data-image-url="https://i.pximg.net/c/600x600/img-master/img/2013/12/28/01/11/14/40559974_p0_master1200.jpg" data-author-name="りっか" data-author-url="http://www.pixiv.net/member.php?id=1581111" data-caption="１４話どうなるのどうなるの・・・あと二週間って長い・・・！■そういえばキャラクターの名前、女性全員ひらがなで、男性は全員漢字一文字かと思っていたらみうなちゃんだけ女性なのに名前漢字でした・・・■12/28付けの総合DR第288位イラストDR第248位ありがとうございました＞＜" target="_blank" class="illust" gtm-class="article-body_illust" gtm-id="40559974"><img src="https://i.pximg.net/c/150x150/img-master/img/2013/12/28/01/11/14/40559974_p0_master1200.jpg" alt="人魚姫"></a>`;
        const object = new LinkContent(input);
        const expected = {
            href: "https://www.pixiv.net/artworks/40559974",
            entry: "40559974",
            text: "",
            mode: "image",
        };
        it("should get it's result", () => {
            deepStrictEqual( object.result, expected );
        });
    });
    describe( "when Pixiv Encyclopedia link provided", () => {
        const input = `<a href="/a/%E3%83%81%E3%83%BC%E3%82%BA%E3%82%B1%E3%83%BC%E3%82%AD%E9%8D%8B" gtm-class="article-body_article" gtm-id="チーズケーキ鍋">チーズケーキ鍋</a>`;
        const input2 = `<a href="/a/%E9%AB%98%E6%B5%B7%E5%8D%83%E6%AD%8C" gtm-class="article-body_article" gtm-id="高海千歌">次期主人公</a>`;
        const object = new LinkContent(input);
        const object2 = new LinkContent(input2);
        it("should get it's source link", () => {
            strictEqual( object.result.href, "/a/%E3%83%81%E3%83%BC%E3%82%BA%E3%82%B1%E3%83%BC%E3%82%AD%E9%8D%8B" );
            strictEqual( object2.result.href, "/a/%E9%AB%98%E6%B5%B7%E5%8D%83%E6%AD%8C" );
        });
        it("should get it's ID", () => {
            strictEqual( object.result.entry, "チーズケーキ鍋" );
            strictEqual( object2.result.entry, "高海千歌" );
        });
        it("should get it's text", () => {
            strictEqual( object.result.text, "チーズケーキ鍋" );
            strictEqual( object2.result.text, "次期主人公" );
        });
        it("'s type should be encyclopedia", () => {
            strictEqual( object.result.mode, "encyclopedia" );
            strictEqual( object2.result.mode, "encyclopedia" );
        });
    });
    describe( "when external link provided", () => {
        const input = `<a class="external-link" target="_blank" rel="noopener nofollow ugc" href="https://twitter.com/kayanoai_10th" gtm-class="article-body_external">ツイッター</a>`;
        const object = new LinkContent(input);
        const expected = {
            href: "https://twitter.com/kayanoai_10th",
            entry: "https://twitter.com/kayanoai_10th",
            text: "ツイッター",
            mode: "external",
        };
        it("should get it's result", () => {
            deepStrictEqual( object.result, expected );
        });
    });
});
