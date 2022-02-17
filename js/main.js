const slide = document.querySelector('.slide-imgs');
const slideImgs = document.querySelectorAll('.slide-imgs img');

let counter = 1;
const size = slideImgs[0].clientWidth;

slide.style.transform = 'translateX(' + (-size * counter) + 'px)';




const conceptBtn = document.querySelector('.concept-btn');
const conceptDetailShow = document.querySelector('.concept-detail-show');
const conceptContent = document.querySelector('.concept-content');
const serviceContainer = document.querySelector('.service-container');
conceptBtn.addEventListener('click', function () {
    conceptDetailShow.classList.toggle('appear');
    conceptContent.classList.toggle('shadow');
    serviceContainer.classList.toggle('shadow');
})
