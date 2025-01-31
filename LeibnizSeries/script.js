let interval;
let iterations = 0;
let piApprox = 0;
let running = false;

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const percentage = (piApprox / Math.PI) * 100;
    progressBar.style.width = `${Math.min(100, percentage)}%`;
}

function updateDisplay() {
    document.getElementById('pi-display').innerText = `Approximation of π: ${piApprox.toFixed(6)}`;
    document.getElementById('iterations').innerText = `Iterations: ${iterations}`;
    updateProgressBar();
}

function leibnizFormulaStep() {
    const term = 1 / (2 * iterations + 1);
    piApprox += (iterations % 2 === 0 ? 1 : -1) * term * 4;
    iterations++;
    updateDisplay();
}

function startApproximation() {
    if (!running) {
        running = true;
        interval = setInterval(leibnizFormulaStep, 100);
    }
}

function stopApproximation() {
    clearInterval(interval);
    running = false;
}

function resetApproximation() {
    stopApproximation();
    iterations = 0;
    piApprox = 0;
    updateDisplay();
    document.getElementById('progress-bar').style.width = '0%';
}

window.onload = () => {
    updateDisplay();
};





function createFallingEmoji() {
    const emojiElement = document.createElement('span');
    emojiElement.className = 'emoji';
    emojiElement.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    const randomLeft = Math.floor(Math.random() * 100);
    emojiElement.style.left = randomLeft + 'vw';
    emojiElement.style.animationDuration = 3 + Math.random() * 4 + 's';
    emojiContainer.appendChild(emojiElement);
    setTimeout(() => {
        emojiContainer.removeChild(emojiElement);
    }, 10000);
}

setInterval(createFallingEmoji, 450);


const emojiContainer = document.getElementById('emoji-container');
const emojis = ['π'];






