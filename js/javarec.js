// Função para alternar o menu mobile
function toggleMenu() {
    const menu = document.querySelector('.nav-links.mobile-menu');
    menu.classList.toggle('open'); // Adiciona ou remove a classe 'open' para abrir ou fechar
}

// Obtendo todos os botões de categoria
const scrollButtons = document.querySelectorAll('.scroll-btn');

// Adicionando evento de clique para cada botão
scrollButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Obtendo o ID do alvo de rolagem (target)
        const targetId = button.getAttribute('data-target');
        const targetElement = document.querySelector(targetId);

        // Rolando até a seção alvo com comportamento suave
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
});
