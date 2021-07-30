export const Footer = () =>{
    let footer = document.querySelector('footer');
    let copyright = document.createElement('div');
    copyright.classList.add('copyright');
    copyright.innerText = '2021 Blog';

    footer.appendChild(copyright);
}