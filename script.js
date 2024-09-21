document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('main-image');
    const growBtn = document.getElementById('grow-btn');
    const changeBtn = document.getElementById('change-btn');

    let growFactor = 1;
    let currentImageIndex = 0;
    const totalImages = 26;
    const images = [];

    // Genera la lista de imágenes
    for (let i = 0; i <= totalImages; i++) {
        images.push(`imagenes/${i}.jpeg`);
    }

    // Cargar la primera imagen al inicio
    mainImage.src = images[currentImageIndex];

    const moveButtonsDown = () => {
        const offset = 30; // Ajusta este valor según la cantidad de crecimiento de la imagen
        growBtn.style.position = 'relative';
        changeBtn.style.position = 'relative';
        growBtn.style.top = `${offset}px`;
        changeBtn.style.top = `${offset}px`;
    };

    growBtn.addEventListener('click', () => {
        growFactor += 0.1;
        // Aumentar el tamaño de la imagen
        mainImage.style.transform = `scale(${growFactor})`;
        // Mover ambos botones hacia abajo para evitar que se tapen
        moveButtonsDown();
    });

    changeBtn.addEventListener('click', () => {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        mainImage.src = images[currentImageIndex];
        // Resetear el tamaño de la imagen cuando se cambia
        growFactor = 1;
        mainImage.style.transform = `scale(${growFactor})`;

        // Resetear la posición de ambos botones
        growBtn.style.position = 'static';
        changeBtn.style.position = 'static';
        growBtn.style.top = '0';
        changeBtn.style.top = '0';
    });
});
