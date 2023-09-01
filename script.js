let bente = false;
var textRight = document.querySelector(".p1");
var header = document.getElementById("header");

var images = document.querySelectorAll(".image");
var video = document.querySelector(".video");

const home = document.getElementById("home");
const AR = document.getElementById("AR");
const Defensie = document.getElementById("DF");
const GAG = document.getElementById("Climate");
const Other = document.getElementById("Other");
const contact = document.getElementById("contact");

const left = document.getElementById("left");
const right = document.getElementById("right");

const text = document.getElementById("my-work-right");
const media = document.getElementById("my-work-left");

const buttons = document.querySelectorAll('.button');

let moveOut = setInterval(2000);
let moveIn = setInterval(2000);

let originalLeft = parseFloat(left.style.left) || 1;
let originalRight = parseFloat(right.style.left) || 49;

let moved = false;
let moveOnce = 0;


document.addEventListener('DOMContentLoaded', () => {

    text.addEventListener('mouseover', () => {

        if (moveOnce == 1) {
            clearInterval(moveIn);
            moveDivsBack();
        }
    })

    media.addEventListener('mouseover', () => {
        if (moveOnce == 1) {
            clearInterval(moveIn);
            moveDivsBack();
        }
    })

    buttons.forEach(button => {
        const buttonIndex = button.getAttribute('data-button-index');
        const originalText = button.getAttribute('data-original-text');

        button.addEventListener('mouseover', () => {
            clearInterval(moveOut);
            if (moveOnce == 0) {
                moveDivs();
            }

            button.innerHTML = getButtonText(buttonIndex);
        });

        button.addEventListener('mouseleave', () => {
            // clearInterval(moveIn);
            // if (move) {
            //     setTimeout(moveDivsBack, 200);
            // }

            button.innerHTML = originalText;
        })

        button.addEventListener('click', () => {
            document.querySelector('.special')?.classList.remove('special');
            button.classList.add('special');

            // Get the corresponding index for the clicked button


            // Update the textRight element based on the button's index
            textRight.innerHTML = getPageText(buttonIndex);
        });
    });

});

function moveDivs() {
    moveOnce = 1;
    let currentPositionLeft = originalLeft;
    let targetPositionLeft = originalLeft - (0.002 * left.offsetWidth); // Move 'left' element in the opposite direction
    let currentPositionRight = originalRight;
    let targetPositionRight = originalRight + (0.002 * right.offsetWidth); // Move 'right' element to the right

    moveIn = setInterval(() => {

        if (currentPositionLeft <= targetPositionLeft) { // Check if currentPosition is less than or equal to targetPosition for 'left'
            clearInterval(moveIn); // Use 'moveIn' instead of 'moveInterval'

        } else {
            currentPositionLeft -= 0.08; // Decrement currentPosition for 'left'
            left.style.left = currentPositionLeft + "%"; // Update the 'left' property for 'left' using percentages
        }

        if (currentPositionRight >= targetPositionRight) { // Check if currentPosition is greater than or equal to targetPosition for 'right'
            clearInterval(moveIn); // Use 'moveIn' instead of 'moveInterval'

        } else {
            currentPositionRight += 0.08; // Increment currentPosition for 'right'
            right.style.left = currentPositionRight + "%"; // Update the 'left' property for 'right' using percentages
        }

    }, 10);
}

function moveDivsBack() {

    moveOnce = 0;
    let currentPositionLeft = parseFloat(left.style.left) || 0; // Get the current left position as a percentage
    let targetPositionLeft = originalLeft; // Move 'left' element back to its original position
    let currentPositionRight = parseFloat(right.style.left) || 0; // Get the current left position as a percentage
    let targetPositionRight = originalRight; // Move 'right' element back to its original position

    moveBack = setInterval(() => {

        if (currentPositionLeft >= targetPositionLeft) { // Check if currentPosition is greater than or equal to targetPosition for 'left'
            clearInterval(moveBack);

        } else {
            currentPositionLeft += 0.1; // Increment currentPosition for 'left'
            left.style.left = currentPositionLeft + "%"; // Update the 'left' property for 'left'
        }

        if (currentPositionRight <= targetPositionRight) { // Check if currentPosition is less than or equal to targetPosition for 'right'
            clearInterval(moveBack);

        } else {
            currentPositionRight -= 0.1; // Decrement currentPosition for 'right'
            right.style.left = currentPositionRight + "%"; // Update the 'left' property for 'right'
        }

    }, 10);


}

function getButtonText(buttonIndex) {
    switch (buttonIndex) {
        case '0':
            return "Home";
        case '1':
            return "AR";
        case '2':
            return "Defence";
        case '3':
            return "Climate";
        case '4':
            return "Mission";
        case '5':
            return "Contact";

        default:
            return "";
    }
}

// Function to get corresponding text for each button index
function getPageText(buttonIndex) {
    switch (buttonIndex) {
        case '0':
            changeHome();
            header.innerHTML = "Welcome!";
            return "My name is Daan Donkers, and I'm a junior Interaction Designer with a very broad interest in the media & tech world! Please take a look at my work.<br><br>* <b>Specialization</b>: Game Design & Technology<br>* <b>Minor</b>: Transmedia Design & Storytelling<br><br><i>If you click on the prism, the background color will change. Change it according to your liking.</i><br><br><u>Email</u>: daan.donkers@hotmail.nl";

        case '1':
            ARBook();
            header.innerHTML = "AR-Photobook";
            return "<b>What is it?</b><br>An AR Photobook with personalised minigames and messages for my girlfriend, made with Unity and ARCore.<br><br><b>The story</b><br>This photobook is no ordinary book. It contains 4 special pictures, that each have a 'hidden star'. Each star represents a memory I hold dear with my girlfriend. Moreover, each star has a fitting minigame that unlocks a special thanks from me to her after completion. <br><br><b>Why this book?</b><br>My girlfriend loves photography. Her favorite song is 'Yellow' from Coldplay. And I want to show in 4 sentences how much I appreciate her. Together with my Unity skills and creative mind, I wanted to do something special for our 2nd anniversary.";
        case '2':
            changeDefence();
            header.innerHTML = "Autism Experience Game";
            return "<b>What is it?</b><br>An AR Photobook with personalised minigames and messages for my girlfriend, made with Unity and ARCore.<br><br><b>The story</b><br>This photobook is no ordinary book. It contains 4 special pictures, that each have a 'hidden star'. Each star represents a memory I hold dear with my girlfriend. Moreover, each star has a fitting minigame that unlocks a special thanks from me to her after completion. <br><br><b>Why this book?</b><br>My girlfriend loves photography. Her favorite song is 'Yellow' from Coldplay. And I want to show in 4 sentences how much I appreciate her. Together with my Unity skills and creative mind, I wanted to do something special for our 2nd anniversary.";
        case '3':
            changeGAG();
            return "Text for button 4";
        case '4':
            Others();
            return "Text for button 5";
        case '5':

            return "Text for button 6";
        // Add more cases for other button indexes
        default:
            return "";
    }
}

//Change Content

function changeHome() {

    media.style.justifyContent = "center";
    media.style.alignItems = "center";
    media.style.flexDirection = "";
    media.style.flexWrap = ""; // Allow images to wrap to the next row ?????????????????!!!!!!!!!!!!!!!!!!??????????????

    images.forEach((image, index) => {
        if (index === 0) {
            image.style.display = "inline"; // Activate the second image
            image.style.width = "";
        } else {
            image.style.display = "none"; // Deactivate other images
        }
    });

    video.src = "";
    video.style.display = "none";
}

function changeDefence() {

    media.style.justifyContent = "center";
    media.style.alignItems = "center";
    media.style.flexDirection = "";
    media.style.flexWrap = ""; // Allow images to wrap to the next row

    images.forEach((image, index) => {
        if (index === 1) {
            image.style.display = "inline"; // Activate the second image
            image.style.width = "";
        } else {
            image.style.display = "none"; // Deactivate other images
        }
    });

    video.src = "";
    video.style.display = "none";
}

function changeGAG() {

    media.style.justifyContent = "center";
    media.style.alignItems = "center";
    media.style.flexDirection = "";
    media.style.flexWrap = ""; // Allow images to wrap to the next row

    header.innerHTML = "Welcome!";
    textRight.innerHTML = "<p> My name is Daan Donkers, and I'm a junior Interaction Designer with a very broad interest in the media & tech world! Please take a look at my work.<br><br><i>If you click on the prism, the background color will change. Change it according to your liking.</i><h1>";
    //Add the 6 buttons. Each button will get a ++number or a bool false or true that changes the image to the correct image.

    images.forEach((image, index) => {
        if (index === 2) {
            image.style.display = "inline"; // Activate the second image
        } else {
            image.style.display = "none"; // Deactivate other images
        }
    });


    video.src = "";
    video.style.display = "none";
}


function ARBook() {

    media.style.justifyContent = "center";
    media.style.alignItems = "center";
    media.style.flexDirection = "";
    media.style.flexWrap = ""; // Allow images to wrap to the next row




    images.forEach((image) => {
        image.style.display = "none";
    });


    // image.src = "";
    //Add the 6 buttons. Each button will get a ++number or a bool false or true that changes the image to the correct image.
    video.src = "./BenteDaanVid1.mp4";

    video.style.display = "initial";
    video.play();
    video.loop = true;

    video.addEventListener("mouseover", function () {
        video.pause();
    });

    video.addEventListener("mouseleave", function () {

        video.play();
    })

}


function Others() {
    header.innerHTML = "Other";
    textRight.innerHTML = "";

    images.forEach((image, index) => {
        if (index >= 3 && index <= 6) {
            image.style.display = "inline"; // Activate the second image
            image.style.width = "45%";

            image.addEventListener("mouseover", () => {
                textRight.innerHTML = getImageText(index);
            });

            image.addEventListener("mouseleave", () => {
                textRight.innerHTML = "To the left are some other school and passion projects<br><i>Hover over an image to show what it is about</i>";
            });

        } else {
            image.style.display = "none"; // Deactivate other images
        }
    });


    // Modify CSS properties

    media.style.justifyContent = "";
    media.style.alignItems = "flex-start";
    media.style.flexDirection = "row";
    media.style.flexWrap = "wrap"; // Allow images to wrap to the next row

    video.src = "";


}

// Function to get corresponding text for each image
function getImageText(index) {
    switch (index) {
        case 3:
            return "Text for image 3";
        case 4:
            return "Text for image 4";
        case 5:
            return "Text for image 5";
        case 6:
            return "Text for image 6";
        default:
            return "";
    }
}
