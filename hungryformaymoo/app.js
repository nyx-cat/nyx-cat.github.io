const MAX_BITES = 6;

let titleText;

let image;

let slurpSound;

let bites = 0;

const bite = () => {
    image.src = `assets/maymoo${Math.min(bites + 1, MAX_BITES)}.png`;

    if (bites === MAX_BITES - 1) {
        slurpSound.play();
        
        const burpSound = new Audio('assets/burp.mp3');
        titleText.innerHTML = "Full from maymoo?"
        setTimeout(() => { burpSound.play(); }, 1000);
    }
    else if (bites < MAX_BITES) {
        biteSound = new Audio('assets/bite.mp3');
        biteSound.play();
    }
    else {
        // Allows for synchronous sound
        const burpSound = new Audio('assets/burp.mp3');
        burpSound.play();
    }

    bites++;
}

const init = () => {
    bites = 0;

    titleText = document.querySelector('#header');

    image = document.querySelector('#maymoo');
    image.addEventListener('click', bite);

    slurpSound = new Audio('assets/slurp.mp3');
    slurpSound.load();
}
window.onload = init;