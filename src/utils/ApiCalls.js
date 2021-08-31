
const serverURL = "https://niravkpatel28.github.io/json-data-server-v2/blogs/blogs.json";

export let jsonData;

export const getData = async () => {
    let response = await fetch(serverURL);
    jsonData = await response.json();
    return jsonData;
}