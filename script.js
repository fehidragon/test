// Mudança de estilo do menu ao rolar a página
window.onscroll = function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    }
}