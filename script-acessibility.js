document.addEventListener('DOMContentLoaded', () => {
    // -----------------------------------------------------
    // Elementos do DOM (Atualize aqui se mudar os IDs)
    // -----------------------------------------------------
    const container = document.getElementById('accessibility-button-container');
    const mainButton = document.getElementById('main-accessibility-button');
    const panel = document.getElementById('accessibility-panel');
    
    // Alvo para as classes de cor (Alto Contraste / Modo Noturno)
    // Usamos o <body> para que a mudança de cor afete tudo.
    const targetColorElement = document.body; 

    // Alvo para o filtro de daltonismo e tamanho de fonte.
    // Usamos o <main> pois é o principal contêiner de conteúdo.
    const targetContentElement = document.querySelector('main');
    if (!targetContentElement) return; // Segurança caso o <main> não exista

    // -----------------------------------------------------
    // Configurações de Acessibilidade
    // -----------------------------------------------------
    const FONT_STEP = 10; // Aumentar/diminuir em 10%
    const MAX_FONT = 150; 
    const MIN_FONT = 80;  
    
    // A fonte base do <main> será controlada pelo style.fontSize
    targetContentElement.style.fontSize = "100%";
    let currentFontSize = 100;
    
    // Lista de classes de modo de cor exclusivo (aplicadas ao targetColorElement/<body>)
    const exclusiveColorModes = ['acess-high-contrast', 'acess-dark-mode'];
    
    // Lógica do Filtro Daltônico
    const filterButton = document.getElementById('toggle-colorblind-filter');
    const filterOptions = [
        { id: null, name: 'Desativado' }, 
        { id: 'protanopia-filter', name: 'Protanopia (Def. Vermelho)' }, 
        { id: 'deuteranopia-filter', name: 'Deuteranopia (Def. Verde)' }, 
        { id: 'tritanopia-filter', name: 'Tritanopia (Def. Azul)' }      
    ];
    let currentFilterIndex = 0; 

    // -----------------------------------------------------
    // 1. Funcionalidade de Arrastar (Drag and Drop)
    // -----------------------------------------------------
    let isDragging = false;
    let offsetX, offsetY;

    container.addEventListener('mousedown', (e) => {
        if (!e.target.closest('.acess-panel')) {
            isDragging = true;
            container.style.cursor = 'grabbing';
            offsetX = e.clientX - container.getBoundingClientRect().left;
            offsetY = e.clientY - container.getBoundingClientRect().top;
            e.preventDefault(); 
        }
    });

    document.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        let newX = e.clientX - offsetX;
        let newY = e.clientY - offsetY;
        const maxX = window.innerWidth - container.offsetWidth;
        const maxY = window.innerHeight - container.offsetHeight;
        newX = Math.min(Math.max(0, newX), maxX);
        newY = Math.min(Math.max(0, newY), maxY);
        container.style.left = `${newX}px`;
        container.style.top = `${newY}px`;
        container.style.right = 'auto'; 
    });

    document.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            container.style.cursor = 'grab';
        }
    });

    // -----------------------------------------------------
    // 2. Abrir/Fechar Painel
    // -----------------------------------------------------
    mainButton.addEventListener('click', () => {
        const isPanelHidden = panel.classList.toggle('hidden');
        mainButton.setAttribute('aria-expanded', !isPanelHidden);
    });

    // Garante que o painel feche ao clicar fora
    document.addEventListener('click', (e) => {
        if (!container.contains(e.target) && !panel.classList.contains('hidden')) {
             panel.classList.add('hidden');
             mainButton.setAttribute('aria-expanded', 'false');
        }
    });

    // -----------------------------------------------------
    // 3. Aumentar/Diminuir Fonte
    // -----------------------------------------------------
    const updateFontSize = (increase) => {
        let newSize = increase 
            ? Math.min(MAX_FONT, currentFontSize + FONT_STEP)
            : Math.max(MIN_FONT, currentFontSize - FONT_STEP);
        
        if (newSize !== currentFontSize) {
            currentFontSize = newSize;
            targetContentElement.style.fontSize = `${currentFontSize}%`; 
        }
    };

    document.getElementById('increase-font').addEventListener('click', () => updateFontSize(true));
    document.getElementById('decrease-font').addEventListener('click', () => updateFontSize(false));


    // -----------------------------------------------------
    // 4. Toggles de Cor Principal (Aplicado ao <body>)
    // -----------------------------------------------------
    const toggleClass = (className, button) => { 
        // Alterna a classe no targetColorElement (<body>)
        const isActive = targetColorElement.classList.toggle(className);
        
        button.setAttribute('aria-pressed', isActive);
        
        // Lógica de exclusividade
        if (exclusiveColorModes.includes(className) && isActive) {
            exclusiveColorModes.forEach(otherClass => {
                if (otherClass !== className && targetColorElement.classList.contains(otherClass)) {
                    targetColorElement.classList.remove(otherClass);
                    const otherButton = document.querySelector(`[id^="toggle-"][class*="${otherClass.split('-')[1]}"]`);
                    if (otherButton) {
                        otherButton.setAttribute('aria-pressed', 'false');
                    }
                }
            });
        }
    };
    
    document.getElementById('toggle-high-contrast').addEventListener('click', function() {
        toggleClass('acess-high-contrast', this);
    });

    document.getElementById('toggle-dark-mode').addEventListener('click', function() {
        toggleClass('acess-dark-mode', this);
    });

    // -----------------------------------------------------
    // 5. Lógica de Ciclo do Filtro Daltônico (Aplicado ao <main>)
    // -----------------------------------------------------
    filterButton.addEventListener('click', function() {
        // Cicla para o próximo filtro, ou volta para 0 (Desativado)
        currentFilterIndex = (currentFilterIndex + 1) % filterOptions.length;
        
        const currentFilter = filterOptions[currentFilterIndex];
        
        // Remove qualquer filtro aplicado anteriormente
        targetContentElement.style.filter = ''; 

        // Aplica o novo filtro ou remove
        if (currentFilter.id) {
            targetContentElement.style.filter = `url(#${currentFilter.id})`;
            this.setAttribute('aria-pressed', 'true');
        } else {
            this.setAttribute('aria-pressed', 'false');
        }
        
        // Atualiza o texto do botão
        this.textContent = `Filtro Daltônico: ${currentFilter.name}`;
    });
});