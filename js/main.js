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
    conceptDetailShow.style.display = 'block';
    conceptDetailShow.classList.add('appear');
    conceptContent.classList.add('shadow');

})

const xBtn = document.querySelector('.x-btn');
xBtn.addEventListener('click', function () {
    conceptDetailShow.style.display = 'none';
    conceptContent.classList.remove('shadow');
})
