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

const livrosPorPagina = 20;
let paginaAtual = 1;

const listaLivros = document.getElementById("lista-livros");
const paginacao = document.getElementById("paginacao");
const pesquisa = document.getElementById("pesquisa");
const filtroCategorias = document.getElementById("categorias");
const filtroLetras = document.getElementById("letras");

function renderizarLivros(livrosFiltrados) {
  listaLivros.innerHTML = "";
  const inicio = (paginaAtual - 1) * livrosPorPagina;
  const fim = inicio + livrosPorPagina;
  const livrosPagina = livrosFiltrados.slice(inicio, fim);

  livrosPagina.forEach(livro => {
    const div = document.createElement("div");
    div.className = "livro fade-in";
    div.innerHTML = `
      <img src="${livro.imagem}" alt="${livro.titulo}" />
      <h4>${livro.titulo}</h4>
      <p>${livro.descricao}</p>
      <div class="botoes">
        <a href="${livro.linkCompra}" class="comprar">Comprar</a>
        <a href="${livro.linkAmostra}" class="amostra" download>Amostra</a>
      </div>
    `;
    listaLivros.appendChild(div);
  });

  renderizarPaginacao(livrosFiltrados.length);
}

function renderizarPaginacao(total) {
  paginacao.innerHTML = "";
  const totalPaginas = Math.ceil(total / livrosPorPagina);
  for (let i = 1; i <= totalPaginas; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    btn.className = i === paginaAtual ? "ativo" : "";
    btn.addEventListener("click", () => {
      paginaAtual = i;
      aplicarFiltros();
    });
    paginacao.appendChild(btn);
  }
}

function gerarCategorias(livrosLista) {
  const categorias = [...new Set(livrosLista.map(l => l.categoria))];
  filtroCategorias.innerHTML = "<strong>Categorias:</strong> ";
  categorias.forEach(categoria => {
    const btn = document.createElement("button");
    btn.textContent = categoria;
    btn.addEventListener("click", () => {
      pesquisa.value = "";
      aplicarFiltros(categoria);
    });
    filtroCategorias.appendChild(btn);
  });
}

function gerarLetras(livrosLista) {
  const letras = [...new Set(livrosLista.map(l => l.titulo.charAt(0).toUpperCase()))].sort();
  filtroLetras.innerHTML = "<strong>Letra:</strong> ";
  letras.forEach(letra => {
    const btn = document.createElement("button");
    btn.textContent = letra;
    btn.addEventListener("click", () => {
      pesquisa.value = "";
      aplicarFiltros(null, letra);
    });
    filtroLetras.appendChild(btn);
  });
}

function aplicarFiltros(categoriaSelecionada = null, letraSelecionada = null) {
  let filtrados = [...livros];

  if (pesquisa.value) {
    filtrados = filtrados.filter(l =>
      l.titulo.toLowerCase().includes(pesquisa.value.toLowerCase())
    );
  }

  if (categoriaSelecionada) {
    filtrados = filtrados.filter(l => l.categoria === categoriaSelecionada);
  }

  if (letraSelecionada) {
    filtrados = filtrados.filter(l => l.titulo.startsWith(letraSelecionada));
  }

  paginaAtual = 1;
  renderizarLivros(filtrados);
}

pesquisa.addEventListener("input", () => {
  aplicarFiltros();
});

// Inicialização
gerarCategorias(livros);
gerarLetras(livros);
aplicarFiltros();
