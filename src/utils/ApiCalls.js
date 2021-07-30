
const serverURL = "https://niravkpatel28.github.io/json-data-server-v2/blogs/blogs.json";

export const getData = async () => {
    let response = await fetch(serverURL);
    let jsonData = await  response.json();
    return jsonData;
}