import { Blog } from "./blog.js";

export const Aside = (data, links) =>{
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
            renderNewBlog(event, data)
        }
        aside.appendChild(rLink);

    })

}

const renderNewBlog = (event, data) =>{
    document.querySelector('main').innerHTML = "";
    document.querySelector('aside').innerHTML = "";
    let newBlog = data.filter((blog) => {
        return blog.id === event.target.id;
    })
    Blog(data, newBlog[0]);
}