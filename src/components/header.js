export const Header = () => {
    let header = document.querySelector('header');
    let logo = document.createElement('div');
    logo.classList.add('logo');
    logo.innerText = 'Blog';

    header.appendChild(logo);
   
}