import { GetTextByHtml } from "../app/TextParser/script.js";
import { deepStrictEqual } from "assert";

describe("Text module", () => {
    describe("Format", () => {
        it("should not render title", () => {
            const input = `<h3 id="h3_2">悪魔の実</h3>`;
            const expected = null;
            // Script
            const result = GetTextByHtml(input);
            deepStrictEqual( result, expected );
        });
        it("should not render table", () => {
            const input = `<table><tr><th>参戦作品</th><th>備考</th></tr><tr><td><a href="/a/%E3%82%AC%E3%83%AB%E3%83%91%E2%98%86%E3%83%94%E3%82%B3" gtm-class="article-body_article" gtm-id="ガルパ☆ピコ">ガルパ☆ピコ</a></td><td>後に第2弾として、『ガルパ☆ピコ ～大盛り～』、第3弾で『ガルパ☆ピコ ふぃーばー！』も登場。<a href="/a/%E3%83%B4%E3%82%A1%E3%82%A4%E3%82%B9%E3%82%B7%E3%83%A5%E3%83%B4%E3%82%A1%E3%83%AB%E3%83%84" gtm-class="article-body_article" gtm-id="ヴァイスシュヴァルツ">ヴァイスシュヴァルツ</a>とは異なり、本編である『<a href="/a/%E3%83%90%E3%83%B3%E3%83%89%E3%83%AA" gtm-class="article-body_article" gtm-id="バンドリ">バンドリ</a>』及び『<a href="/a/%E3%82%AC%E3%83%BC%E3%83%AB%E3%82%BA%E3%83%90%E3%83%B3%E3%83%89%E3%83%91%E3%83%BC%E3%83%86%E3%82%A3" gtm-class="article-body_article" gtm-id="ガールズバンドパーティ">ガールズバンドパーティ</a>』ではなく、ミニアニメからの参戦。</td></tr><tr><td><a href="/a/%E3%82%B9%E3%82%BF%E3%83%AA%E3%83%A9" gtm-class="article-body_article" gtm-id="スタリラ">スタリラ</a></td><td>ガルパ☆ピコとは違い、賛否両論が激しい作品になっているミニアニメ『<a href="/a/%E5%B0%91%E5%A5%B3%E2%98%86%E5%AF%B8%E5%8A%87%E3%82%AA%E3%83%BC%E3%83%AB%E3%82%B9%E3%82%BF%E3%82%A1%E3%83%A9%E3%82%A4%E3%83%88" gtm-class="article-body_article" gtm-id="少女☆寸劇オールスタァライト">少女☆寸劇オールスタァライト</a>』ではなく、本編から採用。後述するが、他のReバース参戦作品と比べると、不遇な扱いになってしまっている。</td></tr><tr><td><a href="/a/D4DJ" gtm-class="article-body_article" gtm-id="D4DJ">D4DJ</a></td><td>当初はミニアニメはなかったため、本編及び<a href="/a/%E3%82%B0%E3%83%AB%E3%83%9F%E3%82%AF" gtm-class="article-body_article" gtm-id="グルミク">グルミク</a>から採用している。ミニアニメ『<a href="/a/%E3%81%B7%E3%81%A3%E3%81%A1%E3%81%BF%E3%81%8F" gtm-class="article-body_article" gtm-id="ぷっちみく">ぷっちみく</a>』の参戦はない模様。</td></tr><tr><td><a href="/a/%E7%95%B0%E4%B8%96%E7%95%8C%E3%81%8B%E3%82%8B%E3%81%A6%E3%81%A3%E3%81%A8" gtm-class="article-body_article" gtm-id="異世界かるてっと">異世界かるてっと</a></td><td><a href="/a/Re%EF%BC%9A%E3%82%BC%E3%83%AD%E3%81%8B%E3%82%89%E5%A7%8B%E3%82%81%E3%82%8B%E7%95%B0%E4%B8%96%E7%95%8C%E7%94%9F%E6%B4%BB" gtm-class="article-body_article" gtm-id="Re：ゼロから始める異世界生活">Re：ゼロから始める異世界生活</a>のキャラの名前があるカードのみ、<a href="/a/Re%EF%BC%9A%E3%82%BC%E3%83%AD%E3%81%8B%E3%82%89%E5%A7%8B%E3%82%81%E3%82%8B%E7%95%B0%E4%B8%96%E7%95%8C%E7%94%9F%E6%B4%BB" gtm-class="article-body_article" gtm-id="Re：ゼロから始める異世界生活">Re：ゼロから始める異世界生活</a>のカードと一緒にネオスタンダード構築のデッキを作ることが可能。また、後に<a href="/a/%E3%81%93%E3%81%AE%E7%B4%A0%E6%99%B4%E3%82%89%E3%81%97%E3%81%84%E4%B8%96%E7%95%8C%E3%81%AB%E7%A5%9D%E7%A6%8F%E3%82%92%21" gtm-class="article-body_article" gtm-id="この素晴らしい世界に祝福を!">この素晴らしい世界に祝福を!</a>のキャラの名前があるカードも、<a href="/a/%E3%81%93%E3%81%AE%E7%B4%A0%E6%99%B4%E3%82%89%E3%81%97%E3%81%84%E4%B8%96%E7%95%8C%E3%81%AB%E7%A5%9D%E7%A6%8F%E3%82%92%21" gtm-class="article-body_article" gtm-id="この素晴らしい世界に祝福を!">この素晴らしい世界に祝福を!</a>のカードと一緒にネオスタンダード構築のデッキを作成することが可能。</td></tr><tr><td><a href="/a/Re%EF%BC%9A%E3%82%BC%E3%83%AD%E3%81%8B%E3%82%89%E5%A7%8B%E3%82%81%E3%82%8B%E7%95%B0%E4%B8%96%E7%95%8C%E7%94%9F%E6%B4%BB" gtm-class="article-body_article" gtm-id="Re：ゼロから始める異世界生活">Re：ゼロから始める異世界生活</a></td><td>前述の<a href="/a/%E7%95%B0%E4%B8%96%E7%95%8C%E3%81%8B%E3%82%8B%E3%81%A6%E3%81%A3%E3%81%A8" gtm-class="article-body_article" gtm-id="異世界かるてっと">異世界かるてっと</a>のリゼロのキャラが描かれたカードと一緒にネオスタンダード構築のデッキを作ることが可能。</td></tr><tr><td><a href="/a/%E6%9D%B1%E6%96%B9project" gtm-class="article-body_article" gtm-id="東方project">東方project</a></td><td>第2弾が販売される他、第1弾のパックなどの収録カードが、<b>リファインブースターパック</b>で<b>『Reバース』史上初の</b>再録決定となった。なお、『<a class="no-article" href="/a/%E6%9D%B1%E6%96%B9LostWord">東方LostWord</a>』のイラストも登場する(第2弾のみ)。</td></tr><tr><td><a href="/a/%E3%83%9B%E3%83%AD%E3%83%A9%E3%82%A4%E3%83%96" gtm-class="article-body_article" gtm-id="ホロライブ">ホロライブ</a></td><td>当初は4期生(ゲーマーズ含む)までが発売されていたが、『ブシロード TCG戦略発表会2022 春』で<b>5期生の参戦も判明された。</b>また、<a href="/a/%E6%A1%90%E7%94%9F%E3%82%B3%E3%82%B3" gtm-class="article-body_article" gtm-id="桐生ココ">桐生ココ</a>や<a href="/a/%E6%BD%A4%E7%BE%BD%E3%82%8B%E3%81%97%E3%81%82" gtm-class="article-body_article" gtm-id="潤羽るしあ">潤羽るしあ</a>のように、発売後、様々な事情で引退したキャラも使うことが可能。</td></tr><tr><td><a href="/a/%E3%81%94%E6%B3%A8%E6%96%87%E3%81%AF%E3%81%86%E3%81%95%E3%81%8E%E3%81%A7%E3%81%99%E3%81%8B%3F" gtm-class="article-body_article" gtm-id="ご注文はうさぎですか?">ご注文はうさぎですか？ BLOOM</a></td><td>この作品のブースターパック発売以降、RRRのカードのみ、金色の箔押しが入った。</td></tr><tr><td><a href="/a/%E3%82%A2%E3%82%BA%E3%83%BC%E3%83%AB%E3%83%AC%E3%83%BC%E3%83%B3" gtm-class="article-body_article" gtm-id="アズールレーン">アズールレーン</a></td><td>第2弾も発売されている。外伝作品である『<a href="/a/%E3%81%B3%E3%81%9D%E3%81%8F%E3%81%9C%E3%82%93%E3%81%97%E3%82%93%E3%81%A3%21" gtm-class="article-body_article" gtm-id="びそくぜんしんっ!">びそくぜんしんっ!</a>』は参戦していない。</td></tr><tr><td><a href="/a/%E3%82%B7%E3%83%B3%E3%83%87%E3%83%AC%E3%83%A9%E3%82%AC%E3%83%BC%E3%83%AB%E3%82%BA%E5%8A%87%E5%A0%B4" gtm-class="article-body_article" gtm-id="シンデレラガールズ劇場">シンデレラガールズ劇場</a></td><td></td></tr><tr><td><a href="/a/SSSS.GRIDMAN" gtm-class="article-body_article" gtm-id="SSSS.GRIDMAN">SSSS.GRIDMAN</a></td><td><a href="/a/SSSS.DYNAZENON" gtm-class="article-body_article" gtm-id="SSSS.DYNAZENON">SSSS.DYNAZENON</a>と一緒にネオスタンダード構築のデッキを作ることが可能。</td></tr><tr><td><a href="/a/SSSS.DYNAZENON" gtm-class="article-body_article" gtm-id="SSSS.DYNAZENON">SSSS.DYNAZENON</a></td><td><a href="/a/SSSS.GRIDMAN" gtm-class="article-body_article" gtm-id="SSSS.GRIDMAN">SSSS.GRIDMAN</a>と一緒にネオスタンダード構築のデッキを作ることが可能。</td></tr><tr><td><a href="/a/%E3%81%B2%E3%81%90%E3%82%89%E3%81%97%E3%81%AE%E3%81%AA%E3%81%8F%E9%A0%83%E3%81%AB" gtm-class="article-body_article" gtm-id="ひぐらしのなく頃に">ひぐらしのなく頃に 業</a></td><td></td></tr><tr><td><a href="/a/%E6%96%B0%E6%97%A5%E6%9C%AC%E3%83%97%E3%83%AD%E3%83%AC%E3%82%B9" gtm-class="article-body_article" gtm-id="新日本プロレス">新日本プロレス</a></td><td>何故か<b>ブースターパック第1弾(2021年発売)の後に、『ブシロード TCG戦略発表会2022 春』でトライアルデッキが販売されることが決定されている。</b></td></tr><tr><td><a href="/a/%E3%81%BC%E3%81%8F%E3%81%9F%E3%81%A1%E3%81%AE%E3%83%AA%E3%83%A1%E3%82%A4%E3%82%AF" gtm-class="article-body_article" gtm-id="ぼくたちのリメイク">ぼくたちのリメイク</a></td><td></td></tr><tr><td><a href="/a/%E3%82%B4%E3%82%B8%E3%83%A9S.P" gtm-class="article-body_article" gtm-id="ゴジラS.P">ゴジラS.P</a></td><td></td></tr><tr><td><a href="/a/%E5%8E%9F%E7%A5%9E" gtm-class="article-body_article" gtm-id="原神">原神</a></td><td><b>史上初の発売中止作品になってしまった。</b>これについては後述する。</td></tr><tr><td><a href="/a/%E3%83%96%E3%83%AB%E3%83%BC%E3%82%A2%E3%83%BC%E3%82%AB%E3%82%A4%E3%83%96" gtm-class="article-body_article" gtm-id="ブルーアーカイブ">ブルーアーカイブ</a></td><td>第2弾が販売されることが判明されている。</td></tr><tr><td><a href="/a/STARDOM" gtm-class="article-body_article" gtm-id="STARDOM">STARDOM</a></td><td></td></tr><tr><td><a href="/a/%E3%81%93%E3%81%AE%E7%B4%A0%E6%99%B4%E3%82%89%E3%81%97%E3%81%84%E4%B8%96%E7%95%8C%E3%81%AB%E7%A5%9D%E7%A6%8F%E3%82%92%21" gtm-class="article-body_article" gtm-id="この素晴らしい世界に祝福を!">この素晴らしい世界に祝福を!</a></td><td>前述の<a href="/a/Re%EF%BC%9A%E3%82%BC%E3%83%AD%E3%81%8B%E3%82%89%E5%A7%8B%E3%82%81%E3%82%8B%E7%95%B0%E4%B8%96%E7%95%8C%E7%94%9F%E6%B4%BB" gtm-class="article-body_article" gtm-id="Re：ゼロから始める異世界生活">Re：ゼロから始める異世界生活</a>同様、前述の<a href="/a/%E7%95%B0%E4%B8%96%E7%95%8C%E3%81%8B%E3%82%8B%E3%81%A6%E3%81%A3%E3%81%A8" gtm-class="article-body_article" gtm-id="異世界かるてっと">異世界かるてっと</a>の『<a href="/a/%E3%81%93%E3%81%AE%E7%B4%A0%E6%99%B4%E3%82%89%E3%81%97%E3%81%84%E4%B8%96%E7%95%8C%E3%81%AB%E7%A5%9D%E7%A6%8F%E3%82%92%21" gtm-class="article-body_article" gtm-id="この素晴らしい世界に祝福を!">この素晴らしい世界に祝福を!</a>』のキャラが描かれたカードと一緒にネオスタンダード構築のデッキを作ることが可能。</td></tr><tr><td><a href="/a/%E3%81%8B%E3%81%8E%E3%81%AA%E3%81%A9" gtm-class="article-body_article" gtm-id="かぎなど">かぎなど</a></td><td></td></tr><tr><td><a href="/a/%E3%82%86%E3%82%8B%E3%82%AD%E3%83%A3%E3%83%B3%E2%96%B3" gtm-class="article-body_article" gtm-id="ゆるキャン△">ゆるキャン△</a></td><td>第1期からの参戦。</td></tr><tr><td><a href="/a/%E6%94%BE%E7%BD%AE%E5%B0%91%E5%A5%B3" gtm-class="article-body_article" gtm-id="放置少女">放置少女</a></td><td></td></tr><tr><td><a href="/a/%E3%82%AB%E3%82%A4%E3%82%B8" gtm-class="article-body_article" gtm-id="カイジ">カイジ</a></td><td></td></tr><tr><td><a href="/a/%E3%81%A6%E3%81%A3%E3%81%BA%E3%82%93%E3%81%A3%21%21%21" gtm-class="article-body_article" gtm-id="てっぺんっ!!!">てっぺんっ!!!</a></td><td><b>皮肉にも、後述する同時期に放送されていた作品と共に参戦しているという結果になってしまった。</b></td></tr><tr><td><a href="/a/%E3%83%AA%E3%82%B3%E3%83%AA%E3%82%B9%E3%83%BB%E3%83%AA%E3%82%B3%E3%82%A4%E3%83%AB" gtm-class="article-body_article" gtm-id="リコリス・リコイル">リコリス・リコイル</a></td><td></td></tr><tr><td><a href="/a/Fate%2FGrandCarnival" gtm-class="article-body_article" gtm-id="Fate/GrandCarnival">Fate/GrandCarnival</a></td><td></td></td></tr></table>`;
            const expected = null;
            // Script
            const result = GetTextByHtml(input);
            deepStrictEqual( result, expected );
        });
        it("should not render list", () => {
            const input = `<ul class="items">
            <li>
                <a href="/a/totaldramaisland"
                gtm-class="article-bottom_child-article"
            gtm-id="totaldramaisland"
            >
        <img src="https://s.pximg.net/source/dic/images/ja/no_image_sensitive.svg?20120424" alt="" />
        </a>
            <div class="info">
        <a href="/a/totaldramaisland"
                    gtm-class="article-bottom_child-article"
            gtm-id="totaldramaisland"
                >totaldramaisland</a>
        とーたるどらまあいらんど
        </div>
    </li>
    </ul>`;
            const expected = null;
            // Script
            const result = GetTextByHtml(input);
            deepStrictEqual( result, expected );
        });
    });
    describe("Format", () => {
        it("should render text", () => {
            const input = "<p><b>その魔女は、ガンダムを駆る。</b>";
            const expected = ["その魔女は、ガンダムを駆る。"];
            // Script
            const result = GetTextByHtml(input);
            deepStrictEqual( result, expected );
        });
        it("should render paragraph", () => {
            const input = `<p><a href="/a/%E6%99%82%E5%AE%9A%E9%AB%98%E6%A0%A1" gtm-class="article-body_article" gtm-id="時定高校">時定高校</a>を中心とした不条理な「日常」の中で、登場人物の多くが非常に個性的かつ変わった言動を繰り返し、奇想天外な出来事の続発に翻弄されるシュールな物語。
            <br>
            <a href="/a/%E3%82%BF%E3%82%A4%E3%83%88%E3%83%AB" gtm-class="article-body_article" gtm-id="タイトル">タイトル</a>こそ<b>日常</b>ではあるが、現実的ではあるもののどこか非日常な<a href="/a/%E4%B8%96%E7%95%8C" gtm-class="article-body_article" gtm-id="世界">世界</a>が舞台で、ひとくせもふたくせもある<a href="/a/%E7%99%BB%E5%A0%B4%E4%BA%BA%E7%89%A9" gtm-class="article-body_article" gtm-id="登場人物">登場人物</a>や、<a href="/a/%E3%82%B7%E3%83%A5%E3%83%BC%E3%83%AB" gtm-class="article-body_article" gtm-id="シュール">シュール</a>な<a href="/a/%E3%83%8D%E3%82%BF" gtm-class="article-body_article" gtm-id="ネタ">ネタ</a>が持ち味。
            <br>

            <br>
            いくつもの視点で多くの登場人物のエピソードが描かれる、群像劇の性質がある。
            <br>
            基本的に個々の話は独立したエピソードだが、しばしばエピソード間に何らかの繋がりを見いだせる場合がある。
            <br>
            その繋がりを見ると話順は基本的に時系列順と思われるが、複数のエピソードが同時並行の出来事であったり、過去や未来の話だとわかるエピソードもある。
            <br>

            <br>
            登場人物の名前が群馬県の地名に因んでいたり、「上毛かるた」などのご当地アイテムが登場するなど、群馬出身の作者らしいご当地ネタも多く描かれている。
            <br>

            <br>
            </p>`;
            const expected = [
                "時定高校を中心とした不条理な「日常」の中で、登場人物の多くが非常に個性的かつ変わった言動を繰り返し、奇想天外な出来事の続発に翻弄されるシュールな物語。",
                "タイトルこそ日常ではあるが、現実的ではあるもののどこか非日常な世界が舞台で、ひとくせもふたくせもある登場人物や、シュールなネタが持ち味。",
                "いくつもの視点で多くの登場人物のエピソードが描かれる、群像劇の性質がある。",
                "基本的に個々の話は独立したエピソードだが、しばしばエピソード間に何らかの繋がりを見いだせる場合がある。",
                "その繋がりを見ると話順は基本的に時系列順と思われるが、複数のエピソードが同時並行の出来事であったり、過去や未来の話だとわかるエピソードもある。",
                "登場人物の名前が群馬県の地名に因んでいたり、「上毛かるた」などのご当地アイテムが登場するなど、群馬出身の作者らしいご当地ネタも多く描かれている。",
            ];
            // Script
            const result = GetTextByHtml(input);
            deepStrictEqual( result, expected );
        });
    });
});

