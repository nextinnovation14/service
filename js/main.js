// const slide = document.querySelector('.slide-imgs');
// const slideImgs = document.querySelectorAll('.slide-imgs img');

// let counter = 1;
// const size = slideImgs[0].clientWidth;

// slide.style.transform = 'translateX(' + (-size * counter) + 'px)';



//会社概要
const conceptBtn = document.querySelector('.concept-btn');
const conceptDetailShow = document.querySelector('.concept-detail-show');
const conceptContent = document.querySelector('.concept-content');
const serviceContainer = document.querySelector('.service-container');
conceptBtn.addEventListener('click', function () {
    conceptDetailShow.style.display = 'block';
    conceptDetailShow.classList.add('appear');
    conceptContent.classList.add('shadow');

});

const xBtn = document.querySelector('.x-btn');
xBtn.addEventListener('click', function () {
    conceptDetailShow.style.display = 'none';
    conceptContent.classList.remove('shadow');
});


//セミナー画像スライド
const slideImgs = document.querySelectorAll('.seminars-img');
const nextBtn = document.querySelector('.arrow-right');
const prevBtn = document.querySelector('.arrow-left');
current = 0

function reset() {
    for (let i = 0; i < slideImgs.length; i++) {
        slideImgs[i].style.display = 'none'
    }
}

//1st page
function startSlide() {
    reset();
    slideImgs[current].style.display = 'block';
}

startSlide();

//next page
nextBtn.addEventListener('click', function () {
    reset();
    if (current === slideImgs.length - 1) {
        current = -1;
    }
    current++;
    slideImgs[current].style.display = 'block';
});

//prev page
prevBtn.addEventListener('click', function () {
    reset();
    if (current === 0) {
        current = slideImgs.length;
    }
    current--;
    slideImgs[current].style.display = 'block';
})



//学生支援画像スライド
const imgSlide = document.querySelectorAll('.contents-img');
const nextButton = document.querySelector('.right-arrow');
const prevButton = document.querySelector('.left-arrow');
current = 0;

function restart() {
    for (let i = 0; i < imgSlide.length; i++) {
        imgSlide[i].style.display = 'none';
    }
}

function initialize() {
    restart();
    imgSlide[0].style.display = 'block';
}
initialize();

nextButton.addEventListener('click', function () {
    restart();
    if (current === imgSlide.length - 1) {
        current = -1;
    }
    current++;
    imgSlide[current].style.display = 'block';
});

prevButton.addEventListener('click', function () {
    restart();
    if (current === 0) {
        current = imgSlide.length;
    };
    current--;
    imgSlide[current].style.display = 'block';
})

//オフラインイベント画像スライド
const imageSlide = document.querySelectorAll('.offline-img');
const nextBow = document.querySelector('.right-bow');
const prevBow = document.querySelector('.left-bow');
current = 0;

function refresh() {
    for (let i = 0; i < imageSlide.length; i++) {
        imageSlide[i].style.display = 'none';
    };
}
function start() {
    refresh();
    imageSlide[0].style.display = 'block';
}
start();

nextBow.addEventListener('click', function () {
    refresh();
    if (current === imageSlide.length - 1) {
        current = -1;
    };
    current++;
    imageSlide[current].style.display = 'block';
});

prevBow.addEventListener('click', function () {
    refresh();
    if (current === 0) {
        current = imageSlide.length;
    };
    current--;
    imageSlide[current].style.display = 'block'
})

const achivementSlide = document.querySelector('.slider');
const seminarsAchivement = document.querySelector('.seminars-achivement');

achivementSlide.addEventListener('click', function () {
    seminarsAchivement.classList.toggle('achivement');
})
