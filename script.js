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

// Preload the video when the page loads
window.addEventListener("load", preloadVideo);

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
            media.scrollTop = 0;

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
            return "Other";
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
            return "My name is Daan Donkers, and I'm a junior Interaction Designer with a very broad interest in the media & tech world! Please take a look at some of my work!<br><br>If you want to know more about my work, or just anything else, feel free to contact me!<br><br><u>Email</u>: daan.donkers@hotmail.nl<br><br>* <b>Specialization</b>: Game Design & Technology<br>* <b>Minor</b>: Transmedia Design & Storytelling<br><br><br><br><i>If you click on the prism, the background color will change. Change it according to your liking.</i>";
        case '1':
            ARBook();
            header.innerHTML = "AR-Photobook";
            return "<b>What is it?</b><br>An AR Photobook with personalised minigames and messages for my girlfriend, made in Unity with ARCore, and Vuforia.<br><br><b>The story</b><br>This photobook is no ordinary book. It contains 4 special pictures, that each have a 'hidden star'. Each star represents a memory I hold dear with my girlfriend. Moreover, each star has a fitting minigame that unlocks a special thanks from me to her after completion. <br><br><b>Why this book?</b><br>My girlfriend likes photography. Her favorite song is 'Yellow' from Coldplay. And I want to show in 4 sentences how much I appreciate her. Together with my Unity skills and creative mind, I wanted to do something special for our 2nd anniversary.<br><br><i>Hover over the video to pause.</i>";
        case '2':
            changeDefence();
            header.innerHTML = "Autism Experience Game";
            return "<i>Hover over an image to show what it is about.</i>";
        case '3':
            changeGAG();
            header.innerHTML = "Gamble against God";
            return "<i>Hover over an image to show what it is about.</i>";
        case '4':
            Others();
            return "To the left are some other school and passion projects<br><i>Hover over an image to show what it is about.</i>";
        default:
            return "";
    }
}

//Change Content

function changeHome() {

    video.src = "";
    video.style.display = "none";

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
}

function changeDefence() {
    video.src = "";
    video.style.display = "none";

    images.forEach((image, index) => {
        if (index >= 1 && index <= 7) {
            image.style.display = "inline"; // Activate the second image
            image.classList.add("scrollindication");

            image.addEventListener("mouseover", () => {
                textRight.innerHTML = getImageText(index, 'defence');
                images.forEach((img) => {
                    img.classList.remove("scrollindication");
                })
            });

        } else {
            image.style.display = "none"; // Deactivate other images
        }

        // text.addEventListener("mouseover", () => {
        //     image.classList.add("scrollindication");
        // });

    });

    media.style.justifyContent = "";
    media.style.alignItems = "flex-start";
    media.style.flexDirection = "row";
    media.style.flexWrap = "wrap"; // Allow images to wrap to the next row


}

// Function to get corresponding text for each image

function changeGAG() {
    video.src = "";
    video.style.display = "none";

    images.forEach((image, index) => {
        if (index >= 8 && index <= 11) {
            image.style.display = "inline"; // Activate the second image
            image.classList.add("scrollindication");

            image.addEventListener("mouseover", () => {
                textRight.innerHTML = getImageText(index, 'GAG');
                images.forEach((img) => {
                    img.classList.remove("scrollindication");
                    console.log("Hovering over image", index);
                })
            });

        } else {
            image.style.display = "none"; // Deactivate other images
        }

    });

    media.style.justifyContent = "";
    media.style.alignItems = "flex-start";
    media.style.flexDirection = "row";
    media.style.flexWrap = "wrap";

    images[8].addEventListener("mouseover", () => {
        images[8].src = "./BestProjects/LogoFinal-Green.png";
    });

    images[8].addEventListener("mouseleave", () => {
        images[8].src = "./BestProjects/LogoFinal-Blue.png";
    });

}

// function preloadVideo() {
//     var preloadVideo = document.createElement("video");
//     preloadVideo.src = "./Hobby/BenteDaanVid1.mp4";
//     preloadVideo.preload = "auto";
//     preloadVideo.load();
//     preloadVideo.style.display = "none";
//     document.body.appendChild(preloadVideo);
// }

function preloadVideo() {
    // Load the video in the background
    video.src = "./Hobby/BenteDaanVid1.mp4";
    video.load(); // This will start loading the video

    // Set a poster image as a placeholder
    // video.poster = "./BestProjects/tafels.png";

    // Add an event listener to start playing the video when it's ready
    video.addEventListener("canplaythrough", function () {
        video.play();
    });

    // Add event listeners for pausing and resuming the video on hover
    video.addEventListener("mouseover", function () {
        video.pause();
    });

    video.addEventListener("mouseleave", function () {
        video.play();
    });
}


function ARBook() {
    media.style.justifyContent = "center";
    media.style.alignItems = "center";
    media.style.flexDirection = "";
    media.style.flexWrap = "";

    images.forEach((image) => {
        image.style.display = "none";
    });

    video.src = "./Hobby/BenteDaanVid1.mp4";
    video.style.display = "initial";

    video.play();
    video.loop = true;
    // Once the video is loaded, play it
    // video.oncanplaythrough = function () {

    // };
    video.addEventListener("mouseover", function () {
        video.pause();
    });

    video.addEventListener("mouseleave", function () {
        video.play();
    });
}

function Others() {
    header.innerHTML = "Other";
    textRight.innerHTML = "";

    images.forEach((image, index) => {
        if (index >= 12 && index <= 15) {
            image.style.display = "inline";
            image.style.width = "45%";

            image.addEventListener("mouseover", () => {
                textRight.innerHTML = getImageText(index, 'other');
                images.forEach((img) => {
                    img.classList.remove("scrollindication");
                    console.log("Hovering over image", index);
                })
            });

            image.addEventListener("mouseleave", () => {
                textRight.innerHTML = "To the left are some other school and passion projects<br><i>Hover over an image to show what it is about</i>";
            });

        } else {
            image.style.display = "none";
        }
    });

    media.style.justifyContent = "";
    media.style.alignItems = "flex-start";
    media.style.flexDirection = "row";
    media.style.flexWrap = "wrap"; // Allow images to wrap to the next row

    video.src = "";

}

// Function to get corresponding text for each image
function getImageText(index, category) {
    switch (category) {
        case 'defence':
            switch (index) {
                // case 0:
                //     return "My name is Daan Donkers, and I'm a junior Interaction Designer with a very broad interest in the media & tech world! Please take a look at some of my work!<br><br>If you want to know more about my work, or just anything else, feel free to contact me!<br><br><u>Email</u>: daan.donkers@hotmail.nl<br><br>* <b>Specialization</b>: Game Design & Technology<br>* <b>Minor</b>: Transmedia Design & Storytelling<br><br><br><br><i>If you click on the prism, the background color will change. Change it according to your liking.</i>";
                case 1:
                    return "<b>What is it?</b><br>A WebGL game in which the user experiences multiple different situations, through the eyes of different people with autism. The game is based on the stories and experiences of a variety of Defence personnel with autism. It is made in Unity and used by our military.<br><br><b>The story</b><br>The Autism Experience Game is a discovery game focused on the differences in perception between people with and without autism. Play unique scenarios that allow you to experience the contrast between those two worlds. Reflect on your experiences, and learn how to navigate them.<br><br><b>Why this game?</b><br>People with autism are at a high risk of experiencing burnout, depression, and workplace absenteeism. Communication problems (partly caused by a misunderstanding of autism) can lead to conflicts at work. Colleagues with autism within the military often feel misunderstood. Their peers express that they do not know how to handle certain situations.<br><br><b>After completion</b><br>The game was a succes, and caused for many collegues to have a better understanding on the strenghts and difficulties autism can give someone, but also on how to put those strenghts to good use. The game also helped some people with autism to better talk about their insecurities or problems, and it even played a role in getting our Ministry of Defence its own Autism Embassy.<br><br><b>My job</b> (first internship)<br>* Concept developer<br>* UX + UI Designer/ Developer<br>* Researcher<br>* Lead<br><br>";
                case 2:
                    return "Home menu. Choose a scenario.";
                case 3:
                    return "Play as someone with autism. You have no controle over the situation. This is due to internal, and external factors that make it almost impossible for the player to play the game correctly.";
                case 4:
                    return "There is no right answer to questions that come your way.";
                case 5:
                    return "You learned from the stressfull experience(s) by playing the game in his or her shoes.";
                case 6:
                    return "You know what you need, to make the situation work for you.";
                case 7:
                    return "You reflect on the experience and learn about the strengths and weaknesses of your collegue with autism.";
                default:
                    return "";
            }
        case 'GAG':
            switch (index) {
                case 8:
                    return "<b>What is it?</b><br>A WebGL game in which the user experiences multiple different situations, through the eyes of different people with autism. The game is based on the stories and experiences of a variety of Defence personnel with autism. It is made in Unity and used by our military.<br><br><b>The story</b><br>The Autism Experience Game is a discovery game focused on the differences in perception between people with and without autism. Play unique scenarios that allow you to experience the contrast between those two worlds. Reflect on your experiences, and learn how to navigate them.<br><br><b>Why this game?</b><br>People with autism are at a high risk of experiencing burnout, depression, and workplace absenteeism. Communication problems (partly caused by a misunderstanding of autism) can lead to conflicts at work. Colleagues with autism within the military often feel misunderstood. Their peers express that they do not know how to handle certain situations.<br><br><b>After completion</b><br>The game was a succes, and caused for many collegues to have a better understanding on the strenghts and difficulties autism can give someone, but also on how to put those strenghts to good use. The game also helped some people with autism to better talk about their insecurities or problems, and it even played a role in getting our Ministry of Defence its own Autism Embassy.<br><br><b>My job</b> (first internship)<br>* Concept developer<br>* UX + UI Designer/ Developer<br>* Researcher<br>* Lead<br><br>";
                case 9:
                    return "Home menu. Choose a scenario.";
                case 10:
                    return "Play as someone with autism. You have no controle over the situation. This is due to internal, and external factors that make it almost impossible for the player to play the game correctly.";
                case 11:
                    return "There is no right answer to questions that come your way.";
                default:
                    return "";
            }
        case 'other':
            switch (index) {
                case 12:
                    return "Text for image 3";
                case 13:
                    return "Text for image 4";
                case 14:
                    return "Text for image 5";
                case 15:
                    return "Text for image 6";
                default:
                    return "";
            }
    }

}


// function ARBook() {
//     media.style.justifyContent = "center";
//     media.style.alignItems = "center";
//     media.style.flexDirection = "";
//     media.style.flexWrap = "";

//     images.forEach((image) => {
//         image.style.display = "none";
//     });

//     video.src = "./Hobby/BenteDaanVid1.mp4";

//     video.style.display = "initial";
//     video.play();
//     video.loop = true;

//     video.addEventListener("mouseover", function () {
//         video.pause();
//     });

//     video.addEventListener("mouseleave", function () {

//         video.play();
//     })

// }