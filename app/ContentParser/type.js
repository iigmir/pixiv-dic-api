export const GetItemType = (input = "") => {
    if( input === "<p>\n<br>\n</p>" ) {
        return "gap";
    }
    if( input === "<div style=\"clear:both;\"></div>" ) {
        return "gap";
    }
    if( /(article_index)/g.test( input ) ) {
        return "page-contents";
    }
    if( /(^<h1)|(^<h2)|(^<h3)|(^<h4)|(^<h5)|(^<h6)/g.test( input ) ) {
        return "title";
    }
    if( /(^<p)/g.test( input ) ) {
        return "texts";
    }
    if( /(^<table)/g.test( input ) ) {
        return "table";
    }
    if( /(embedimage)/g.test( input ) ) {
        return "image";
    }
    if( /(_flux_ad)/g.test( input ) ) {
        return "advertisement";
    }
};
