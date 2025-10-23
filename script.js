document.addEventListener('DOMContentLoaded', function () {
    // 1. DECLARAÇÃO DE VARIÁVEIS DE COMPONENTES
    const slides = document.querySelectorAll('.slider');
    const nextBtn = document.getElementById('next-button');
    const prevBtn = document.getElementById('prev-button');
    const header = document.getElementById('main-header');
    
    // Variáveis da pesquisa:
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
    const mapeamentoBusca = {
        // --- TRANSFERÊNCIA EXTERNA (Para outras páginas) ---
        "sintomas": "sintomas.html", 
        "sintomas graves": "sintomas.html#grave-content",
        "combate": "combate.html",
        "acoes": "acoes.html",
        "tratamento": "tratamento.html",
        "sobre nós": "Equipe-fontes/index-sobre.html",
        "nós": "Equipe-fontes/index-sobre.html",

        //Página aedes
        "video aedes": "aedes.html#video-aedes-content", 
        "video aegypti": "aedes.html#video-aedes-content",
        "aedes": "aedes.html",
        
        // Exemplo de doenças mapeadas para páginas específicas (Ajuste o caminho se necessário!)
        "zika": "arquivos aedes aegypti/zika-virus.html",
        "chikungunya": "arquivos aedes aegypti/chikungunya.html",
        "amarela": "arquivos aedes aegypti/febre-amarela.html",

        // --- ROLAGEM INTERNA (Para seções da página atual, USANDO #) ---
        "aedes": "#introducao-content",
        "dengue": "#introducao-content",
        "info": "#introducao-content",
        "carrossel": "#pagina",
        "campanha": "#pagina",
        "febre": "#cards-content",
        "conheca": "#cards-content",
        "conheça": "#cards-content",
        "video": "#video-content",
        "video dengue": "video-content",
        "assista": "#video-content",
        "saiba mais": "footer-content",

        //Tranferencia 

      "video dengue": "index.html#video-content",
      "conheça mais": "index.html#cards-content" 
    };

    function rolarParaSecao() {
        if (!searchTxt) return;
        
        const termoPesquisa = searchTxt.value.trim().toLowerCase();
        
        // Encontra o URL/ID alvo baseado no mapeamento
        const destino = mapeamentoBusca[termoPesquisa];

        if (destino) {
            if (destino.startsWith('#')) {
                // 1. ROLAGEM INTERNA: Se começar com '#', é uma âncora na página atual
                const elementoAlvo = document.querySelector(destino); 
                
                if (elementoAlvo) {
                    elementoAlvo.scrollIntoView({
                        behavior: 'smooth', 
                        block: 'start'      
                    });
                }
            } else {
                // 2. TRANSFERÊNCIA EXTERNA: Caso contrário, é um link de arquivo
                window.location.href = destino; 
            }

            // Limpa o campo após a ação
            searchTxt.value = ''; 
        }
    }


    // --------------------------------------------------------------------------------
    // LÓGICA DE EVENTOS (Carrossel, Header, Pesquisa, Menu)
    // --------------------------------------------------------------------------------

    // Carrossel
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

    // Pesquisa e Fechamento
    if (searchBtn && searchBox && searchTxt) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault(); 
            if (!searchBox.classList.contains('open')) {
                searchBox.classList.add('open'); 
                searchTxt.focus(); 
            } else {
                // Executa a função de rolagem/transferência
                rolarParaSecao();
            }
            if (navbar.classList.contains('show')) {
                navbar.classList.remove('show');
                menuToggle.classList.remove('open');
            }
        });
        
        // Adiciona a rolagem/transferência ao pressionar Enter
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

    // Menu Toggle
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