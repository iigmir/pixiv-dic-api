import { Tabletojson } from "tabletojson";

export const GetTableData = (input = "<div></div>") => {
    try {
        if( /(^<table)/g.test( input ) ) {
            const options = {
                useFirstRowForHeadings: false,
            }
            return Tabletojson.convert( input, options );
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
};
