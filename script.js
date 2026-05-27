document.addEventListener('DOMContentLoaded', function () {

    const header      = document.getElementById('main-header');
    const searchBox   = document.getElementById('search-box');
    const searchBtn   = document.getElementById('search-btn');
    const searchTxt   = document.getElementById('search-txt');
    const menuToggle  = document.getElementById('menu-toggle');
    const navbar      = document.querySelector('.header-nav') || document.querySelector('.navbar');
    const scrollTrigger = 50;


    const mapeamentoBusca = {
        // Sintomas
        "sintomas": "sintomas.html",
        "sinais": "sintomas.html",
        "dor": "sintomas.html",
        "mal estar": "sintomas.html",
        "dor de cabeca": "sintomas.html",
        "cefaleia": "sintomas.html",
        "dor no corpo": "sintomas.html",
        "mialgia": "sintomas.html",
        "dor nas juntas": "sintomas.html",
        "artralgia": "sintomas.html",
        "dor atras dos olhos": "sintomas.html",
        "manchas vermelhas": "sintomas.html",
        "exantema": "sintomas.html",
        "febre alta": "sintomas.html",
        "procurar medico": "sintomas.html",

        // Sintomas Graves
        "sintomas graves": "sintomas.html#grave-content",
        "grave": "sintomas.html#grave-content",
        "hemorragia": "sintomas.html#grave-content",
        "hemorragica": "sintomas.html#grave-content",
        "sangramento": "sintomas.html#grave-content",
        "alerta": "sintomas.html#grave-content",
        "plaquetas": "sintomas.html#grave-content",
        "choque": "sintomas.html#grave-content",
        "dengue grave": "sintomas.html#grave-content",
        "queda de pressao": "sintomas.html#grave-content",
        "vomito persistente": "sintomas.html#grave-content",

        // Tratamento
        "tratamento": "tratamento.html",
        "cura": "tratamento.html",
        "medicacao": "tratamento.html",
        "remedio": "tratamento.html",
        "dipirona": "tratamento.html",
        "paracetamol": "tratamento.html",
        "automedicacao": "tratamento.html",
        "hidratacao": "tratamento.html",
        "soro": "tratamento.html",
        "repouso": "tratamento.html",
        "internacao": "tratamento.html",
        "analgesicos": "tratamento.html",
        "anti-inflamatorios": "tratamento.html",
        "hospitalizacao": "tratamento.html",
        "qdenga": "tratamento.html#vacina-container",

        // Ações e Combate
        "combate": "combate.html",
        "acoes": "acoes.html",
        "notificar": "combate.html",
        "prevencao": "acoes.html",
        "agente de saude": "acoes.html",
        "visita": "acoes.html",
        "larvicida": "combate.html",
        "nebulizacao": "combate.html#fumace-content",
        "eliminacao": "acoes.html",
        "caixa d agua": "acoes.html",
        "pneus": "acoes.html",
        "vasos de planta": "acoes.html",
        "servico publico": "combate.html",
        "combater": "acoes.html",
        "mutirao": "acoes.html",
        "limpeza": "acoes.html",
        "descarte": "acoes.html",
        "protecao": "acoes.html",
        "inspecao": "acoes.html",
        "denuncia": "combate.html",
        "vigilancia": "combate.html",

        // Equipe e Fontes
        "sobre nós": "Equipe-fontes/index-sobre.html",
        "sobre nos": "Equipe-fontes/index-sobre.html",
        "nós": "Equipe-fontes/index-sobre.html",
        "nos": "Equipe-fontes/index-sobre.html",
        "equipe": "Equipe-fontes/index-sobre.html",
        "quem somos": "Equipe-fontes/index-sobre.html",
        "fontes": "Equipe-fontes/index-sobre.html#fontes-content",
        "referencias": "Equipe-fontes/index-sobre.html#fontes-content",
        "autores": "Equipe-fontes/index-sobre.html",
        "creditos": "Equipe-fontes/index-sobre.html",

        // Aedes
        "video aedes": "aedes.html#video-aedes-content",
        "video aegypti": "aedes.html#video-aedes-content",
        "aedes": "aedes.html#aedes-content",
        "aedes aegypti": "aedes.html#aedes-content",
        "mosquito": "aedes.html#aedes-content",
        "vetor": "aedes.html#aedes-content",
        "biologia": "aedes.html#aedes-content",
        "ciclo de vida": "aedes.html#aedes-content",
        "transmissao": "aedes.html#aedes-content",
        "ovos": "aedes.html#aedes-content",
        "larvas": "aedes.html#aedes-content",
        "pernilongo": "aedes.html#aedes-content",
        "femea": "aedes.html#aedes-content",
        "habitat": "aedes.html#aedes-content",
        "picada": "aedes.html#aedes-content",

        // Combate com âncora
        "datasus": "combate.html#data-content",
        "data sus": "combate.html#data-content",
        "fumace": "combate.html#fumace-content",
        "fumacê": "combate.html#fumace-content",
        "calendario": "combate.html#calendario-content",
        "calendarios": "combate.html#calendario-content",
        "caminhao": "combate.html#fumace-content",
        "cronograma": "combate.html#calendario-content",
        "inseticida": "combate.html#fumace-content",
        "estatisticas": "combate.html#data-content",
        "dados": "combate.html#data-content",
        "notificar foco": "combate.html#notificar-content",
        "notificar foco": "combate.html#notificar-content",
        "notificar caso": "combate.html#notificar-content",
        "notificar dengue": "combate.html#notificar-content",

        // Zika
        "zika": "arquivos aedes aegypti/zika-virus.html",
        "microcefalia": "arquivos aedes aegypti/zika-virus.html#sintoma-content",
        "gestacao": "arquivos aedes aegypti/zika-virus.html#sintoma-content",
        "gravidez": "arquivos aedes aegypti/zika-virus.html#sintoma-content",
        "zika virus": "arquivos aedes aegypti/zika-virus.html",
        "congenita": "arquivos aedes aegypti/zika-virus.html",
        "zika consequencias": "arquivos aedes aegypti/zika-virus.html#sintoma-content",
        "zika sintomas": "arquivos aedes aegypti/zika-virus.html",
        "zika transmissão": "arquivos aedes aegypti/zika-virus.html#transmissao-content",
        "zika prevenção": "arquivos aedes aegypti/zika-virus.html#prevencao-content",

        // Chikungunya
        "chikungunya": "arquivos aedes aegypti/chikungunya.html",
        "artrite": "arquivos aedes aegypti/chikungunya.html",
        "articular": "arquivos aedes aegypti/chikungunya.html",
        "cronica": "arquivos aedes aegypti/chikungunya.html",
        "reumatismo": "arquivos aedes aegypti/chikungunya.html",
        "rigidez": "arquivos aedes aegypti/chikungunya.html",

        // Febre Amarela
        "febre amarela": "arquivos aedes aegypti/febre-amarela.html",
        "amarela": "arquivos aedes aegypti/febre-amarela.html",
        "vacina": "tratamento.html",
        "visceral": "arquivos aedes aegypti/febre-amarela.html",
        "silvestre": "arquivos aedes aegypti/febre-amarela.html",
        "macacos": "arquivos aedes aegypti/febre-amarela.html",
        "imunizacao": "arquivos aedes aegypti/febre-amarela.html",

        // Página inicial âncoras
        "dengue": "index.html#introducao-content",
        "informacao": "index.html#introducao-content",
        "o que e": "index.html#introducao-content",
        "geral": "index.html#introducao-content",
        "inicio": "index.html#introducao-content",
        "campanha": "index.html#pagina",
        "slides": "index.html#pagina",
        "cards": "index.html#cards-content",
        "conheça mais": "index.html#cards-content",
        "doencas": "#cards-content",
        "outras": "index.html#cards-content",
        "video": "index.html#video-content",
        "video dengue": "index.html#video-content",
        "assista": "index.html#video-content",
        "youtube": "index.html#video-content",
        "rodape": "index.html#footer-content",
        "saiba mais": "index.html#footer-content",
    };

    function rolarParaSecao() {
        if (!searchTxt) return;
        const termoPesquisa = searchTxt.value.trim().toLowerCase();
        const destino = mapeamentoBusca[termoPesquisa];

        if (destino) {
            if (destino.startsWith('#')) {
                const elementoAlvo = document.querySelector(destino);
                if (elementoAlvo) {
                    elementoAlvo.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            } else {
                window.location.href = destino;
            }
            searchTxt.value = '';
        }
    }

    if (header) {
        function checkScroll() {
            header.classList.toggle('shrink', window.scrollY > scrollTrigger);
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
            if (navbar && navbar.classList.contains('show')) {
                navbar.classList.remove('show');
                if (menuToggle) menuToggle.classList.remove('open');
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
                if (searchTxt) searchTxt.value = '';
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
    { id: 12, nome: 'UBS Jardim Penha', tipo: 'UBS', endereco: 'Av. São Miguel, 3721', municipio: 'São Paulo', zona: 'Leste', telefone: '11 2095-1000' },
    { id: 13, nome: 'UBS Engenheiro Trindade', tipo: 'UBS', endereco: 'Av. Gabriela Mistral, 1168', municipio: 'São Paulo', zona: 'Leste', telefone: '11 2296-2000' },
    { id: 14, nome: 'UBS Vila Esperança Dr. Cássio Bittencourt Filho', tipo: 'UBS', endereco: 'Rua Alvinópolis, 1350', municipio: 'São Paulo', zona: 'Leste', telefone: '11 2673-3000' },
    { id: 15, nome: 'UBS Tiquatira', tipo: 'UBS', endereco: 'Av. Conde de Frontin, 600', municipio: 'São Paulo', zona: 'Leste', telefone: '11 2682-4000' },
    { id: 16, nome: 'UBS Cangaíba', tipo: 'UBS', endereco: 'Rua Itamumbuca, 52', municipio: 'São Paulo', zona: 'Leste', telefone: '11 2958-5000' },
    { id: 17, nome: 'UBS Jardim Danfer', tipo: 'UBS', endereco: 'Rua Cônego Xavier, 75', municipio: 'São Paulo', zona: 'Leste', telefone: '11 2214-6000' },
    { id: 18, nome: 'UBS Jardim Helena – Cangaíba', tipo: 'UBS', endereco: 'Rua Alfredo Casado, 58', municipio: 'São Paulo', zona: 'Leste', telefone: '11 2958-7000' },
    { id: 8, nome: 'UPA São Mateus', tipo: 'UPA', endereco: 'Av. Satélite, 784', municipio: 'São Paulo', zona: 'Leste', telefone: '11 2701-2020' },
    { id: 10, nome: 'UBS Itaquera', tipo: 'UBS', endereco: 'Rua Fontoura Xavier, 100', municipio: 'São Paulo', zona: 'Leste', telefone: '11 2000-1234' },
    { id: 11, nome: 'UPA Tatuapé', tipo: 'UPA', endereco: 'Rua Tuiuti, 2000', municipio: 'São Paulo', zona: 'Leste', telefone: '11 2090-5678' },
    { id: 19, nome: 'UBS Vila Guilherme', tipo: 'UBS', endereco: 'Rua Maria Cândida, 1413', municipio: 'São Paulo', zona: 'Norte', telefone: '11 2901-0101' },
    { id: 20, nome: 'UBS Jardim Brasil', tipo: 'UBS', endereco: 'Av. Roland Garros, 305', municipio: 'São Paulo', zona: 'Norte', telefone: '11 2238-0000' },
    { id: 21, nome: 'UBS Vila Medeiros', tipo: 'UBS', endereco: 'Rua Itamonte, 41', municipio: 'São Paulo', zona: 'Norte', telefone: '11 2210-0300' },
    { id: 1, nome: 'UBS Sé', tipo: 'UBS', endereco: 'Praça da Sé, Centro', municipio: 'São Paulo', zona: 'Centro', telefone: '11 3291-0000' },
    { id: 4, nome: 'UBS Barueri Central', tipo: 'UBS', endereco: 'Av. Barueri, 100', municipio: 'Barueri', zona: 'Outra Cidade', telefone: '11 4198-1000' },
    { id: 6, nome: 'UPA Centro de Guarulhos', tipo: 'UPA', endereco: 'R. Oswaldo Cruz, 100', municipio: 'Guarulhos', zona: 'Outra Cidade', telefone: '11 2475-4000' },
];

 function createUnitCard(unit) {
    return `
        <div class="card ubs-card shadow-sm ${unit.tipo} mb-3">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center">
                    <h5 class="card-title mb-1">${unit.nome}</h5>
                    <span class="badge ${unit.tipo === 'UBS' ? 'bg-success' : 'bg-danger'}">${unit.tipo}</span>
                </div>
                <p class="card-text text-muted mb-2">${unit.endereco} — ${unit.municipio} (${unit.zona})</p>
                <p class="card-text mb-0"><small class="text-muted"><i class="bi bi-telephone"></i> ${unit.telefone}</small></p>
            </div>
        </div>
    `;
}

function renderUnits(unitsToDisplay) {
    const container = document.getElementById('unitsList');
    const notFound  = document.getElementById('notFoundMessage');
    if (!container) return;
    container.innerHTML = '';
    if (unitsToDisplay.length === 0) {
        if (notFound) notFound.classList.remove('d-none');
    } else {
        if (notFound) notFound.classList.add('d-none');
        unitsToDisplay.forEach(unit => {
            container.innerHTML += createUnitCard(unit);
        });
    }
}

function filterUnits() {
    const input = document.getElementById('searchInput');
    if (!input) return;
    const term = input.value.toLowerCase().trim();
    if (!term) {
        renderUnits(allUnits.filter(u => u.zona === 'Leste' && u.municipio === 'São Paulo'));
        return;
    }
    renderUnits(allUnits.filter(u =>
        u.nome.toLowerCase().includes(term) ||
        u.municipio.toLowerCase().includes(term) ||
        u.tipo.toLowerCase().includes(term) ||
        u.zona.toLowerCase().includes(term)
    ));
}

document.addEventListener('DOMContentLoaded', function () {
    const lista = document.getElementById('unitsList');
    if (lista) {
        renderUnits(allUnits.filter(u => u.zona === 'Leste' && u.municipio === 'São Paulo'));
    }
});