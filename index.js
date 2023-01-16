import request from "./app/index.js";

/**
 * The main function.
 * @param {String} entry The encyclopedia's entry name.
 * @returns {Promise} A Promise response.
 */
export default (entry = "") => new Promise((resolve, reject) => {
    request(entry)
        .then(data => { resolve(data) })
        .catch(error => { reject(error) });
});
