import './style.css';
import initialize from './initialize.js';
import homePage from './home.js';
import menuPage from './menu.js';
import contactPage from './contact.js';

initialize.start();

const navBar = (() => {
    const start = () => {
        const btns = document.querySelectorAll('.btn-nav');
        const btnHome = document.getElementById('btn-home');
        const btnMenu = document.getElementById('btn-menu');
        const btnContact = document.getElementById('btn-contact');

        btnHome.addEventListener('click', () => {
            btns.forEach((btn) => {btn.classList.remove('active')});
            btnHome.classList.add('active');
            const content = document.querySelector('#content');
            const main = document.querySelector('.main');
            content.removeChild(main);
            content.appendChild(homePage.create());
        });

        btnMenu.addEventListener('click', () => {
            btns.forEach((btn) => {btn.classList.remove('active')});
            btnMenu.classList.add('active');
            const content = document.querySelector('#content');
            const main = document.querySelector('.main');
            content.removeChild(main);
            content.appendChild(menuPage.create());
        });

        btnContact.addEventListener('click', () => {
            btns.forEach((btn) => {btn.classList.remove('active')});
            btnContact.classList.add('active');
            const content = document.querySelector('#content');
            const main = document.querySelector('.main');
            content.removeChild(main);
            content.appendChild(contactPage.create());
        });
    };
    return {start};
})();

navBar.start();

