const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const scoreElement = document.querySelector('.score');

let score = 0;
let isGameOver = false;

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const updateScore = () => {
    if (!isGameOver) {
        score++;
        scoreElement.textContent = `Score: ${score}`;
    }
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    console.log(`Pipe: ${pipePosition}, Mario: ${marioPosition}`);

    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = 'image/Mario over game.png'; 
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        isGameOver = true; 
        clearInterval(loop); 
        clearInterval(scoreInterval); 
    }
}, 10);


const scoreInterval = setInterval(updateScore, 1000);

document.addEventListener('keydown', jump);