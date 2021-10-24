'use strict';
{
    const humburgerMenu = document.getElementById('lines');
    const line2 = document.getElementById('line2');
    const sideMenu = document.getElementById('side-menu');

    // humburgerMenu.addEventListener('click', () => {
    //     line2.classList.toggle('spin');
    //     sideMenu.classList.toggle('slidein');
    // });

    // フェードイン
    const fadeIn = document.getElementById('main-img');
    fadeIn.animate([{ opacity: '0' }, { opacity: '0.1' }], 1200);

    const mainTitle = document.getElementById('main-title');
    mainTitle.animate([{ opacity: '0' }, { opacity: '0.1' }], 1500);
    // フェードイン

    //ジャンプ
    const homeBtn = document.getElementById('home-btn');
    homeBtn.addEventListener('click', () => {
        scrollTo(0, 0);
    });

    //矢印
    const arrow = document.getElementById('arrow');
    arrow.addEventListener('click', () => {
        scrollTo(0, 0);
    });

    //コンタクト
    const contact = document.getElementById('contact');
    contact.addEventListener('click', () => {
        scrollTo(0, 10000);
    })

}
