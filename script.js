document.addEventListener('DOMContentLoaded', () => {
    // Frases dinámicas para "Sobre Nosotros"
    const phrases = [
        "Innovación y calidad en cada detalle.",
        "Transformando ideas en realidad.",
        "Pasión por la excelencia.",
        "Creatividad sin límites."
    ];
    
    let phraseIndex = 0;
    const dynamicText = document.getElementById('dynamic-text');
    
    setInterval(() => {
            phraseIndex = (phraseIndex + 1) % phrases.length;
            dynamicText.textContent = phrases[phraseIndex];
    }, 3000); // Cambio cada 3 segundos
    
    // Funcionalidad para mostrar el QR secreto al pulsar "Pruébalo"
    const tryButton = document.getElementById('tryButton');
    const qrModal = document.getElementById('qrModal');
    const qrClose = document.getElementById('qrClose');
    
    tryButton.addEventListener('click', () => {
        qrModal.style.display = 'flex';
    });
    
    qrClose.addEventListener('click', () => {
        qrModal.style.display = 'none';
    });
    
    // Cerrar el modal si se hace clic fuera del contenido
    window.addEventListener('click', (e) => {
        if (e.target === qrModal) {
            qrModal.style.display = 'none';
        }
    });
});

// Preloader: Oculta la pantalla de carga una vez que la página se haya cargado completamente
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
});
