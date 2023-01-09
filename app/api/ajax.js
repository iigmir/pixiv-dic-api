import https from "https";

/**
 * Actions
 * @param {Buffer} data
 * @param {Promise.resolve} resolve
 * @returns {Function}
 */
const end_action = (data, resolve) => {
    return () => {
        const parse_data = (input) => {
            try {
                return JSON.parse(input);
            } catch (error) {
                return input;
            }
        };
        const buffered_str = Buffer.concat(data).toString();
        resolve(parse_data(buffered_str));
    };
}

/**
 * The main AJAX GET function.
 * @param {String} url
 * @returns {Promise}
 * @see <https://blog.logrocket.com/5-ways-to-make-http-requests-in-node-js>
 */
const main_get = (url = "https://jsonplaceholder.typicode.com/users") => {
    return new Promise((resolve, reject) => {
        https.get( url, response => {
            let data = [];
            response.on("data", chunk => { data.push(chunk); });
            response.on("end", end_action(data, resolve));
        }).on("error", error => {
            reject(error);
        });
    });
};

export default main_get;


