import main from "../app/enc.js";
import { strictEqual, deepStrictEqual } from "assert";

const umi_content = [{
    title: "プロフィールです。",
    contents: [{
        source: "<tbody><tr><th>名前</th><td>園田海未</td></tr><tr><th>英字表記</th><td>UMI SONODA</td></tr><tr><th>読み方</th><td>うみ　そのだ</td></tr><tr><th>学年</th><td>2年</td></tr><tr><th>年齢</th><td>16歳</td></tr><tr><th>身長</th><td>159cm（シリーズ15位タイ）</td></tr><tr><th>血液型</th><td>A型</td></tr><tr><th>誕生日</th><td><a href=\"/a/3%E6%9C%8815%E6%97%A5\" gtm-class=\"article-body_article\" gtm-id=\"3月15日\">3月15日</a></td></tr><tr><th>星座</th><td><a href=\"/a/%E9%AD%9A%E5%BA%A7\" gtm-class=\"article-body_article\" gtm-id=\"魚座\">魚座</a></td></tr><tr><th>3size</th><td>B76/W58/H80</td></tr><tr><th>好きな食べ物</th><td>穂乃果の家のまんじゅう</td></tr><tr><th>嫌いな食べ物</th><td><a href=\"/a/%E7%82%AD%E9%85%B8%E9%A3%B2%E6%96%99\" gtm-class=\"article-body_article\" gtm-id=\"炭酸飲料\">炭酸飲料</a></td></tr><tr><th>イメージカラー</th><td><a href=\"/a/%E9%9D%92\" gtm-class=\"article-body_article\" gtm-id=\"青\">青</a> (<a href=\"/a/%E8%97%8D%E8%89%B2\" gtm-class=\"article-body_article\" gtm-id=\"藍色\">藍色</a>)</td></tr><tr><th>所属ユニット</th><td><a href=\"/a/lily_white\" gtm-class=\"article-body_article\" gtm-id=\"lily_white\">lily white</a></td></tr><tr><th>一人称</th><td>わたし</td></tr><tr><th>CV.</th><td><a href=\"/a/%E4%B8%89%E6%A3%AE%E3%81%99%E3%81%9A%E3%81%93\" gtm-class=\"article-body_article\" gtm-id=\"三森すずこ\">三森すずこ</a></td></tr></tbody>"
    }, {
        source: `<br>`
    }]
}, {
    title: "人物像です。",
    contents: [{
        source: `<div class="embedimage"><a href="https://www.pixiv.net/artworks/49284361" title="海未誕" data-image-url="https://i.pximg.net/c/600x600/img-master/img/2015/03/15/04/37/46/49284361_p0_master1200.jpg" data-author-name="しらび" data-author-url="http://www.pixiv.net/member.php?id=216403" data-caption="海未ちゃん誕生日おめでとう" target="_blank" class="illust" gtm-class="article-body_illust" gtm-id="49284361"><img src="https://i.pximg.net/c/260x260/img-master/img/2015/03/15/04/37/46/49284361_p0_square1200.jpg" alt="海未誕"></a><div class="info" style="display: none;"><h3><a href="https://www.pixiv.net/artworks/49284361" target="_blank">海未誕</a></h3>by <a href="http://www.pixiv.net/member.php?id=216403" target="_blank" gtm-class="article-bottom_illust-author" gtm-id="">しらび</a></div></div>`
    },
    {
        source: `
        <br>
        性格は各サイトによって表記が一定していない。
        <br>
        またメディアごとの設定の違いもメンバーの中ではかなり多く、設定の変化に富むキャラである。
        <br>

        <br>
        <a href="/a/%E9%9F%B3%E3%83%8E%E6%9C%A8%E5%9D%82%E5%AD%A6%E9%99%A2" gtm-class="article-body_article" gtm-id="音ノ木坂学院">音ノ木坂学院</a>の統廃合の阻止を目的としたスクールアイドルプロジェクト『<a href="/a/%CE%BC%27s" gtm-class="article-body_article" gtm-id="μ's">μ's</a>』のメンバー。
        <br>
        親の代から縁のある音ノ木坂学院の統廃合に心を痛めている。
        <br>
        実家は<a href="/a/%E6%97%A5%E6%9C%AC%E8%88%9E%E8%B8%8A" gtm-class="article-body_article" gtm-id="日本舞踊">日本舞踊</a>の家元。
        <br>
        特技は箏、長唄、剣道。
        <br>
        趣味は読書、書道。
        <br>
        チャームポイントはまっすぐ長く伸ばした、青みがかった黒髪。
        <br>
        貧乳と勘違いされがちだが胸の大きさは並らしく、ファンによって実証までされてしまった。
        <br>

        <br>
        生真面目な性格で、ルール違反や怠けものに対して厳しい。
        <br>
        長所は意志が強いところと集中力があるところ。
        <br>
        家柄と性格ゆえなのか、口調は誰に対しても<b>ですます口調な丁寧語</b>。
        <br>
        弱点は<a href="/a/%E6%81%A5%E3%81%9A%E3%81%8B%E3%81%97%E3%81%8C%E3%82%8A%E5%B1%8B" gtm-class="article-body_article" gtm-id="恥ずかしがり屋">恥ずかしがり屋</a>な所で、恋愛や性的な事柄については苦手としている。
        <br>
        一転して、μ'sの楽曲PVでは<b><a href="/a/%E6%8A%95%E3%81%92%E3%82%AD%E3%83%83%E3%82%B9%E9%AD%94%E6%B5%B7%E6%9C%AA%E3%81%A1%E3%82%83%E3%82%93" gtm-class="article-body_article" gtm-id="投げキッス魔海未ちゃん">ほぼ全てのPVで投げキッスをする</a></b>など物凄い大胆。ちなみにこれは「<a href="/a/%E7%B5%A2%E7%80%AC%E7%B5%B5%E9%87%8C" gtm-class="article-body_article" gtm-id="絢瀬絵里">絵里</a>から言われた」と、ある雑誌のインタビューで答えている。が、ラブライブ!は基本的にパラレル仕様なので本来のことはわからない。
        <br>`
    }, {
        source: `<a href="https://www.pixiv.net/artworks/42987895" title="海未ちゃん" data-image-url="https://i.pximg.net/c/600x600/img-master/img/2014/04/20/00/20/17/42987895_p0_master1200.jpg" data-author-name="Hiten" data-author-url="http://www.pixiv.net/member.php?id=490219" data-caption="♡~(●.<)" target="_blank" class="illust" gtm-class="article-body_illust" gtm-id="42987895"><img src="https://i.pximg.net/c/260x260/img-master/img/2014/04/20/00/20/17/42987895_p0_square1200.jpg" alt="海未ちゃん"></a><div class="info" style="display: none;"><h3><a href="https://www.pixiv.net/artworks/42987895" target="_blank">海未ちゃん</a></h3>by <a href="http://www.pixiv.net/member.php?id=490219" target="_blank" gtm-class="article-bottom_illust-author" gtm-id="">Hiten</a></div>`
    }, {
        source: `
        <br>

        <br>
        全メディアにおいて、<a href="/a/%E9%AB%98%E5%9D%82%E7%A9%82%E4%B9%83%E6%9E%9C" gtm-class="article-body_article" gtm-id="高坂穂乃果">高坂穂乃果</a>、<a href="/a/%E5%8D%97%E3%81%93%E3%81%A8%E3%82%8A" gtm-class="article-body_article" gtm-id="南ことり">南ことり</a>とは幼なじみである。
        <br>

        <br>
        2011年8月5日～14日に、秋葉原の「キュアメイドカフェ」にて開催されたイベントである「ラブライブ！カフェ」の期間中に実施された「μ’ｓイメージガール投票」にて 見事1位に輝いた。キュアメイドカフェ公式サイトより、描きおろしご褒美イラストがダウンロードできる（&gt;<a class="external-link" target="_blank" rel="noopener nofollow ugc" href="http://www.curemaid.jp/?page_id=3879" gtm-class="article-body_external">こちら</a>）。なお、テレビアニメ版でのことりのバイト先が同店と設定されてしまったため、実質的にイメージガールの座を奪われてしまった。
        <br>
        2014年3月に<a href="/a/%E3%83%AD%E3%83%BC%E3%82%BD%E3%83%B3" gtm-class="article-body_article" gtm-id="ローソン">ローソン</a>とのコラボレーションで行われた投票「ローソンイメージガール決定戦」では見事1位に輝いた。おめでとう！
        <br>

        <br>
        ファンからの愛称は海未ちゃん。一部では名前の漢字をそのまま読んで<a href="/a/%E3%81%86%E3%81%BF%E3%81%BF" gtm-class="article-body_article" gtm-id="うみみ">うみみ</a>とも呼ばれるが、元ネタが元ネタなのであんまりファンの前では使わないよう注意。
        <br>

        <br>
        `
    }]
}];

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
            const expected = umi_content;
            // Functions
            const response = await main(vaild_input);
            const content = response.content;
            strictEqual( content[0].title, expected[0].title );
        });
    });
});

