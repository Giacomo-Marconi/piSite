const emojis = [ 'π'];
const emojiContainer = document.getElementById('emoji-container');

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


const facts = [
    "Il Pi Greco è un numero irrazionale: non può essere scritto come una frazione.",
    "L'approssimazione 22/7 viene spesso utilizzata al posto di π.",
    "La celebrazione del Pi Day si svolge il 14 marzo.",
    "Il record per la memorizzazione di cifre di π è oltre 70.000 cifre!",
    "Archimede è stato uno dei primi a calcolare un'approssimazione precisa di π.",
    "Esistono algoritmi moderni che calcolano miliardi di cifre di π.",
];

function showFact() {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    document.getElementById("piFact").textContent = randomFact;
}

document.addEventListener("keydown", (event) => {
    if (event.key === "p") {
        showFact();
    }
});




