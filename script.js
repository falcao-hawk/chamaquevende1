document.addEventListener('DOMContentLoaded', () => {
    const podcastItems = document.querySelectorAll('.podcast-item');
    const podcastsSection = document.getElementById('podcasts');
    const videoPlayerSection = document.getElementById('video-player');
    const youtubeEmbed = document.getElementById('youtube-embed');
    const backButton = document.getElementById('back-button');

    podcastItems.forEach(item => {
        item.addEventListener('click', () => {
            const videoId = item.getAttribute('data-video-id');
            if (videoId) {
                // CORREÇÃO: Use o domínio correto do YouTube
                youtubeEmbed.src = 'https://www.youtube.com/embed/' + videoId + '?autoplay=1';

                podcastsSection.style.display = 'none'; // Esconde a lista de podcasts
                videoPlayerSection.style.display = 'block'; // Mostra o player de vídeo
                window.scrollTo(0, 0); // Volta para o topo da página ao exibir o player
            }
        });
    });

    backButton.addEventListener('click', () => {
        youtubeEmbed.src = ''; // Limpa o src para parar o vídeo
        videoPlayerSection.style.display = 'none'; // Esconde o player de vídeo
        podcastsSection.style.display = 'block'; // Mostra a lista de podcasts novamente
    });
});