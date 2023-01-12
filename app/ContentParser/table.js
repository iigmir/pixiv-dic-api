import { Tabletojson } from "tabletojson";

export const GetTableData = (input = "<div></div>") => {
    try {
        if( /(^<table)/g.test( input ) ) {
            return Tabletojson.convert( input );
        }
        return null;
    } catch (error) {
        console.error(error);
        return null;
    }
};
