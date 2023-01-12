class PixpediaMetainfo {
    get result() {
        return {};
    }
}

/**
 * Get data info.
 * @param {Document} document
 * @returns
 */
const GetPixpediaMetainfo = (document = Document) => {
    // DOMs
    const main = document.querySelector("#article-relation .actions .data");
    const datalist = main.querySelectorAll("ul li");
    const bookmark = main.querySelector(".checklist-count");
    const update_dom = main.querySelector(".updates dl dd");
    // Functions
    const get_update_date = (updated_at = "0日前") => {
        const sorted_by_day = /日前/g.test( updated_at );
        if( sorted_by_day ) {
            const days = parseInt( updated_at.replace( /\D/g, "" ), 10 );
            const date = new Date();
            date.setDate(date.getDate() - days);
            return date.toJSON();
        }
        return null;
    };
    // Results
    const bookmarked = parseInt(bookmark.textContent, 10);
    const views = parseInt(datalist[0].textContent, 10);
    const comments = parseInt(datalist[1].textContent, 10);
    const creations = parseInt(datalist[2].textContent, 10);
    const updated_at = update_dom.textContent;
    const updated_date = get_update_date(updated_at);
    // Interface
    return { views, bookmarked, comments, creations, updated_at, updated_date, };
};

export { PixpediaMetainfo, GetPixpediaMetainfo };
