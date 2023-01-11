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
        // eslint-disable-next-line no-undef
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
        const resolve_action = response => {
            let data = [];
            const push_chunk = chunk => { data.push(chunk); };
            response.on( "data", push_chunk );
            response.on( "end", end_action(data, resolve) );
        };
        const reject_action = error => { reject(error); };
        const options = { headers: { "User-Agent": "Mozilla/5.0" } };
        https.get( url, options, resolve_action ).on( "error", reject_action );
    });
};

export default main_get;


