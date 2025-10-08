document.addEventListener('DOMContentLoaded', function () {
const slides = document.querySelectorAll('.slider');
const nextBtn = document.getElementById('next-button');
const prevBtn = document.getElementById('prev-button');
const header = document.getElementById('main-header');
const searchBox = document.getElementById('search-box');
const searchBtn = document.getElementById('search-btn');
const searchTxt = document.getElementById('search-txt');
const scrollTrigger = 50;
let currentSlide = 0;

if (slides.length > 0 && nextBtn && prevBtn) {

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('on');
            if (i === index) {
                slide.classList.add('on');
            }
        });
    }

    nextBtn.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    prevBtn.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);
}

if (header) {

    function checkScroll() {
        if (window.scrollY > scrollTrigger) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }
    }

    checkScroll();

    window.addEventListener('scroll', checkScroll);
}

    if (searchBtn && searchBox && searchTxt) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();

            searchBox.classList.toggle('open');

            if (searchBox.classList.contains('open')) {
                searchTxt.focus();
            } else {
                searchTxt.value = '';
            }
        });
    }
});