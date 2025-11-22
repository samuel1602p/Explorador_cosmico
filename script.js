let cardContainer = document.querySelector(".card-container")
let dados = [];

// --- NOVO CÓDIGO PARA CRIAR O FUNDO ESTRELADO ---
function criarFundoEstrelado() {
    const body = document.querySelector('body');
    const numEstrelas = 200; // Aumente para mais estrelas

    for (let i = 0; i < numEstrelas; i++) {
        let estrela = document.createElement('div');
        estrela.className = 'estrela';
        estrela.style.top = `${Math.random() * 100}%`;
        estrela.style.left = `${Math.random() * 100}%`;
        
        // Varia o tempo de animação para um efeito de piscar mais natural
        estrela.style.animationDelay = `${Math.random() * 5}s`;
        estrela.style.animationDuration = `${2 + Math.random() * 3}s`;

        body.appendChild(estrela);
    }
}

async function carregarDados() {
    let resposta = await fetch("data.json");
    dados = await resposta.json();
    renderizarCards(dados); // Renderiza todos os cards assim que os dados são carregados
}

carregarDados();
criarFundoEstrelado(); // Chama a função para criar as estrelas

function iniciarBusca(){
    let campoBusca = document.getElementById("campo-busca");
    let termoBusca = campoBusca.value.toLowerCase();
    // Normaliza o termo de busca para remover acentos
    let termoBuscaNormalizado = termoBusca.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    let dadosFiltrados = dados.filter(dado => {
        // Normaliza o nome do dado para remover acentos antes de comparar
        let nomeNormalizado = dado.nome.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
        return nomeNormalizado.includes(termoBuscaNormalizado);
    });

    renderizarCards(dadosFiltrados);
}

function renderizarCards(dados){
    cardContainer.innerHTML = ""; // Limpa os cards existentes
    for (let dado of dados) {
        let article = document.createElement("article");
        article.innerHTML = `
        <img src="${dado.imagem}" alt="Imagem de ${dado.nome}" class="card-imagem">
        <div class="card-conteudo">
            <h2>${dado.nome}</h2>
            <p><strong>Descoberta:</strong> ${dado.descoberta}</p>
            <p><strong>Raio Equatorial:</strong> ${dado.raio}</p>
            <p>${dado.descricao}</p>
            <p><a href="${dado.link}" target="_blank">Saiba mais</a>.</p>
        </div>
        `
        cardContainer.appendChild(article);
    }
}