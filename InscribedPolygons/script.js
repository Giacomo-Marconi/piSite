const canvas = document.getElementById('canvas');
const emojiContainer = document.getElementById('emoji-container');
const ctx = canvas.getContext('2d');

const radius = canvas.width / 2 - 10;
let sides = 6;

let interval;

const emojis = ['π'];

function drawCircle() {
    ctx.beginPath();
    ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.stroke();
}

function drawPolygon(sides) {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const angleIncrement = (2 * Math.PI) / sides;
    ctx.beginPath();
    for (let i = 0; i <= sides; i++) {
        const angle = i * angleIncrement;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);
        if (i === 0) {
            ctx.moveTo(x, y);
        } else {
            ctx.lineTo(x, y);
        }
    }
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.stroke();
    const perimeter = sides * 2 * radius * Math.sin(Math.PI / sides);
    const piApprox = perimeter / (2 * radius);
    document.getElementById('polygon-info').innerHTML = `Number of Sides: ${sides} | Approximation of &pi;: ${piApprox.toFixed(6)}`;
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle();
    drawPolygon(sides);
}

function startAnim() {
    interval = setInterval(increaseSides, 100);
    const b = document.getElementById('anim-control');
    b.textContent = 'Stop Animation';
    b.onclick = stopAnim;
}

function stopAnim() {
    clearInterval(interval);
    interval = null;
    const b = document.getElementById('anim-control');
    b.textContent = 'Start Animation';
    b.onclick = startAnim;
}

function increaseSides() {
    sides += 2;
    draw();
}

function decreaseSides() {
    if (sides > 6) {
        sides -= 2;
        draw();
    }
}

window.onload = draw;


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






