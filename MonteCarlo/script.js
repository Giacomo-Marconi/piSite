const canvas = document.getElementById("monteCarloCanvas");
const emojiContainer = document.getElementById('emoji-container');
const ctx = canvas.getContext("2d");
const emojis = [ 'π'];
const radius = 200;

let totalPoints = 0;
let pointsInsideCircle = 0;
let intervalId;



function drawPoint(x, y, isInside) {
    ctx.beginPath();
    ctx.arc(x, y, 3, 0, Math.PI * 2);
    ctx.fillStyle = isInside ? "#2ecc71" : "#e74c3c";
    ctx.fill();
}

function generateRandomPoint() {
    const x = 5 + Math.random() * 400;
    const y = 5 + Math.random() * 400;
    const dist = Math.pow(x - 205, 2) + Math.pow(y - 205, 2);
    const isIn = dist <= Math.pow(radius, 2);
    drawPoint(x, y, isIn);
    totalPoints++;
    if (isIn) pointsInsideCircle++;
    updatePiEstimate();
}

function updatePiEstimate() {
    const piEstimate = (4 * pointsInsideCircle) / totalPoints;
    document.getElementById("piEstimate").textContent = `Stima ➞ π: ${piEstimate.toFixed(6)}`;
}

function resetSimulation() {
    clearInterval(intervalId);
    intervalId = null;
    totalPoints = 0;
    pointsInsideCircle = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById("piEstimate").textContent = "Stima corrente di π: -";
    drawCircle();
}

function drawCircle() {
    ctx.beginPath();
    ctx.arc(canvas.width/2, canvas.width/2, radius, 0, Math.PI * 2);
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 5;
    ctx.stroke();
    ctx.fillStyle = "#fff";
    ctx.fill();
}

function startSimulation() {
    if (intervalId) return;
    intervalId = setInterval(generateRandomPoint, 30);
    const startB = document.getElementById("startB");
    startB.textContent = "Stop Simulazione";
    startB.onclick = stopSimulation;
}

function stopSimulation() {
    clearInterval(intervalId);
    intervalId = null;
    const startB = document.getElementById("startB");
    startB.textContent = "Riprendi Simulazione";
    startB.onclick = startSimulation;
}




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



drawCircle();














