var MC = document.querySelectorAll('.MC');
const videoDiv = document.querySelector('.MCvideo');
const mcImage = document.querySelectorAll('.MCimage');
const ARtext = document.getElementById('ARtext');
const AEGtext = document.querySelectorAll('.MCp1AEG');
const GAGtext = document.querySelectorAll('.MCp1GAG');
const slideImage = document.querySelector('.NavigateImage');

const buttonNav = document.querySelectorAll('.openDiv');

let clickCounter = 0;

buttonNav.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (index == 0) {
            button.innerHTML = (button.innerHTML === 'Reveal') ? 'Close' : 'Reveal';
            MC[1].scrollIntoView({ behavior: 'smooth' });
            MC[1].classList.toggle('MCClick');
            videoDiv.classList.toggle('video');
            ARtext.style.display = (ARtext.style.display === 'none') ? 'inline-block' : 'none';
        }
        if (index == 1) {
            button.innerHTML = (button.innerHTML === 'Reveal') ? 'Close' : 'Reveal';
            MC[2].scrollIntoView({ behavior: 'smooth' });
            MC[2].classList.toggle('MCClick');
            mcImage[1].classList.toggle('ImageGrow');

            AEGtext.forEach((text) => {
                text.style.display = (text.style.display === 'none') ? 'block' : 'none';
            });

            for (let i = 2; i <= 7; i++) {
                mcImage[i].style.display = (mcImage[i].style.display === 'none') ? 'block' : 'none';
                mcImage[i].classList.toggle('ImageGrow');
            }
        }
        if (index == 2) {
            button.innerHTML = (button.innerHTML === 'Reveal') ? 'Close' : 'Reveal';
            MC[3].scrollIntoView({ behavior: 'smooth' });
            MC[3].classList.toggle('MCClick');
            mcImage[8].classList.toggle('ImageGrow');

            GAGtext.forEach((text) => {
                text.style.display = (text.style.display === 'none') ? 'block' : 'none';
            });

            for (let i = 9; i <= 11; i++) {
                mcImage[i].style.display = (mcImage[i].style.display === 'none') ? 'block' : 'none';
                mcImage[i].classList.toggle('ImageGrow');
            }
            //If it is 'none' (?) then it is changed to inline-block. Else it is or changes to 'none'.
        }
    });
});

glitchText = document.querySelector('.glitchText');
const words = ["games", "apps", "UX/ UI", "websites", "things"];
let currentIndex = 0;

glitchTextMC = document.querySelector('.glitchTextMC');
const wordsMC = ["games", "apps", "UX/ UI", "websites", "things"];
let currentIndexMC = 0;


setInterval(() => {
    if (textBoxes[0].style.display != 'none' && window.innerWidth > window.innerHeight) {

        glitchText.style.animation = 'none';
        glitchText.offsetHeight; /* Trigger reflow */
        glitchText.style.animation = null;

        glitchText.style.animation = 'glitch 1s infinite';

        currentIndex = (currentIndex + 1) % words.length;
        glitchText.textContent = words[currentIndex];
        // console.log("The current text is " + glitchText.textContent);

    } else if ((window.innerWidth < window.innerHeight)) {

        glitchTextMC.style.animation = 'none';
        glitchTextMC.offsetHeight; /* Trigger reflow */
        glitchTextMC.style.animation = null;

        glitchTextMC.style.animation = 'glitch 1s infinite';

        currentIndexMC = (currentIndexMC + 1) % wordsMC.length;
        glitchTextMC.textContent = wordsMC[currentIndexMC];
        // console.log("The current MCtext is " + glitchTextMC.textContent);

    }
}, 2000);