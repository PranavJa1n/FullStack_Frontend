const holes = document.querySelectorAll('.hole');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('start-btn');
let score = 0;

function startGame() {
    score = 0;
    scoreDisplay.textContent = score;
    setInterval(() => {
        holes.forEach(hole => hole.textContent = '');
        const randomHole = holes[Math.floor(Math.random() * holes.length)];
        randomHole.textContent = 'mole';
        setTimeout(() => {
            randomHole.textContent = '';
        }, 1500);

    }, 800);
}
holes.forEach(hole => {
    hole.addEventListener('click', () => {
        if (hole.textContent === 'mole') {
            score++;
            scoreDisplay.textContent = score;
            hole.textContent = '';
        }
    });
});

startButton.addEventListener('click', startGame);