import TofuBowl from './images/menu/tofu-bowl.jpg';
import Dessert from './images/menu/dessert.jpg';
import Dimsum from './images/menu/dimsum.jpg';
import Hotpot from './images/menu/hotpot.jpg';
import Poke from './images/menu/poke.jpg';
import Streefood from './images/menu/streetfood.jpg';

const menuPage = (() => {
    const create = () => {
        const main = document.createElement('div');
        main.id = 'main-menu';
        main.className = 'main';

        const dimsumDish = _createDish('Dimsum', 'Selections of Dim Sum', Dimsum);
        const pokeDish = _createDish('Poke Bowl', 'A great Poke bowl.', Poke);
        const streetfoodDish = _createDish('Stree Foods', 'Variety of Stree Foods.', Streefood);
        const tofubowlDish = _createDish('Tofu Bowl', 'Tofu Bowl served with rice.', TofuBowl);
        const hotpotDish = _createDish('Hotpot', 'Excellent for gatherings.', Hotpot);
        const dessertDish = _createDish('Dessert', 'Daily dessert creation.', Dessert);

        main.append(dimsumDish, pokeDish, streetfoodDish, tofubowlDish, hotpotDish, dessertDish);

        return main;
    };
    const _createDish = (name, detail, img) => {
        const dish = document.createElement('div');
        dish.className = 'main-menu-dish';
        const nameDiv = document.createElement('h2');
        nameDiv.innerHTML = name;
        const detailDiv = document.createElement('p');
        detailDiv.innerHTML = detail;
        dish.append(nameDiv, detailDiv, _createImg(img));
        return dish;
    };
    const _createImg = (Img) => {
        const img = new Image();
        img.src = Img;
        return img;
    }
    return {create};
})();

export default menuPage;