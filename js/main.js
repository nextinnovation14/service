'use strict';
{
    const humburgerMenu = document.getElementById('lines');
    const line2 = document.getElementById('line2');
    const sideMenu = document.getElementById('side-menu');

    humburgerMenu.addEventListener('click', () => {
        line2.classList.toggle('spin');
        sideMenu.classList.toggle('slidein');
    });
    const mainImg = document.getElementById('main-img');

    // フェードイン
    const fadeIn = document.getElementById('main-img');
    fadeIn.animate([{ opacity: '0' }, { opacity: '0.1' }], 1200);

    const mainTitle = document.getElementById('main-title');
    mainTitle.animate([{ opacity: '0' }, { opacity: '0.1' }], 1500);
    // フェードイン

    // IntersectionObserver
    // const target = document.getElementById('what-we-do-title');

    // const options = {
    //     threshold: [0.3, 0.7]
    // };

    // const observer = new IntersectionObserver(scrollEffect, options);
    // observer.observe(target);

    // function scrollEffect() {
    //     const tl = new TimelineMax({ delay: 0.5 });
    //     tl.fromTo(target, 0.5, { y: '100', opacity: 0 }, { y: 0, opacity: 1 })
    // };
    // scrollEffsect();


    // IntersectionObserver

}
