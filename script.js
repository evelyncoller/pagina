// Seleciona o botão e o corpo da página
const colorButton = document.getElementById('colorButton');
const body = document.body;

// Array com algumas cores para alternar
const colors = ['#f0f8ff', '#f5f5dc', '#fffafa', '#f0fff0', '#fdf5e6'];

// Adiciona um "ouvinte de evento" para o clique no botão
colorButton.addEventListener('click', () => {
    // Gera um número aleatório para escolher uma cor do array
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];

    // Muda a cor de fundo do corpo da página
    body.style.backgroundColor = randomColor;
});
