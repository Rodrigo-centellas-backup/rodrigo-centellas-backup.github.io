document.addEventListener('DOMContentLoaded', () => {
    const numberOfSnowflakes = 100; // Ajusta el número de copos de nieve
    const snowflakesContainer = document.getElementById('snowflakes');

    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('img');
        snowflake.src = 'imagenes/rosas.png'; // Asegúrate de que esta imagen esté en la carpeta 'images'
        snowflake.classList.add('snowflake');
        snowflakesContainer.appendChild(snowflake);

        // Posicionar el copo de nieve aleatoriamente
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`;
    }
});
