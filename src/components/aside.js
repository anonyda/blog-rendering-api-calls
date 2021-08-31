import { Blog } from "./blog.js";
import { jsonData } from "../utils/ApiCalls.js";

export const Aside = (links) =>{
    let aside = document.querySelector('aside');
    aside.classList.add('related-links')
    let heading = document.createElement('h2');
    heading.innerText = 'Related Links';
    aside.appendChild(heading);

    links.forEach((link) => {
        let rLink = document.createElement('p');
        rLink.innerText = link.title;
        rLink.id = link.id;
        rLink.onclick = () => {
            renderNewBlog(event)
        }
        aside.appendChild(rLink);

    })

}

const renderNewBlog = (event) =>{
    // console.log(data);
    document.querySelector('main').innerHTML = "";
    document.querySelector('aside').innerHTML = "";
    let newBlog = jsonData.find((blog) => {
        return blog.id === event.target.id;
    })
    Blog(newBlog);
}