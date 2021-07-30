import { getData } from "./utils/ApiCalls.js";
import { firstBlog } from "./components/blog.js";
import { Header } from "./components/header.js";
import { Footer } from "./components/footer.js";

const renderWebpage = async () => {
    let data = await getData();
    firstBlog(data);
    console.log(data);
}

Header();
renderWebpage();
Footer();


