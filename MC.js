var MC = document.querySelectorAll('.MC');

glitchActive = true;

MC.forEach(div => {
    div.addEventListener("click", () => {
        div.style.transition = 'flex-direction 5s';

        div.style.backgroundColor = 'red';
        div.style.flexDirection = 'column';
    })
});


glitchText = document.querySelector('.glitchText');
const words = ["games", "apps", "UX/ UI", "websites", "things"];
let currentIndex = 0;

glitchTextMC = document.querySelector('.glitchTextMC');
const wordsMC = ["games", "apps", "UX/ UI", "websites", "things"];
let currentIndexMC = 0;


setInterval(() => {
    if (textBoxes[0].style.display != 'none' && screen.width > screen.height) {

        glitchText.style.animation = 'none';
        glitchText.offsetHeight; /* Trigger reflow */
        glitchText.style.animation = null;

        glitchText.style.animation = 'glitch 1s infinite';

        currentIndex = (currentIndex + 1) % words.length;
        glitchText.textContent = words[currentIndex];
        // console.log("The current text is " + glitchText.textContent);

    } else if ((screen.width < screen.height)) {

        glitchTextMC.style.animation = 'none';
        glitchTextMC.offsetHeight; /* Trigger reflow */
        glitchTextMC.style.animation = null;

        glitchTextMC.style.animation = 'glitch 1s infinite';

        currentIndexMC = (currentIndexMC + 1) % wordsMC.length;
        glitchTextMC.textContent = wordsMC[currentIndexMC];
        // console.log("The current MCtext is " + glitchTextMC.textContent);

    }
}, 2000);


