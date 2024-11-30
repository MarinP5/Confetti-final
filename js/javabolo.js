// Função para alternar o ícone de favorito
function changeFavoriteIcon() {
    var icon = document.getElementById("favorite-icon");
    if (icon.src.includes("favoritom.png")) {
        icon.src = "Icons/favorito.png";  // Altera para o ícone de favorito marcado
    } else {
        icon.src = "Icons/favoritom.png"; // Altera de volta para o ícone desmarcado
    }
}
// Função para rolar até a seção de comentários
function scrollToComments() {
    var commentsSection = document.querySelector('.comments-section');
    commentsSection.scrollIntoView({ behavior: 'smooth' });  // Rolagem suave até os comentários
}

// Função para alternar o menu mobile
function toggleMenu() {
    const menu = document.querySelector('.nav-links.mobile-menu');
    menu.classList.toggle('open'); // Adiciona ou remove a classe 'open' para abrir ou fechar
}
// Função para mostrar/ocultar o pop-up
function togglePopup() {
    var popup = document.getElementById("share-popup");
    // Alterna a visibilidade do pop-up
    popup.style.display = popup.style.display === "block" ? "none" : "block";
}

// Função para compartilhar no Facebook
function shareOnFacebook() {
    var url = encodeURIComponent(window.location.href); // URL atual
    var facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    window.open(facebookUrl, "_blank");
    togglePopup(); // Fecha o pop-up após o clique
}

// Função para compartilhar no Twitter
function shareOnTwitter() {
    var url = encodeURIComponent(window.location.href); // URL atual
    var twitterUrl = `https://twitter.com/intent/tweet?url=${url}`;
    window.open(twitterUrl, "_blank");
    togglePopup(); // Fecha o pop-up após o clique
}

// Função para compartilhar no WhatsApp
function shareOnWhatsapp() {
    var url = encodeURIComponent(window.location.href); // URL atual
    var whatsappUrl = `https://wa.me/?text=${url}`;
    window.open(whatsappUrl, "_blank");
    togglePopup(); // Fecha o pop-up após o clique
}

// Função para copiar o link da página
function copyLink() {
    var url = window.location.href; // URL atual
    var input = document.createElement('input');
    input.setAttribute('value', url);
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);

    // Exibir uma mensagem de confirmação (opcional)
    alert('Link copiado para a área de transferência!');
    togglePopup(); // Fecha o pop-up após copiar o link
}



 document.getElementById('review-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Evita o comportamento padrão do envio do formulário
      
      // Exibe a mensagem de sucesso
      const successMessage = document.getElementById('success-message');
      successMessage.style.display = 'block';

      // Limpa o formulário após o envio
      this.reset();

      // Opcional: Ocultar a mensagem automaticamente após alguns segundos
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 5000); // Ocultar após 5 segundos
    });

