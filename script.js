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

    const mapeamentoBusca = {

        // Sintomas (sintomas.html)
        "sintomas": "../sintomas.html",
        "sinais": "../sintomas.html",
        "dor": "../sintomas.html",
        "mal estar": "../sintomas.html",
        "dor de cabeca": "../sintomas.html",
        "cefaleia": "../sintomas.html",
        "dor no corpo": "../sintomas.html",
        "mialgia": "../sintomas.html",
        "dor nas juntas": "../sintomas.html",
        "artralgia": "../sintomas.html",
        "dor atras dos olhos": "../sintomas.html",
        "manchas vermelhas": "../sintomas.html",
        "exantema": "../sintomas.html",
        "febre alta": "../sintomas.html",
        "procurar medico": "../sintomas.html",
        
        // Sintomas Graves (sintomas.html#grave-content)
        "sintomas graves": "../sintomas.html#grave-content",
        "grave": "../sintomas.html#grave-content",
        "hemorragia": "../sintomas.html#grave-content",
        "hemorragica": "../sintomas.html#grave-content",
        "sangramento": "../sintomas.html#grave-content",
        "alerta": "../sintomas.html#grave-content",
        "plaquetas": "../sintomas.html#grave-content",
        "choque": "../sintomas.html#grave-content",
        "dengue grave": "../sintomas.html#grave-content",
        "queda de pressao": "../sintomas.html#grave-content",
        "vomito persistente": "../sintomas.html#grave-content",

        // Tratamento (tratamento.html)
        "tratamento": "../tratamento.html",
        "cura": "../tratamento.html",
        "medicacao": "../tratamento.html",
        "remedio": "../tratamento.html",
        "dipirona": "../tratamento.html",
        "paracetamol": "../tratamento.html",
        "automedicacao": "../tratamento.html",
        "hidratacao": "../tratamento.html",
        "soro": "../tratamento.html",
        "repouso": "../tratamento.html",
        "internacao": "../tratamento.html",
        "analgesicos": "../tratamento.html",
        "anti-inflamatorios": "../tratamento.html",
        "hospitalizacao": "../tratamento.html",

        // Ações e Combate (combate.html / acoes.html)
        "combate": "../combate.html",
        "acoes": "../acoes.html",
        "notificar": "../combate.html",
        "prevencao": "../acoes.html",
        "agente de saude": "../acoes.html",
        "visita": "../acoes.html",
        "larvicida": "../combate.html",
        "nebulizacao": "../combate.html#fumace-content",
        "eliminacao": "../acoes.html",
        "caixa d agua": "../acoes.html",
        "pneus": "../acoes.html",
        "vasos de planta": "../acoes.html",
        "servico publico": "../combate.html",
        "combater": "../acoes.html",
        "mutirao": "../acoes.html",
        "limpeza": "../acoes.html",
        "descarte": "../acoes.html",
        "protecao": "../acoes.html",
        "inspecao": "../acoes.html",
        "denuncia": "../combate.html",
        "vigilancia": "../combate.html",
        
        // Equipe e Fontes (Pasta Equipe-fonte)
        "sobre nós": "../Equipe-fonte/index-sobre.html",
        "nós": "../Equipe-fonte/index-sobre.html",
        "equipe": "../Equipe-fonte/index-sobre.html",
        "quem somos": "../Equipe-fonte/index-sobre.html",
        "fontes": "../Equipe-fonte/index-sobre.html#fontes-content",
        "referencias": "../Equipe-fonte/index-sobre.html#fontes-content",
        "autores": "../Equipe-fonte/index-sobre.html",
        "creditos": "../Equipe-fonte/index-sobre.html",

        "combate": "../combate.html",
        "acoes": "../acoes.html",
        "notificar": "../combate.html",
        "prevencao": "../acoes.html",
        "agente de saude": "../acoes.html",
        "visita": "../acoes.html",
        "larvicida": "../combate.html",
        "nebulizacao": "../combate.html#fumace-content",
        "eliminacao": "../acoes.html",
        "caixa d agua": "../acoes.html",
        "pneus": "../acoes.html",
        "vasos de planta": "../acoes.html",
        "servico publico": "../combate.html",
        "combater": "../acoes.html",
        "mutirao": "../acoes.html",
        "limpeza": "../acoes.html",
        "descarte": "../acoes.html",
        "protecao": "../acoes.html",
        "inspecao": "../acoes.html",
        "denuncia": "../combate.html",
        "vigilancia": "../combate.html",

        // Página Aedes (aedes.html)
        "video aedes": "../aedes.html#video-aedes-content",
        "video aegypti": "../aedes.html#video-aedes-content",
        "aedes": "../aedes.html#aedes-content",
        "aedes aegypti": "../aedes.html#aedes-content",
        "mosquito": "../aedes.html#aedes-content",
        "vetor": "../aedes.html#aedes-content",
        "biologia": "../aedes.html#aedes-content",
        "ciclo de vida": "../aedes.html#aedes-content",
        "transmissao": "../aedes.html#aedes-content",
        "ovos": "../aedes.html#aedes-content",
        "larvas": "../aedes.html#aedes-content",
        "pernilongo": "../aedes.html#aedes-content",
        "femea": "../aedes.html#aedes-content",
        "habitat": "../aedes.html#aedes-content",
        "picada": "../aedes.html#aedes-content",

        // Combate com Âncora (combate.html)
        "datasus": "../combate.html#data-content",
        "data sus": "../combate.html#data-content",
        "fumace": "../combate.html#fumace-content",
        "fumacê": "../combate.html#fumace-content",
        "calendario": "../combate.html#calendario-content",
        "calendarios": "../combate.html#calendario-content",
        "caminhao": "../combate.html#fumace-content",
        "cronograma": "../combate.html#calendario-content",
        "ciflu": "../combate.html#fumace-content",
        "inseticida": "../combate.html#fumace-content",
        "estatisticas": "../combate.html#data-content",
        "dados": "../combate.html#data-content",

        // ZIKA VÍRUS
        "zika": "arquivos aedes aegypti/zika-virus.html",
        "microcefalia": "arquivos aedes aegypti/zika-virus.html",
        "guillain": "arquivos aedes aegypti/zika-virus.html",
        "gestacao": "arquivos aedes aegypti/zika-virus.html",
        "gravidez": "arquivos aedes aegypti/zika-virus.html",
        "zika virus": "arquivos aedes aegypti/zika-virus.html",
        "zika congenita": "arquivos aedes aegypti/zika-virus.html",
        "danos cerebrais": "arquivos aedes aegypti/zika-virus.html",
        "sindrome de guillain barre": "arquivos aedes aegypti/zika-virus.html",
        "complicacoes zika": "arquivos aedes aegypti/zika-virus.html",
        "congenita": "arquivos aedes aegypti/zika-virus.html",

        // CHIKUNGUNYA
        "chikungunya": "arquivos aedes aegypti/chikungunya.html",
        "chik": "arquivos aedes aegypti/chikungunya.html",
        "artrite": "arquivos aedes aegypti/chikungunya.html",
        "articular": "arquivos aedes aegypti/chikungunya.html",
        "cronica": "arquivos aedes aegypti/chikungunya.html",
        "doenca cronica": "arquivos aedes aegypti/chikungunya.html",
        "dor nas juntas": "arquivos aedes aegypti/chikungunya.html",
        "reumatismo": "arquivos aedes aegypti/chikungunya.html",
        "dor forte": "arquivos aedes aegypti/chikungunya.html",
        "rigidez": "arquivos aedes aegypti/chikungunya.html",
        "artrite reumatoide": "arquivos aedes aegypti/chikungunya.html",

        // FEBRE AMARELA
        "febre amarela": "arquivos aedes aegypti/febre-amarela.html",
        "amarela": "arquivos aedes aegypti/febre-amarela.html",
        "febre": "arquivos aedes aegypti/febre-amarela.html",
        "vacina": "arquivos aedes aegypti/febre-amarela.html",
        "visceral": "arquivos aedes aegypti/febre-amarela.html",
        "silvestre": "arquivos aedes aegypti/febre-amarela.html",
        "macacos": "arquivos aedes aegypti/febre-amarela.html",
        "hemorragia": "arquivos aedes aegypti/febre-amarela.html",
        "urbanas": "arquivos aedes aegypti/febre-amarela.html",
        "dose": "arquivos aedes aegypti/febre-amarela.html",
        "imunizacao": "arquivos aedes aegypti/febre-amarela.html",
        
        "dengue": "#introducao-content",
        "informacao": "#introducao-content",
        "o que e": "#introducao-content",
        "geral": "#introducao-content",
        "inicio": "#introducao-content",
        
        "carrossel": "#pagina",
        "campanha": "#pagina",
        "slides": "#pagina",

        "cards": "#cards-content",
        "conheça mais": "#cards-content",
        "doencas": "#cards-content",
        "outras": "#cards-content",
        "saiba": "#cards-content",
        "tabela": "#cards-content",

        "video": "#video-content",
        "video dengue": "#video-content",
        "assista": "#video-content",
        "youtube": "#video-content",
        "midia": "#video-content",

        "saiba mais": "#footer-content",
        "rodape": "#footer-content",

    "sintomas": "sintomas.html", 
    "sinais": "sintomas.html",
    "dor": "sintomas.html",
    "tratamento": "tratamento.html",
    "combate": "combate.html",
    "sobre nós": "Equipe-fonte/index-sobre.html",
    // ...
    
    // Arquivos na SUBPASTA - Caminho Completo
    "zika": "arquivos aedes aegypti/zika-virus.html",
    "aedes": "aedes.html#aedes-content"
    // ...
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

            if (searchBox && searchBox.classList.contains('open')) {
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

const allUnits = [
            // UNIDADES DA ZONA LESTE (Inicialmente visíveis)
            { id: 12, nome: 'UBS Jardim Penha', tipo: 'UBS', endereco: 'Av. São Miguel, 3721', municipio: 'São Paulo', zona: 'Leste', telefone: '11 2095-1000' },
            { id: 13, nome: 'UBS Engenheiro Trindade', tipo: 'UBS', endereco: 'Av. Gabriela Mistral, 1168', municipio: 'São Paulo', zona: 'Leste', telefone: '11 2296-2000' },
            { id: 14, nome: 'UBS Vila Esperança Dr. Cássio Bittencourt Filho', tipo: 'UBS', endereco: 'Rua Alvinópolis, 1350', municipio: 'São Paulo', zona: 'Leste', telefone: '11 2673-3000' },
            { id: 15, nome: 'UBS Tiquatira', tipo: 'UBS', endereco: 'Av. Conde de Frontin, 600', municipio: 'São Paulo', zona: 'Leste', telefone: '11 2682-4000' },
            { id: 16, nome: 'UBS Cangaíba', tipo: 'UBS', endereco: 'Rua Itamumbuca, 52', municipio: 'São Paulo', zona: 'Leste', telefone: '11 2958-5000' },
            { id: 17, nome: 'UBS Jardim Danfer', tipo: 'UBS', endereco: 'Rua Cônego Xavier, 75', municipio: 'São Paulo', zona: 'Leste', telefone: '11 2214-6000' },
            { id: 18, nome: 'UBS Jardim Helena – Cangaíba', tipo: 'UBS', endereco: 'Rua Alfredo Casado, 58', municipio: 'São Paulo', zona: 'Leste', telefone: '11 2958-7000' },
            
            // UNIDADES ZONA LESTE ANTERIORES
            { id: 8, nome: 'UPA São Mateus', tipo: 'UPA', endereco: 'Av. Satélite, 784', municipio: 'São Paulo', zona: 'Leste', telefone: '11 2701-2020' },
            { id: 10, nome: 'UBS Itaquera', tipo: 'UBS', endereco: 'Rua Fontoura Xavier, 100', municipio: 'São Paulo', zona: 'Leste', telefone: '11 2000-1234' },
            { id: 11, nome: 'UPA Tatuapé', tipo: 'UPA', endereco: 'Rua Tuiuti, 2000', municipio: 'São Paulo', zona: 'Leste', telefone: '11 2090-5678' },


            // UNIDADES ZONA NORTE (Não visíveis na inicialização)
            { id: 19, nome: 'UBS Vila Guilherme', tipo: 'UBS', endereco: 'Rua Maria Cândida, 1413', municipio: 'São Paulo', zona: 'Norte', telefone: '11 2901-0101' },
            { id: 20, nome: 'UBS Jardim Brasil', tipo: 'UBS', endereco: 'Av. Roland Garros, 305', municipio: 'São Paulo', zona: 'Norte', telefone: '11 2238-0000' },
            { id: 21, nome: 'UBS Vila Medeiros', tipo: 'UBS', endereco: 'Rua Itamonte, 41', municipio: 'São Paulo', zona: 'Norte', telefone: '11 2210-0300' },
            
            // UNIDADES DE OUTRAS ZONAS/CIDADES (Mantidas para a função de Pesquisa)
            { id: 1, nome: 'UBS Sé', tipo: 'UBS', endereco: 'Praça da Sé, Centro', municipio: 'São Paulo', zona: 'Centro', telefone: '11 3291-0000' },
            { id: 4, nome: 'UBS Barueri Central', tipo: 'UBS', endereco: 'Av. Barueri, 100', municipio: 'Barueri', zona: 'Outra Cidade', telefone: '11 4198-1000' },
            { id: 6, nome: 'UPA Centro de Guarulhos', tipo: 'UPA', endereco: 'R. Oswaldo Cruz, 100', municipio: 'Guarulhos', zona: 'Outra Cidade', telefone: '11 2475-4000' },
        ];

        const unitsListContainer = document.getElementById('unitsList');
        const notFoundMessage = document.getElementById('notFoundMessage');
        const searchInput = document.getElementById('searchInput');

        function createUnitCard(unit) {
            return `
                <div class="card ubs-card shadow-sm ${unit.tipo}">
                    <div class="card-body">
                        <div class="d-flex justify-content-between align-items-center">
                            <h5 class="card-title mb-1">${unit.nome}</h5>
                            <span class="badge ${unit.tipo === 'UBS' ? 'bg-primary' : 'bg-danger'}">${unit.tipo}</span>
                        </div>
                        <p class="card-text text-muted mb-2">${unit.endereco} - ${unit.municipio} (${unit.zona})</p>
                        <p class="card-text mb-0">
                            <small class="text-muted">Tel: ${unit.telefone}</small>
                        </p>
                    </div>
                </div>
            `;
        }

        function renderUnits(unitsToDisplay) {
            unitsListContainer.innerHTML = '';
            if (unitsToDisplay.length === 0) {
                notFoundMessage.classList.remove('d-none');
            } else {
                notFoundMessage.classList.add('d-none');
                unitsToDisplay.forEach(unit => {
                    unitsListContainer.innerHTML += createUnitCard(unit);
                });
            }
        }

        
        function filterUnits() {
            const searchTerm = searchInput.value.toLowerCase().trim();

            if (!searchTerm) {
                const initialUnits = allUnits.filter(unit => 
                    unit.zona === 'Leste' && unit.municipio === 'São Paulo'
                );
                renderUnits(initialUnits);
                return;
            }

            const filtered = allUnits.filter(unit => 
                unit.nome.toLowerCase().includes(searchTerm) || 
                unit.municipio.toLowerCase().includes(searchTerm) ||
                unit.tipo.toLowerCase().includes(searchTerm) ||
                unit.zona.toLowerCase().includes(searchTerm)
            );

            renderUnits(filtered);
        }

        document.addEventListener('DOMContentLoaded', () => {
            const initialUnits = allUnits.filter(unit => 
                unit.zona === 'Leste' && unit.municipio === 'São Paulo'
            );
            
            renderUnits(initialUnits);
        });
    