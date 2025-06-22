// script.js – Biblioteca Epignósis

// Botão de voltar ao topo
const btnTopo = document.querySelector('.voltar-topo');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    btnTopo.style.display = 'block';
  } else {
    btnTopo.style.display = 'none';
  }
});

btnTopo.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animações suaves para entrada dos elementos
const fadeElements = document.querySelectorAll('.livro, .tutorial, .hero');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

fadeElements.forEach(el => {
  observer.observe(el);
});
