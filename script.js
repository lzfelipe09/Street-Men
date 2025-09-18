// Função para alternar a visibilidade do banner (Carrossel de Imagens)
document.addEventListener('DOMContentLoaded', () => {
    const banners = document.querySelectorAll('.banner-carousel img');
    let index = 0;

    // Função para mostrar a imagem ativa
    const showBanner = () => {
        banners.forEach((banner, i) => {
            banner.style.opacity = (i === index) ? '1' : '0';
        });
    };

    // Intervalo para alternar os banners
    setInterval(() => {
        index = (index + 1) % banners.length;
        showBanner();
    }, 5000);  // Troca de banner a cada 5 segundos
});
