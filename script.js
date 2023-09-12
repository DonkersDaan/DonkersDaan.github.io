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

text = document.getElementById("my-work-right");
media = document.getElementById("my-work-left");

const buttons = document.querySelectorAll('.button');
var videoYT = document.getElementById('BottleStop');


var mobile = document.getElementById("mobile-container");




// var scrollDeactivate = document.querySelector('.deactivateProgression');

let moveOut = setInterval(2000);
let moveIn = setInterval(2000);

let originalLeft = parseFloat(left.style.left) || 1;
let originalRight = parseFloat(right.style.left) || 49;

let moved = false;
let moveOnce = 0;

window.addEventListener('load', checkScreenOrientation);
window.addEventListener('resize', checkScreenOrientation);

// function checkScreenOrientation() {
// if (window.innerWidth > window.innerHeight) { // Check the current orientation
// Code to execute when in landscape orientation
console.log('Screen is in landscape orientation');
// Preload the video when the page loads
window.addEventListener("load", preloadVideo); //            Move outside of this function, along with the preloadVideo function

// document.addEventListener('DOMContentLoaded', () => {

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

// });

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
            return "<b>What is it?</b><br>An AR Photobook with personalised minigames and messages for my girlfriend, made in Unity with ARCore, and Vuforia.<br><br><b>The story</b><br>This photobook is no ordinary book. It contains 4 special pictures, that each have a 'hidden star'. Each star represents a memory I hold dear with my girlfriend. Moreover, each star has a fitting minigame that unlocks a special thanks from me to her after completion. <br><br><b>Why this book?</b><br>My girlfriend likes photography. Her favorite song is 'Yellow' from Coldplay. And I want to show in 4 sentences how much I appreciate her. Together with my Unity skills and creative mind, I wanted to do something special for our 2nd anniversary.<br><br><i>Hover over the video to play.</i>";
        case '2':
            changeDefence();
            header.innerHTML = "Autism Experience Game";
            return "<i><b>Scroll</b>, and <b>hover</b> over an image to show what it is about.</i>";
        case '3':
            changeGAG();
            header.innerHTML = "Gamble against God";
            return "<i><b>Scroll</b>, and <b>hover</b> over an image to show what it is about.</i>";
        case '4':
            Others();
            return "To the left are some other school and passion projects<br><i><b>Scroll</b>, and <b>hover</b> over an image to show what it is about.</i>";
        default:
            return "";
    }
}

//Change Content

function changeHome() {
    scrollProgressLeft.style.display = "none";
    scrollProgressText.style.display = "none";
    videoYT.src = "";
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
    scrollProgressLeft.style.display = "inline";
    scrollProgressText.style.display = "inline";
    videoYT.src = "";
    video.src = "";
    video.style.display = "none";

    images.forEach((image, index) => {
        if (index >= 1 && index <= 7) {
            image.style.display = "inline"; // Activate the second image
            // image.classList.add("scrollindication");

            image.addEventListener("mouseover", () => {
                textRight.innerHTML = getImageText(index, 'defence');
                // images.forEach((img) => {
                //     img.classList.remove("scrollindication");
                // })
            });

            image.addEventListener("mouseleave", () => {
                textRight.innerHTML = "<i><b>Scroll</b>, and <b>hover</b> over an image to show what it is about.</i>";
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
    scrollProgressLeft.style.display = "inline";
    scrollProgressText.style.display = "inline";
    videoYT.src = "";
    video.src = "";
    video.style.display = "none";

    images.forEach((image, index) => {
        if (index >= 8 && index <= 11) {
            image.style.display = "inline"; // Activate the second image
            // image.classList.add("scrollindication");

            image.addEventListener("mouseover", () => {
                textRight.innerHTML = getImageText(index, 'GAG');
                // images.forEach((img) => {
                //     img.classList.remove("scrollindication");
                //     console.log("Hovering over image", index);
                // })
            });

            image.addEventListener("mouseleave", () => {
                textRight.innerHTML = "<i><b>Scroll</b>, and <b>hover</b> over an image to show what it is about.</i>";
            });

        } else {
            image.style.display = "none"; // Deactivate other images
        }

    });

    media.style.justifyContent = "";
    media.style.alignItems = "flex-start";
    media.style.flexDirection = "row";
    media.style.flexWrap = "wrap";

    // images[8].addEventListener("mouseover", () => {
    //     images[8].src = "./BestProjects/LogoFinal-Green.png";
    // });

    // images[8].addEventListener("mouseleave", () => {
    //     images[8].src = "./BestProjects/LogoFinal-Blue.png";
    // });

}

function preloadVideo() {

    // console.log(`Removed 'loading' attribute from image with src: ${image.src}`);
    // Load the video in the background
    video.src = "./Hobby/BenteDaanVid1.mp4";
    // videoYT.load();
    video.load(); // This will start loading the video

    // Set a poster image as a placeholder
    video.poster = "./Hobby/BenteDaanCover.png";

    // const imagesWithLoading = document.querySelectorAll('image[loading="lazy"]');

    video.addEventListener("canplaythrough", function () {
        image.removeAttribute('loading');

        // setTimeout(() => {
        //     images.forEach((image) => {
        //         image.removeAttribute('loading');
        //     });
        // }, 5000);
    });

    video.addEventListener("mouseover", function () {
        video.pause();
    });

    video.addEventListener("mouseleave", function () {
        video.play();
    });
}


function ARBook() {
    scrollProgressLeft.style.display = "none";
    scrollProgressText.style.display = "none";
    videoYT.src = "";
    media.style.justifyContent = "center";
    media.style.alignItems = "end";
    media.style.flexDirection = "";
    media.style.flexWrap = "";

    images.forEach((image) => {
        image.style.display = "none";

    });

    video.src = "./Hobby/BenteDaanVid1.mp4";
    video.style.display = "initial";

    // video.play();
    video.loop = true;
    // Once the video is loaded, play it
    // video.oncanplaythrough = function () {

    // };
    video.addEventListener("mouseover", function () {
        video.play();
    });

    video.addEventListener("mouseleave", function () {
        video.pause();
    });
}

function Others() {
    scrollProgressLeft.style.display = "inline";
    scrollProgressText.style.display = "inline";
    videoYT.src = "https://www.youtube.com/embed/T9aBYG3P2CE?si=pm_LdUQhw4h2iTyF";
    header.innerHTML = "Other";
    textRight.innerHTML = "";

    images.forEach((image, index) => {
        if (index >= 12 && index <= 16) {
            image.style.display = "inline";
            image.style.width = "45%";
            // image.classList.add("scrollindication");
            image.addEventListener("mouseover", () => {
                textRight.innerHTML = getImageText(index, 'other');
                // images.forEach((img) => {
                //     img.classList.remove("scrollindication");
                //     console.log("Hovering over image", index);
                // })
            });

            image.addEventListener("mouseleave", () => {
                header.innerHTML = "Other";
                textRight.innerHTML = "To the left are some other school and passion projects<br><i><b>Scroll</b>, and <b>hover</b> over an image to show what it is about.</i>";
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
    video.style.display = "none";

}

// Function to get corresponding text for each image
function getImageText(index, category) {
    switch (category) {
        case 'defence':
            switch (index) {
                // case 0:
                //     return "My name is Daan Donkers, and I'm a junior Interaction Designer with a very broad interest in the media & tech world! Please take a look at some of my work!<br><br>If you want to know more about my work, or just anything else, feel free to contact me!<br><br><u>Email</u>: daan.donkers@hotmail.nl<br><br>* <b>Specialization</b>: Game Design & Technology<br>* <b>Minor</b>: Transmedia Design & Storytelling<br><br><br><br><i>If you click on the prism, the background color will change. Change it according to your liking.</i>";
                case 1:
                    return "<b>What is it?</b><br>A WebGL game in which the user experiences multiple different situations, through the eyes of different people with autism. The game is based on the stories and experiences of a variety of Defence personnel with autism. It is made in Unity and used by our military.<br><br><b>The story</b><br>The Autism Experience Game is a discovery game focused on the differences in perception between people with and without autism. Play unique scenarios that allow you to experience the contrast between those two worlds. Reflect on your experiences, and learn how to navigate them.<br><br><b>Why this game?</b><br>People with autism are at a high risk of experiencing burnout, depression, and workplace absenteeism. Communication problems (partly caused by a misunderstanding of autism) can lead to conflicts at work. Colleagues with autism within the military often feel misunderstood. Their peers express that they do not know how to handle certain situations.<br><br><b>After completion</b><br>The game was a succes, and caused for many collegues to have a better understanding on the strenghts and difficulties autism can give someone, but also on how to put those strenghts to good use. The game also helped some people with autism to better talk about their insecurities or problems, and it even played a role in getting our Ministry of Defence its own Autism Embassy.<br><br><b>My competences</b> (first internship)<br>* Concept developer<br>* UX + UI Designer/ Developer<br>* Researcher<br>* Lead<br><br>";
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
                    return "<b>What is it?</b><br>A team-based multimedia game in which you gamble with our climate, by making everyday decisions. The goal is to polute and destroy our Earth as fast as possible, by playing 4 different climate-related games.<br>The game consists of physical props, minigames on a tablet, and animations + videofragments on a big screen.<br><br><b>The story</b><br>The players enter a room in which multiple poker-like tables are placed. In teams of 5, they gamble with emmission-coins and try to destroy the Earth as a team. The team who has the most emmision-coins at the end of the game, wins.<br><br><b>Why this game?</b><br>It is a unique approach in the attempt to get the holy grail: long-term behavioural change. My research showed that creating awareness by learning from our everyday harmfull behaviour, actually shocked some testers of the game-MVP. The game triggers you to do the wrong thing, by overstimulating you with rewards (emmission-coins), light and casino-sounds. It serves an important role and has a methaphorical connection to our way of living, as in an addiction. The game starts fun and relatively fast-pased (higly rewarding), but ends in a state where the players get confronted with the consequences of their actions.<br><br><b>After completion</b><br>I finished my ICT education with honors, and my manager was happy with the results. The game was partually delivered as an MPV and prototype.<br><br><b>My competences</b> (final internship)<br>* Concept developer<br>* UX + UI Designer/ Developer<br>* Researcher<br>* Lead<br><br>";
                case 9:
                    return "A sketch of how the room would look like.";
                case 10:
                    return "An sketch of the poker-table. Each poker-table has a Windows-tablet, for playing casino-like minigames.";
                case 11:
                    return "A sketch of the table-system that detects casino-playcards (RFID), it is installed underneath the poker table. Each card unlocks a special minigame, after one of 4 main-games is completed. With this minigame, you can score even more emission-points. I made the system and implemented it into the game, with Arduino IDE and Unity.";
                default:
                    return "";
            }
        case 'other':
            switch (index) {
                case 12:
                    images[12].addEventListener("click", () => {
                        window.open('https://www.redbubble.com/people/DD-sign/shop?asc=u&ref=account-nav-dropdown', '_blank');
                    });
                    header.innerHTML = "RedBubble";
                    return "One of a couple drawings I made for Redbubble.<br><i>Click the image to view my old RedBubble store</i>";
                case 13:
                    header.innerHTML = "BottleStop";
                    return "Bottle Stop was a project done with a five-man team in the second semester: two starting designers (me as well) and three starting technology students. Bottle Stop was created by us, with our mission to reduce plastic waste around the globe.<br><br>We designed bottles with RFID chips on the bottom, that are read by Bottle Stop stations. Only with this reusable bottle, you can buy your favourite drinks or water, at these unmanned stations.<br><br>With our project, we reached the semi-finals of the ICTalent Awards. We even got Paaspop interested in foldable cups with RFID chips and unmanned stations. But because of COVID, the Talent-Awards and our ideas around Paaspop got scrapped off the agenda and we couldn't continue anymore.<br><br>My competences:<br>- CO-Creator<br>- Website designer/developer<br>- UI Designer<br>- Video storyboard designer<br>- Pitcher";
                // case 14:
                //     return "Text for image 5";
                // case 15:
                //     return "Text for image 6";
                case 14:
                    header.innerHTML = "Salve Mundi";
                    return "The student association (Salve Mundi) mascot Owl for a bar-shirt design, made for Hubble.";
                case 15:
                    header.innerHTML = "Salve Mundi";
                    return "The student association (Salve Mundi) mascot Owl for a bar-shirt design, made for Hubble.";
                case 16:
                    header.innerHTML = "Salve Mundi";
                    return "The Salve Mundi Owl for a banner design.";
                default:
                    return "";
            }
    }

}

// Rest of your logic for landscape orientation
// } else {


//     // Rest of your logic for portrait orientation
//     console.log('Screen is in portrait orientation');

//     isPortrait();
//     // You can add any specific behavior for portrait orientation here
// }
// }

// function isPortrait() {
//     if (window.innerWidth < window.innerHeight)
//         return;
// }

//CHECK CHATGPT!

// let landscapeListenersAdded = false; // Variable to track whether landscape listeners are added

// function checkScreenOrientation() {
//     if (window.innerWidth > window.innerHeight) {
//         // Landscape orientation

//         // Check if landscape listeners are already added
//         if (!landscapeListenersAdded) {
//             // Add landscape listeners
//             addLandscapeListeners();
//             landscapeListenersAdded = true;
//         }

//         // Rest of your logic for landscape orientation
//     } else {
//         // Portrait orientation

//         // Check if landscape listeners are added, and remove them if necessary
//         if (landscapeListenersAdded) {
//             removeLandscapeListeners();
//             landscapeListenersAdded = false;
//         }

//         isPortrait();
//         // You can add any specific behavior for portrait orientation here
//     }
// }

// function addLandscapeListeners() {
//     // Add your landscape event listeners here
//     // Example: text.addEventListener('mouseover', handleMouseOver);
//     // ...
// }

// function removeLandscapeListeners() {
//     // Remove your landscape event listeners here
//     // Example: text.removeEventListener('mouseover', handleMouseOver);
//     // ...
// }

// // Initial call to checkScreenOrientation
// checkScreenOrientation();

// // Add a listener for window resize event to continuously check screen orientation
// window.addEventListener('resize', checkScreenOrientation);