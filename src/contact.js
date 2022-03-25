import Toronto from './images/contact/toronto.jpg';

const contactPage = (() => {
    const create = () => {
        const main = document.createElement('div');
        main.id = 'main-contact';
        main.className = 'main';

        const phone = document.createElement('p');
        phone.id = 'main-contact-phone';
        phone.innerHTML = `Phone: 416-XXX-XXXX`;
        const location = document.createElement('p');
        location.id = 'main-contact-location';
        location.innerHTML = `Find us somewhere near CN Tower!`;
        const torontoImg = new Image();
        torontoImg.src = Toronto;

        main.append(phone, location, torontoImg);

        return main;
    };
    return {create};
})();

export default contactPage;