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

    // --------------------------------------------------------------------------------
    // LÓGICA DE PESQUISA E ROLAGEM/TRANSFERÊNCIA (UNIFICADA)
    // --------------------------------------------------------------------------------

    // Mapeamento de palavras-chave para destinos (IDs internos ou URLs externos)
    // Mapeamento de palavras-chave para destinos (IDs internos ou URLs externos)
    const mapeamentoBusca = {

        // =========================================================
        // 1. TRANSFERÊNCIA EXTERNA (URLs Simples e com Âncoras)
        // =========================================================

        // Sintomas (sintomas.html)
        "sintomas": "sintomas.html",
        "sintomas graves": "sintomas.html#grave-content",
        "grave": "sintomas.html#grave-content",
        "hemorragica": "sintomas.html#grave-content",

        // Ações e Combate (combate.html / acoes.html)
        "combate": "combate.html",
        "acoes": "acoes.html",
        "notificar": "combate.html",
        "prevencao": "acoes.html",

        // Tratamento (tratamento.html)
        "tratamento": "tratamento.html",
        "cura": "tratamento.html",
        "medicacao": "tratamento.html",

        // Equipe e Fontes
        "sobre nós": "Equipe-fonte/index-sobre.html",
        "nós": "Equipe-fonte/index-sobre.html",
        "equipe": "Equipe-fonte/index-sobre.html",
        "quem somos": "Equipe-fonte/index-sobre.html",

        // =========================================================
        // 2. DOENÇAS DOS CARDS (arquivos aedes aegypti/...)
        // Mapeamento consolidado: Não há repetição de chaves!
        // =========================================================

        // ZIKA VÍRUS
        "zika": "arquivos aedes aegypti/zika-virus.html",
        "microcefalia": "arquivos aedes aegypti/zika-virus.html",
        "guillain": "arquivos aedes aegypti/zika-virus.html",
        "gestacao": "arquivos aedes aegypti/zika-virus.html",
        "gravidez": "arquivos aedes aegypti/zika-virus.html",

        // CHIKUNGUNYA
        "chikungunya": "arquivos aedes aegypti/chikungunya.html",
        "chik": "arquivos aedes aegypti/chikungunya.html",
        "artrite": "arquivos aedes aegypti/chikungunya.html",
        "articular": "arquivos aedes aegypti/chikungunya.html",
        "cronica": "arquivos aedes aegypti/chikungunya.html",

        // FEBRE AMARELA
        "febre amarela": "arquivos aedes aegypti/febre-amarela.html",
        "amarela": "arquivos aedes aegypti/febre-amarela.html",
        "febre": "arquivos aedes aegypti/febre-amarela.html",
        "vacina": "arquivos aedes aegypti/febre-amarela.html",
        "visceral": "arquivos aedes aegypti/febre-amarela.html",
        "silvestre": "arquivos aedes aegypti/febre-amarela.html",

        // Página Aedes (aedes.html)
        "video aedes": "aedes.html#video-aedes-content",
        "video aegypti": "aedes.html#video-aedes-content",
        "aedes": "aedes.html#aedes-content",
        "aedes aegypti": "aedes.html#aedes-content",
        "mosquito": "aedes.html#aedes-content",
        "vetor": "aedes.html#aedes-content",

        // Combate (combate.html)
        "datasus": "combate.html#data-content",
        "data sus": "combate.html#data-content",
        "fumace": "combate.html#fumace-content",
        "fumacê": "combate.html#fumace-content",
        "calendario": "combate.html#calendario-content",
        "calendarios": "combate.html#calendario-content",
        "caminhao": "combate.html#fumace-content",
        "cronograma": "combate.html#calendario-content",


        // =========================================================
        // 3. ROLAGEM INTERNA (Para seções da página atual - index.html)
        // =========================================================

        "dengue": "#introducao-content",
        "info": "#introducao-content",
        "informacao": "#introducao-content",
        "principal": "#introducao-content",

        "carrossel": "#pagina",
        "campanha": "#pagina",
        "slides": "#pagina",

        "cards": "#cards-content",
        "conheça mais": "#cards-content",
        "conheca": "#cards-content",
        "conheça": "#cards-content",
        "doencas": "#cards-content",
        "outras": "#cards-content",

        "video": "#video-content",
        "video dengue": "#video-content",
        "assista": "#video-content",
        "youtube": "#video-content",

        "saiba mais": "#footer-content",
        "rodape": "#footer-content"
    };

    function rolarParaSecao() {
        if (!searchTxt) return;

        const termoPesquisa = searchTxt.value.trim().toLowerCase();

        const destino = mapeamentoBusca[termoPesquisa];

        if (destino) {
            if (destino.startsWith('#')) {

                const elementoAlvo = document.querySelector(destino);

                if (elementoAlvo) {
                    elementoAlvo.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            } else {
                window.location.href = destino;
            }


            searchTxt.value = '';
        }
    }


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

    // Header
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
            if (!searchBox.classList.contains('open')) {
                searchBox.classList.add('open');
                searchTxt.focus();
            } else {
                rolarParaSecao();
            }
            if (navbar.classList.contains('show')) {
                navbar.classList.remove('show');
                menuToggle.classList.remove('open');
            }
        });

        searchTxt.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                e.preventDefault();
                rolarParaSecao();
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
                searchTxt.value = '';
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