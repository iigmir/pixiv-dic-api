import { GetTableData } from "../app/ContentParser/table.js";
import { deepStrictEqual } from "assert";

const input1 = "<table><tbody><tr><th>μ's</th><th>呼び方</th><th>呼ばれ方</th></tr><tr><th><a href=\"/a/%E9%AB%98%E5%9D%82%E7%A9%82%E4%B9%83%E6%9E%9C\" gtm-class=\"article-body_article\" gtm-id=\"高坂穂乃果\">高坂穂乃果</a></th><td>穂乃果</td><td>海未ちゃん</td></tr><tr><th><a href=\"/a/%E5%8D%97%E3%81%93%E3%81%A8%E3%82%8A\" gtm-class=\"article-body_article\" gtm-id=\"南ことり\">南ことり</a></th><td>ことり</td><td>海未ちゃん</td></tr><tr><th><a href=\"/a/%E6%98%9F%E7%A9%BA%E5%87%9B\" gtm-class=\"article-body_article\" gtm-id=\"星空凛\">星空凛</a></th><td>星空さん（先輩後輩禁止令実施前）⇒凛（実施後）</td><td>園田先輩⇒海未ちゃん</td></tr><tr><th><a href=\"/a/%E5%B0%8F%E6%B3%89%E8%8A%B1%E9%99%BD\" gtm-class=\"article-body_article\" gtm-id=\"小泉花陽\">小泉花陽</a></th><td>小泉さん⇒花陽</td><td>園田先輩⇒海未ちゃん</td></tr><tr><th><a href=\"/a/%E8%A5%BF%E6%9C%A8%E9%87%8E%E7%9C%9F%E5%A7%AB\" gtm-class=\"article-body_article\" gtm-id=\"西木野真姫\">西木野真姫</a></th><td>西木野さん⇒真姫</td><td>園田先輩⇒海未</td></tr><tr><th><a href=\"/a/%E7%9F%A2%E6%BE%A4%E3%81%AB%E3%81%93\" gtm-class=\"article-body_article\" gtm-id=\"矢澤にこ\">矢澤にこ</a></th><td>矢澤先輩⇒にこ</td><td>海未</td></tr><tr><th><a href=\"/a/%E6%9D%B1%E6%A2%9D%E5%B8%8C\" gtm-class=\"article-body_article\" gtm-id=\"東條希\">東條希</a></th><td>東條先輩⇒希</td><td>園田はん⇒海未ちゃん</td></tr><tr><th><a href=\"/a/%E7%B5%A2%E7%80%AC%E7%B5%B5%E9%87%8C\" gtm-class=\"article-body_article\" gtm-id=\"絢瀬絵里\">絢瀬絵里</a></th><td>生徒会長⇒絵里</td><td>園田さん⇒海未</td></tr><tr><td></td><td></td><td></td></tr><tr><th>Aqours</th><th>呼び方</th><th>呼ばれ方</th></tr><tr><th><a href=\"/a/%E9%AB%98%E6%B5%B7%E5%8D%83%E6%AD%8C\" gtm-class=\"article-body_article\" gtm-id=\"高海千歌\">高海千歌</a></th><td>千歌</td><td>海未ちゃん</td></tr><tr><th><a href=\"/a/%E6%B8%A1%E8%BE%BA%E6%9B%9C\" gtm-class=\"article-body_article\" gtm-id=\"渡辺曜\">渡辺曜</a></th><td>曜</td><td>海未ちゃん</td></tr><tr><th><a href=\"/a/%E6%A1%9C%E5%86%85%E6%A2%A8%E5%AD%90\" gtm-class=\"article-body_article\" gtm-id=\"桜内梨子\">桜内梨子</a></th><td>梨子</td><td>海未ちゃん</td></tr><tr><th><a href=\"/a/%E5%9B%BD%E6%9C%A8%E7%94%B0%E8%8A%B1%E4%B8%B8\" gtm-class=\"article-body_article\" gtm-id=\"国木田花丸\">国木田花丸</a></th><td>花丸</td><td>海未さん</td></tr><tr><th><a href=\"/a/%E9%BB%92%E6%BE%A4%E3%83%AB%E3%83%93%E3%82%A3\" gtm-class=\"article-body_article\" gtm-id=\"黒澤ルビィ\">黒澤ルビィ</a></th><td>ルビィ</td><td>海未さん</td></tr><tr><th><a href=\"/a/%E6%B4%A5%E5%B3%B6%E5%96%84%E5%AD%90\" gtm-class=\"article-body_article\" gtm-id=\"津島善子\">津島善子</a></th><td>善子</td><td>海未</td></tr><tr><th><a href=\"/a/%E6%9D%BE%E6%B5%A6%E6%9E%9C%E5%8D%97\" gtm-class=\"article-body_article\" gtm-id=\"松浦果南\">松浦果南</a></th><td>果南</td><td>海未ちゃん</td></tr><tr><th><a href=\"/a/%E9%BB%92%E6%BE%A4%E3%83%80%E3%82%A4%E3%83%A4\" gtm-class=\"article-body_article\" gtm-id=\"黒澤ダイヤ\">黒澤ダイヤ</a></th><td>ダイヤ</td><td>海未さん</td></tr><tr><th><a href=\"/a/%E5%B0%8F%E5%8E%9F%E9%9E%A0%E8%8E%89\" gtm-class=\"article-body_article\" gtm-id=\"小原鞠莉\">小原鞠莉</a></th><td>鞠莉</td><td>海未</td></tr><tr><td></td><td></td><td></td></tr><tr><th>ニジガク</th><th>呼び方</th><th>呼ばれ方</th></tr><tr><th><a href=\"/a/%E4%B8%8A%E5%8E%9F%E6%AD%A9%E5%A4%A2\" gtm-class=\"article-body_article\" gtm-id=\"上原歩夢\">上原歩夢</a></th><td>歩夢</td><td>海未ちゃん</td></tr><tr><th><a href=\"/a/%E5%AE%AE%E4%B8%8B%E6%84%9B\" gtm-class=\"article-body_article\" gtm-id=\"宮下愛\">宮下愛</a></th><td>愛</td><td>海未</td></tr><tr><th><a href=\"/a/%E5%84%AA%E6%9C%A8%E3%81%9B%E3%81%A4%E8%8F%9C\" gtm-class=\"article-body_article\" gtm-id=\"優木せつ菜\">優木せつ菜</a></th><td>せつ菜</td><td>海未さん</td></tr><tr><th><a href=\"/a/%E4%B8%AD%E9%A0%88%E3%81%8B%E3%81%99%E3%81%BF\" gtm-class=\"article-body_article\" gtm-id=\"中須かすみ\">中須かすみ</a></th><td>かすみ</td><td>海未先輩</td></tr><tr><th><a href=\"/a/%E5%A4%A9%E7%8E%8B%E5%AF%BA%E7%92%83%E5%A5%88\" gtm-class=\"article-body_article\" gtm-id=\"天王寺璃奈\">天王寺璃奈</a></th><td>璃奈</td><td>海未さん</td></tr><tr><th><a href=\"/a/%E6%A1%9C%E5%9D%82%E3%81%97%E3%81%9A%E3%81%8F\" gtm-class=\"article-body_article\" gtm-id=\"桜坂しずく\">桜坂しずく</a></th><td>しずく</td><td>海未さん</td></tr><tr><th><a href=\"/a/%E4%B8%89%E8%88%B9%E6%A0%9E%E5%AD%90\" gtm-class=\"article-body_article\" gtm-id=\"三船栞子\">三船栞子</a></th><td>三船さん⇒栞子</td><td>園田さん⇒海未さん</td></tr><tr><th><a href=\"/a/%E8%BF%91%E6%B1%9F%E5%BD%BC%E6%96%B9\" gtm-class=\"article-body_article\" gtm-id=\"近江彼方\">近江彼方</a></th><td>彼方</td><td>海未ちゃん</td></tr><tr><th><a href=\"/a/%E3%82%A8%E3%83%9E%E3%83%BB%E3%83%B4%E3%82%A7%E3%83%AB%E3%83%87\" gtm-class=\"article-body_article\" gtm-id=\"エマ・ヴェルデ\">エマ・ヴェルデ</a></th><td>エマ</td><td>海未ちゃん</td></tr><tr><th><a href=\"/a/%E6%9C%9D%E9%A6%99%E6%9E%9C%E6%9E%97\" gtm-class=\"article-body_article\" gtm-id=\"朝香果林\">朝香果林</a></th><td>果林</td><td>海未ちゃん</td></tr><tr><th><a href=\"/a/%E3%82%B7%E3%83%A7%E3%82%A6%E3%83%BB%E3%83%A9%E3%83%B3%E3%82%B8%E3%83%A5\" gtm-class=\"article-body_article\" gtm-id=\"ショウ・ランジュ\">ショウ・ランジュ</a></th><td>ランジュ</td><td>海未</td></tr><tr><th><a href=\"/a/%E3%83%9F%E3%82%A2%E3%83%BB%E3%83%86%E3%82%A4%E3%83%A9%E3%83%BC\" gtm-class=\"article-body_article\" gtm-id=\"ミア・テイラー\">ミア・テイラー</a></th><td>ミア</td><td>海未</td></tr><tr><th><a href=\"/a/%E3%81%82%E3%81%AA%E3%81%9F%E3%81%A1%E3%82%83%E3%82%93\" gtm-class=\"article-body_article\" gtm-id=\"あなたちゃん\">あなたちゃん</a></th><td>あなた</td><td>海未ちゃん</td></tr></tbody></table>";
const input2 = "<table><tbody><tr><th>名前</th><td>園田海未</td></tr><tr><th>英字表記</th><td>UMI SONODA</td></tr><tr><th>読み方</th><td>うみ　そのだ</td></tr><tr><th>学年</th><td>2年</td></tr><tr><th>年齢</th><td>16歳</td></tr><tr><th>身長</th><td>159cm（シリーズ15位タイ）</td></tr><tr><th>血液型</th><td>A型</td></tr><tr><th>誕生日</th><td><a href=\"/a/3%E6%9C%8815%E6%97%A5\" gtm-class=\"article-body_article\" gtm-id=\"3月15日\">3月15日</a></td></tr><tr><th>星座</th><td><a href=\"/a/%E9%AD%9A%E5%BA%A7\" gtm-class=\"article-body_article\" gtm-id=\"魚座\">魚座</a></td></tr><tr><th>3size</th><td>B76/W58/H80</td></tr><tr><th>好きな食べ物</th><td>穂乃果の家のまんじゅう</td></tr><tr><th>嫌いな食べ物</th><td><a href=\"/a/%E7%82%AD%E9%85%B8%E9%A3%B2%E6%96%99\" gtm-class=\"article-body_article\" gtm-id=\"炭酸飲料\">炭酸飲料</a></td></tr><tr><th>イメージカラー</th><td><a href=\"/a/%E9%9D%92\" gtm-class=\"article-body_article\" gtm-id=\"青\">青</a> (<a href=\"/a/%E8%97%8D%E8%89%B2\" gtm-class=\"article-body_article\" gtm-id=\"藍色\">藍色</a>)</td></tr><tr><th>所属ユニット</th><td><a href=\"/a/lily_white\" gtm-class=\"article-body_article\" gtm-id=\"lily_white\">lily white</a></td></tr><tr><th>一人称</th><td>わたし</td></tr><tr><th>CV.</th><td><a href=\"/a/%E4%B8%89%E6%A3%AE%E3%81%99%E3%81%9A%E3%81%93\" gtm-class=\"article-body_article\" gtm-id=\"三森すずこ\">三森すずこ</a></td></tr></tbody></table>";

const expected1 = [["μ's","呼び方","呼ばれ方"],["高坂穂乃果","穂乃果","海未ちゃん"],["南ことり","ことり","海未ちゃん"],["星空凛","星空さん（先輩後輩禁止令実施前）⇒凛（実施後）","園田先輩⇒海未ちゃん"],["小泉花陽","小泉さん⇒花陽","園田先輩⇒海未ちゃん"],["西木野真姫","西木野さん⇒真姫","園田先輩⇒海未"],["矢澤にこ","矢澤先輩⇒にこ","海未"],["東條希","東條先輩⇒希","園田はん⇒海未ちゃん"],["絢瀬絵里","生徒会長⇒絵里","園田さん⇒海未"],["","",""],["Aqours","呼び方","呼ばれ方"],["高海千歌","千歌","海未ちゃん"],["渡辺曜","曜","海未ちゃん"],["桜内梨子","梨子","海未ちゃん"],["国木田花丸","花丸","海未さん"],["黒澤ルビィ","ルビィ","海未さん"],["津島善子","善子","海未"],["松浦果南","果南","海未ちゃん"],["黒澤ダイヤ","ダイヤ","海未さん"],["小原鞠莉","鞠莉","海未"],["","",""],["ニジガク","呼び方","呼ばれ方"],["上原歩夢","歩夢","海未ちゃん"],["宮下愛","愛","海未"],["優木せつ菜","せつ菜","海未さん"],["中須かすみ","かすみ","海未先輩"],["天王寺璃奈","璃奈","海未さん"],["桜坂しずく","しずく","海未さん"],["三船栞子","三船さん⇒栞子","園田さん⇒海未さん"],["近江彼方","彼方","海未ちゃん"],["エマ・ヴェルデ","エマ","海未ちゃん"],["朝香果林","果林","海未ちゃん"],["ショウ・ランジュ","ランジュ","海未"],["ミア・テイラー","ミア","海未"],["あなたちゃん","あなた","海未ちゃん"]];

const expected2 = [
    [ "名前", "園田海未" ],
    [ "英字表記", "UMI SONODA" ],
    [ "読み方", "うみ　そのだ" ],
    [ "学年", "2年" ],
    [ "年齢", "16歳" ],
    [ "身長", "159cm（シリーズ15位タイ）" ],
    [ "血液型", "A型" ],
    [ "誕生日", "3月15日" ],
    [ "星座", "魚座" ],
    [ "3size", "B76/W58/H80" ],
    [ "好きな食べ物", "穂乃果の家のまんじゅう" ],
    [ "嫌いな食べ物", "炭酸飲料" ],
    [ "イメージカラー", "青 (藍色)" ],
    [ "所属ユニット", "lily white" ],
    [ "一人称", "わたし" ],
    [ "CV.", "三森すずこ" ]
];

describe( "Table module", () => {
    it( "should render table as expected", () => {
        const result1 = GetTableData(input1);
        const result2 = GetTableData(input2);
        deepStrictEqual( result1, expected1 );
        deepStrictEqual( result2, expected2 );
    });
    //
});
