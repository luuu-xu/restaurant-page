const homePage = (() => {
    const create = () => {
        const main = document.createElement('div');
        main.id = 'main-home';
        main.className = 'main';
        const mainheader = document.createElement('h2');
        mainheader.id = 'main-home-header';
        mainheader.innerHTML = 'SAY NO TO BORING FOODS';
        const maintext = document.createElement('p');
        maintext.id = 'main-home-text';
        maintext.innerHTML = `The fabric of Xu\'s is born out of love and repect for these humble homemade creations,
         met with a desire to bring quality ingredients to the table. Simply put, we\'re here to bring you an experience you can feel great about.`;
        main.append(mainheader, maintext);
        return main;
    };
    return {create};
})();

export default homePage;
