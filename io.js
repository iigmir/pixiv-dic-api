import request from "./app/index.js";
import fs from "fs";

const main = (entry) => {
    request(entry).then( (d) => {
        // console.log(d);
        fs.writeFile(`./dist/${entry}.json`, JSON.stringify(d), up => { if(up) throw up; });
    });
};

// eslint-disable-next-line no-undef
main(process.argv[2]);
