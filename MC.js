MCContainer = document.getElementById("mobile-container");
textBoxes = document.querySelectorAll('.textboxes');

const MC = document.querySelectorAll('.MC');
const videoDiv = document.querySelector('.MCvideo');
const mcImage = document.querySelectorAll('.MCimage');
const ARtext = document.getElementById('ARtext');
const AEGtext = document.querySelectorAll('.MCp1AEG');
const GAGtext = document.querySelectorAll('.MCp1GAG');
const slideImage = document.querySelector('.NavigateImage');

const buttonNav = document.querySelectorAll('.openDiv');
const headerButton = document.querySelectorAll('.Header-Button');
const MCSlider = document.querySelector('.MCOthersContent');

const MCOthersClosed = document.querySelector('.othersBeforeOpening');
const MCOthersInfo = document.getElementById('MCOthersInfo');
const MCOthersText = document.querySelectorAll('.MCothersText');
const otherImg = document.querySelectorAll('.img');
const imageSlider = document.querySelector('.image-slider');

const sliderButtonsDiv = document.querySelector('.sliderButtons');
const sliderButtons = document.querySelectorAll('.sliderButton');

let currentMargin = 25;
let imageActive = 0;

// && window.innerWidth <= 500
if (navigator.userAgent.indexOf('Chrome') != -1) {
    document.getElementById('MCLast').style.marginBottom = '15%';
}

sliderButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (index == 0 && imageActive >= 1) {
            console.log('button pressed is ' + button);
            currentMargin += 25;
            imageActive--;

        }
        if (index == 1 && imageActive <= otherImg.length - 2) {
            console.log('button pressed is ' + button);
            currentMargin -= 25;
            imageActive++;

        }

        imageSlider.style.marginLeft = currentMargin + '%';

        toggleImageStyles(); //Image styles plus the corresponding text

        setTimeout(() => {
            MC[4].scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    })
});

function toggleImageStyles() {
    otherImg.forEach((img, imgIndex) => {
        img.classList.remove('otherActive');
        if (imgIndex === imageActive) {
            img.classList.add('otherActive');
        }

        MCOthersText.forEach((text, i) => {
            if (imgIndex === imageActive) {
                text.style.display = i === imageActive ? 'block' : 'none';
            }
        });
    });
}

const MCimageAnimate = document.querySelectorAll('.MCimageAnimate');
let currentIndexImage = 1;

function changeImage() {
    MCimageAnimate.forEach((img, index) => {
        if (index === currentIndexImage) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
    });

    currentIndexImage = (currentIndexImage + 1) % MCimageAnimate.length;
}

setInterval(changeImage, 5000);

buttonNav.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (index == 0) {
            button.classList.toggle('closeDiv');
            headerButton[0].classList.toggle('Header-Button-openDiv');
            button.innerHTML = (button.innerHTML === 'Reveal') ? 'x' : 'Reveal';
            setTimeout(() => {
                MC[1].scrollIntoView({ behavior: 'smooth' });
            }, 100);
            MC[1].classList.toggle('MCClick');
            videoDiv.classList.toggle('video');
            ARtext.style.display = (ARtext.style.display === 'none') ? 'inline-block' : 'none';
        }
        if (index == 1) {
            button.classList.toggle('closeDiv');
            headerButton[1].classList.toggle('Header-Button-openDiv');
            button.innerHTML = (button.innerHTML === 'Reveal') ? 'x' : 'Reveal';
            setTimeout(() => {
                MC[2].scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
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
            button.classList.toggle('closeDiv');
            headerButton[2].classList.toggle('Header-Button-openDiv');
            button.innerHTML = (button.innerHTML === 'Reveal') ? 'x' : 'Reveal';
            setTimeout(() => {
                MC[3].scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
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
        if (index == 3) {
            MCOthersClosed.style.display = (MCOthersClosed.style.display === 'none') ? 'flex' : 'none';
            button.classList.toggle('closeDiv');
            headerButton[3].classList.toggle('Header-Button-openDiv');
            button.innerHTML = (button.innerHTML === 'Reveal') ? 'x' : 'Reveal';
            MCOthersInfo.style.display = (MCOthersInfo.style.display === 'none') ? 'flex' : 'none';
            MCSlider.style.display = (MCSlider.style.display === 'none') ? 'flex' : 'none';
            sliderButtonsDiv.style.display = (sliderButtonsDiv.style.display === 'none') ? 'flex' : 'none';

            setTimeout(() => {
                MC[4].scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 100);
            MC[4].classList.toggle('MCClick');
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
