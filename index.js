import request from "./app/index.js";

export default (entry = "") => {
    return new Promise( (resolve, reject) => {
        const success = data => { resolve( data ); };
        const failed = error => { reject( error ); };
        request( entry ).then( success ).catch( failed );
    } );
};
