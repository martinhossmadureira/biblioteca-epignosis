// livros.js – Biblioteca Epignósis

const livros = [
  {
    titulo: "Namoro Para Vida Toda",
    descricao: "📖 Autor: Martinho S. S. Madureira 📅 Edição: 2023 💍 Namoro bem-sucedido é a base para um casamento próspero! O que Deus pensa sobre o namoro? Como construir um relacionamento sólido e abençoado? Quais princípios bíblicos podem guiar um casal rumo a um futuro duradouro? Em Namoro Para a Vida Toda, Martinho S. S. Madureira apresenta uma abordagem cristã profunda e prática sobre o namoro, explorando temas como: ✅ O propósito divino para o relacionamento ✅ Princípios bíblicos para um namoro saudável ✅ Doenças que podem destruir um namoro ✅ Responsabilidades do casal ✅ Espiritualidade no relacionamento ✅ Conselhos práticos para evitar armadilhas. Com uma linguagem acessível e fundamentada na Palavra de Deus, este livro é um guia essencial para jovens cristãos que desejam construir um namoro sólido, baseado no amor, respeito e santidade. 📩 Adquira agora e transforme sua visão sobre o namoro! Para mais informações, entre em contato: 📧 martinhomadureiraoficial@gmail.com 📞 927791547",
    categoria: "Relacionamento",
    linkCompra: "https://pay.kuenha.com/fc181391-9c9e-44ea-a04c-196b8fad08be",
    linkAmostra: "https://drive.google.com/file/d/16bgI3exmud-AS_3ETpvHnZDezFQn-C-8/view?usp=drive_link",
    imagem: "assets/img/ebooknamoro.jpg"
  },
  {
    titulo: "As Janelas do Céu",
    descricao: "📖 Autor: Martinho S. S. Madureira 📅 Edição: 2023🌿 Descubra os segredos da provisão divina! O que significa ter as -Janelas do Céu- abertas sobre a sua vida? Como experimentar a abundância e a provisão de Deus? Neste livro, Martinho S. S. Madureira explora profundamente o conceito bíblico das Janelas do Céu, revelando verdades espirituais que transformam vidas. Com base em Malaquias 3:10 e outras passagens bíblicas, você aprenderá: ✅ O significado espiritual das Janelas do Céu ✅ Como Deus manifesta provisão em diversas áreas da vida ✅ A relação entre fé, obediência e bênçãos materiais ✅ Princípios bíblicos sobre dízimos, ofertas e semeadura ✅ Como abrir e fechar as Janelas do Céu em sua vida. Com uma abordagem clara e fundamentada na Palavra de Deus, este livro é um guia essencial para quem deseja viver sob a provisão divina e experimentar a fidelidade do Senhor em todas as áreas. 📩 Adquira agora e descubra como viver na abundância de Deus! Para mais informações, entre em contato: 📧 martinhomadureiraoficial@gmail.com 📞 927791547",
    categoria: "Finanças, Prosperidade",
    linkCompra: "https://pay.kuenha.com/1d921f2f-4ed1-47d7-b84e-06c7745f432a",
    linkAmostra: "https://drive.google.com/file/d/1LxhewHoMVZorIh3fNwG-keLxL2gjCf1w/view?usp=drive_link",
    imagem: "assets/img/ebookjanelas.png"
  },
  {
    titulo: "Nova Criação: Quem eu sou em Cristo e o que isso Muda para Sempre",
    descricao: "Nova Criação: Quem Eu Sou em Cristo e o Que Isso Muda Para Sempre Autor: Martinho S. S. Madureira Edição: 2025 O que significa ser uma nova criação em Cristo? Como essa transformação afeta nossa identidade, nossa vida e nosso propósito? Neste livro, Martinho S. S. Madureira explora profundamente a doutrina da regeneração, revelando como a obra de Cristo nos recria completamente e nos dá uma nova identidade. Com base na Palavra de Deus, você aprenderá: O significado da nova criação e sua diferença da velha natureza Como fomos identificados com Cristo em Sua morte e ressurreição. A realidade da justificação e da paz com Deus, O impacto da adoção como filhos e co-herdeiros com Cristo, A renovação da mente e sua influência na vida cristã, A autoridade no nome de Jesus e seu papel na caminhada espiritual,O chamado para viver como embaixadores do Reino de Deus. Este livro não apenas apresenta fundamentos teológicos, mas convida o leitor a experimentar a realidade da nova criação em todas as áreas da vida. Através de uma abordagem clara e fundamentada na Escritura, Nova Criação é um guia essencial para quem deseja viver plenamente a identidade que recebeu em Cristo. Adquira agora e descubra o que significa ser uma nova criatura em Cristo! Para mais informações, entre em contato: E-mail: martinhomadureiraoficial@gmail.com Telefone: 927791547",
    categoria: "Fé, Identidade",
    linkCompra: "https://pay.kuenha.com/5b5bd35c-e44f-487d-bc25-349bc5bf1388",
    linkAmostra: "https://drive.google.com/file/d/1VDbTA6rRTjqfNWuUXEDP8oyE_9GL-ZQI/view?usp=drive_link",
    imagem: "assets/img/ebooknovacriacao.png"
  }
  
  // Adicione mais livros aqui
];

const livrosContainer = document.getElementById("livrosContainer");
const letrasFiltro = document.getElementById("letrasFiltro");
const searchInput = document.getElementById("searchInput");
const paginacaoContainer = document.getElementById("paginacaoContainer");

const livrosPorPagina = 20;
let paginaAtual = 1;
let filtroAtual = "todos";
let termoBusca = "";

function gerarBotoesFiltro() {
  const letras = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"];
  letrasFiltro.innerHTML = "<button data-filtro='todos' class='ativo'>Todos</button>";
  letras.forEach(l => {
    const botao = document.createElement("button");
    botao.textContent = l;
    botao.setAttribute("data-filtro", l);
    letrasFiltro.appendChild(botao);
  });
}

function aplicarFiltros() {
  let resultados = livros.filter(l =>
    (filtroAtual === "todos" || l.titulo.toUpperCase().startsWith(filtroAtual)) &&
    l.titulo.toLowerCase().includes(termoBusca.toLowerCase())
  );

  const totalPaginas = Math.ceil(resultados.length / livrosPorPagina);
  if (paginaAtual > totalPaginas) paginaAtual = 1;
  const inicio = (paginaAtual - 1) * livrosPorPagina;
  const paginaLivros = resultados.slice(inicio, inicio + livrosPorPagina);

  renderizarLivros(paginaLivros);
  renderizarPaginacao(totalPaginas);
}

function renderizarLivros(lista) {
  livrosContainer.innerHTML = "";
  lista.forEach(livro => {
    const card = document.createElement("div");
    card.className = "card-livro";
    card.innerHTML = `
      <h3>${livro.titulo}</h3>
      <p>${livro.descricao}</p>
      <a href="${livro.link}" class="btn-comprar" target="_blank">Comprar</a>
    `;
    livrosContainer.appendChild(card);
  });
}

function renderizarPaginacao(total) {
  paginacaoContainer.innerHTML = "";
  for (let i = 1; i <= total; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.className = i === paginaAtual ? "ativo" : "";
    btn.addEventListener("click", () => {
      paginaAtual = i;
      aplicarFiltros();
    });
    paginacaoContainer.appendChild(btn);
  }
}

letrasFiltro.addEventListener("click", e => {
  if (e.target.tagName === "BUTTON") {
    filtroAtual = e.target.dataset.filtro;
    paginaAtual = 1;
    document.querySelectorAll(".letras-filtro button").forEach(btn => btn.classList.remove("ativo"));
    e.target.classList.add("ativo");
    aplicarFiltros();
  }
});

searchInput.addEventListener("input", e => {
  termoBusca = e.target.value;
  paginaAtual = 1;
  aplicarFiltros();
});

// Inicialização
gerarBotoesFiltro();
aplicarFiltros();
