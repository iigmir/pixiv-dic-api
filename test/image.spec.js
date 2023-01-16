import { strictEqual, deepStrictEqual } from "assert";
import { GetImageByEmbedimage, GetInageById } from "../app/Encyclopedia/imagescripts.js";

describe("Image module", () => {
    describe("input by Embedimage", async () => {
        const embedimage = "<div class=\"embedimage\"><a href=\"https://www.pixiv.net/artworks/49284361\" title=\"海未誕\" data-image-url=\"https://i.pximg.net/c/600x600/img-master/img/2015/03/15/04/37/46/49284361_p0_master1200.jpg\" data-author-name=\"しらび\" data-author-url=\"http://www.pixiv.net/member.php?id=216403\" data-caption=\"海未ちゃん誕生日おめでとう\" target=\"_blank\" class=\"illust\" gtm-class=\"article-body_illust\" gtm-id=\"49284361\"><img src=\"https://i.pximg.net/c/260x260/img-master/img/2015/03/15/04/37/46/49284361_p0_square1200.jpg\" alt=\"海未誕\"></a></div>";
        const expected = {
            "id": "49284361",
            "title": "海未誕",
            "description": "海未ちゃん誕生日おめでとう",
            "author": {
                "id": "216403",
                "name": "しらび"
            },
            "createDate":"2015-03-14T19:37:00+00:00",
            "uploadDate":"2015-03-14T19:37:00+00:00",
            "image_link": {
                "urls": {
                    "thumb_mini": "https://i.pximg.net/c/128x128/img-master/img/2015/03/15/04/37/46/49284361_p0_square1200.jpg",
                    "small": "https://i.pximg.net/c/540x540_70/img-master/img/2015/03/15/04/37/46/49284361_p0_master1200.jpg",
                    "regular": "https://i.pximg.net/img-master/img/2015/03/15/04/37/46/49284361_p0_master1200.jpg",
                    "original": "https://i.pximg.net/img-original/img/2015/03/15/04/37/46/49284361_p0.jpg"
                },
                "width": 957,
                "height": 1353
            }
        };
        const response = await GetImageByEmbedimage(embedimage);
        it("should return ID", () => {
            strictEqual( response.id, expected.id );
        });
        it("should return author", () => {
            deepStrictEqual( response.author, expected.author );
        });
        it("should return metadata", () => {
            deepStrictEqual( response.title, expected.title );
            deepStrictEqual( response.description, expected.description );
        });
    });
    describe("input by ID", () => {
        const pure_id = "73684021";
        const expected = {
            "id": "73684021",
            "title": "穂むらの常連",
            "description": "穂むらまんじゅう20コ入り１つください☺️",
            "author": {
                "id": "12163732",
                "name": "イサミ丼"
            },
            "createDate":"2019-03-14T15:11:00+00:00",
            "uploadDate":"2019-03-14T15:11:00+00:00",
            "image_link": {
                "urls": {
                    "thumb_mini": "https://i.pximg.net/c/128x128/img-master/img/2019/03/15/00/11/04/73684021_p0_square1200.jpg",
                    "small": "https://i.pximg.net/c/540x540_70/img-master/img/2019/03/15/00/11/04/73684021_p0_master1200.jpg",
                    "regular": "https://i.pximg.net/img-master/img/2019/03/15/00/11/04/73684021_p0_master1200.jpg",
                    "original": "https://i.pximg.net/img-original/img/2019/03/15/00/11/04/73684021_p0.jpg"
                },
                "width":2894,
                "height":4093
            }
        };
        it("should return an interface", async () => {
            const response = await GetInageById(pure_id);
            const result = response.id;
            strictEqual( result, expected.id );
        });
    });
})
