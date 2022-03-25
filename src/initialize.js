import homePage from "./home.js";

const initialize = (() => {
    const _createHeader = () => {
        const header = document.createElement('div');
        header.id = 'header';
        const title = document.createElement('h1');
        title.id = 'title';
        title.innerHTML = `Xu's`
        const navbar = document.createElement('div');
        navbar.id = 'navbar';
        const btnHome = document.createElement('button');
        btnHome.className = 'btn-nav';
        btnHome.classList.add('active');
        btnHome.id = 'btn-home';
        btnHome.innerHTML = 'Home';
        const btnMenu = document.createElement('button');
        btnMenu.className = 'btn-nav';
        btnMenu.id = 'btn-menu';
        btnMenu.innerHTML = 'Menu';
        const btnContact = document.createElement('button');
        btnContact.className = 'btn-nav';
        btnContact.id = 'btn-contact';
        btnContact.innerHTML = 'Contact';
        navbar.append(btnHome, btnMenu, btnContact);
        header.append(title, navbar);
        return header;
    };
    const start = () => {
        const content = document.createElement('div');
        content.id = 'content';

        const header = _createHeader();

        const main = homePage.create();

        const footer = document.createElement('div');
        footer.id = 'footer';
        footer.innerHTML = 'Footer Credit';
        // footer.innerHTML = `<a href="https://www.freepik.com/photos/spices-food">Spices food photo created by valeria_aksakova - www.freepik.com</a>
        // <a href='https://www.freepik.com/vectors/food'>Food vector created by freepik - www.freepik.com</a>
        // <a href='https://www.freepik.com/vectors/food'>Food vector created by freepik - www.freepik.com</a>
        // <a href='https://www.freepik.com/vectors/food'>Food vector created by freepik - www.freepik.com</a>
        // <a href='https://www.freepik.com/vectors/food'>Food vector created by freepik - www.freepik.com</a>
        // <a href='https://www.freepik.com/vectors/food'>Food vector created by freepik - www.freepik.com</a>
        // <a href='https://www.freepik.com/vectors/food'>Food vector created by freepik - www.freepik.com</a>
        // <a href='https://www.freepik.com/vectors/abstract'>Abstract vector created by freepik - www.freepik.com</a>`;
        content.append(header, main, footer);
        document.body.appendChild(content);
    };
    return {start};
})();

export default initialize;