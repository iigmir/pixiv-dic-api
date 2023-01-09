import request from "./ajax.js";

export const ExampleRequest = () => {
    return request("https://jsonplaceholder.typicode.com/users");
};
