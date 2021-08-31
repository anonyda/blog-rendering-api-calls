import { Aside } from "./aside.js";

export const firstBlog = (data) => {
    Blog(data[0]);
}


export const Blog = (blog) => {
    let markup = document.querySelector('main');
    let heading = document.createElement('h1');
    heading.innerText = blog.title;

    let bannerImage  = document.createElement('img');
    bannerImage.src = blog.imageUrl;
    bannerImage.classList.add('banner-image');

    let authorPara = document.createElement('p');
    authorPara.innerText = blog.author;
    authorPara.classList.add('author');

    let blogContent = document.createElement('p');
    blogContent.innerText = blog.content;
    blogContent.classList.add('blog-content');

    markup.appendChild(heading);
    markup.appendChild(bannerImage);
    markup.appendChild(authorPara);
    markup.appendChild(blogContent);

    Aside(blog.links);

}