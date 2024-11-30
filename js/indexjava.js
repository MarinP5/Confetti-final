// Função para alternar o menu mobile
function toggleMenu() {
    const menu = document.querySelector('.nav-links.mobile-menu');
    menu.classList.toggle('open'); // Adiciona ou remove a classe 'open' para abrir ou fechar
}

// script.js
const images = document.querySelectorAll('.image');
let currentIndex = 0;

function changeImage() {
  // Remove a classe "active" da imagem atual
  images[currentIndex].classList.remove('active');

  // Incrementa o índice ou reseta para 0 se for o último
  currentIndex = (currentIndex + 1) % images.length;

  // Adiciona a classe "active" à próxima imagem
  images[currentIndex].classList.add('active');
}

// Troca as imagens a cada 3 segundos
setInterval(changeImage, 3000);
