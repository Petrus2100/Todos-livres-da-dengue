document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.slider');
    const nextBtn = document.getElementById('next-button');
    const prevBtn = document.getElementById('prev-button');
    const header = document.getElementById('main-header');
    const searchBox = document.getElementById('search-box');
    const searchBtn = document.getElementById('search-btn');
    const searchTxt = document.getElementById('search-txt');
    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.querySelector('.navbar');
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
            
            if (!searchBox.classList.contains('open')) {
                e.preventDefault(); 
                searchBox.classList.add('open'); 
                searchTxt.focus(); 
            } else {
                if (searchTxt.value.trim() === '') {
                    e.preventDefault(); 
                }
            }
            
            if (navbar.classList.contains('show')) {
                navbar.classList.remove('show');
                menuToggle.classList.remove('open');
            }
        });

        document.addEventListener('click', (e) => {
            if (!searchBox.contains(e.target) && searchBox.classList.contains('open') && e.target !== menuToggle) {
                searchBox.classList.remove('open');
                searchTxt.value = '';
            }
        });
    }

    if (menuToggle && navbar) {
        menuToggle.addEventListener('click', () => {
            navbar.classList.toggle('show');
            menuToggle.classList.toggle('open'); 
            
            if (searchBox.classList.contains('open')) {
                searchBox.classList.remove('open');
            }
        });

        document.addEventListener('click', (e) => {
            
            if (
                navbar.classList.contains('show') && 
                !navbar.contains(e.target) && 
                !menuToggle.contains(e.target)
            ) {
                navbar.classList.remove('show');
                menuToggle.classList.remove('open');
            }
        });
    }

});

 