import request from "./app/index.js";
import fs from "fs";

const main = (entry) => {
    return new Promise( (resolve, reject) => {
        request(entry).then( (d) => {
            const action = (data) => error => {
                if (error) {
                    reject(error);
                }
                resolve(data);
            };
            fs.writeFile(`./dist/${entry}.json`, JSON.stringify(d), action(d) );
        }).catch( error => reject(error) );
    });
};

// eslint-disable-next-line no-undef
main(process.argv[2]);
