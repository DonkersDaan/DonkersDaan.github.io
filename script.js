// let bente = false;
var textRight = document.querySelector(".p1");
var header = document.getElementById("header");
const headerClass = document.querySelectorAll('.header');

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

// window.addEventListener('load', checkScreenOrientation);
// window.addEventListener('resize', checkScreenOrientation);

window.addEventListener("load", preloadVideo); //            Move outside of this function, along with the preloadVideo function

function preloadVideo() {

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

            button.innerHTML = originalText;
        })

        button.addEventListener('click', () => {
            document.querySelector('.special')?.classList.remove('special');
            button.classList.add('special');

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

    const texthome = document.getElementById("phome").innerHTML;

    textBoxes = document.querySelectorAll('.textboxes');
    hoverText = document.querySelectorAll('.reveal');
    hoverText2 = document.querySelectorAll('.reveal2');
    hoverText3 = document.querySelectorAll('.reveal3');



    // Function to get corresponding text for each button index
    function getPageText(buttonIndex) {
        switch (buttonIndex) {
            case '0':
                textBoxes[0].style.display = "flex";
                textBoxes[1].style.display = "none";
                textBoxes[2].style.display = "none";
                textBoxes[3].style.display = "none";
                textBoxes[4].style.display = "none";
                changeHome();
                return texthome;

            case '1':
                textBoxes[0].style.display = "none";
                textBoxes[1].style.display = "flex";
                textBoxes[2].style.display = "none";
                textBoxes[3].style.display = "none";
                textBoxes[4].style.display = "none";
                ARBook();
                return;
            case '2':
                textBoxes[0].style.display = "none";
                textBoxes[1].style.display = "none";
                textBoxes[2].style.display = "flex";
                textBoxes[3].style.display = "none";
                textBoxes[4].style.display = "none";
                changeDefence();
                return;
            case '3':
                textBoxes[0].style.display = "none";
                textBoxes[1].style.display = "none";
                textBoxes[2].style.display = "none";
                textBoxes[3].style.display = "flex";
                textBoxes[4].style.display = "none";
                changeGAG();
                return;
            case '4':
                textBoxes[0].style.display = "none";
                textBoxes[1].style.display = "none";
                textBoxes[2].style.display = "none";
                textBoxes[3].style.display = "none";
                textBoxes[4].style.display = "flex";
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
    };

    function changeDefence() {
        scrollProgressLeft.style.display = "inline";
        scrollProgressText.style.display = "inline";
        videoYT.src = "";
        video.src = "";
        video.style.display = "none";

        images.forEach((image, index) => {
            if (index >= 1 && index <= 7) {
                image.style.display = "inline";

                image.addEventListener("mouseover", () => {
                    for (let i = 0; i < hoverText.length; i++) {
                        hoverText[i].style.display = i === index ? 'block' : 'none';
                        // hoverText[1].style.marginTop = '25vh';
                    }

                    if (window.innerWidth < 1675) {
                        headerClass[3].style.marginTop = '17vh';
                    }

                });
            } else {
                image.style.display = "none";
            }

            image.addEventListener("mouseleave", () => {
                headerClass[3].style.marginTop = '0vh';

                for (let i = 1; i < hoverText.length; i++) {
                    hoverText[i].style.display = 'none';
                }
                hoverText[0].style.display = 'block';
            });
        });

        media.style.justifyContent = "";
        media.style.alignItems = "flex-start";
        media.style.flexDirection = "row";
        media.style.flexWrap = "wrap";
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
                image.style.display = "inline";

                const hoverTextIndex = index - 7;

                image.addEventListener("mouseover", () => {
                    hoverText2.forEach((text, i) => {
                        text.style.display = i === hoverTextIndex ? 'block' : 'none';
                    });


                    if (window.innerWidth < 1600) {
                        headerClass[4].style.marginTop = '16vh';
                    }
                });

                image.addEventListener("mouseleave", () => {
                    headerClass[4].style.marginTop = '0vh';
                    hoverText2.forEach((text, i) => {
                        text.style.display = i === 0 ? 'block' : 'none';
                    });
                });

            } else {
                image.style.display = "none";
            }

        });

        media.style.justifyContent = "";
        media.style.alignItems = "flex-start";
        media.style.flexDirection = "row";
        media.style.flexWrap = "wrap";
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

        images.forEach((image, index) => {
            if (index >= 12 && index <= 16) {
                image.style.display = "inline";
                image.style.width = "45%";

                const hoverTextIndex = index - 11;

                image.addEventListener("mouseover", () => {
                    switch (hoverTextIndex) {
                        case 1:
                            hoverText3.forEach((text, i) => {
                                text.style.display = i === 1 ? 'block' : 'none';
                            });

                            images[12].addEventListener("click", () => {
                                window.open('https://www.redbubble.com/people/DD-sign/shop?asc=u&ref=account-nav-dropdown', '_blank');
                            });
                            break;

                        case 2:
                            hoverText3.forEach((text, i) => {
                                text.style.display = i === 2 ? 'block' : 'none';
                            });

                            break;

                        case 3:
                        case 4:
                            hoverText3.forEach((text, i) => {
                                text.style.display = i === 3 ? 'block' : 'none';
                            });

                            break;

                        case 5:
                            hoverText3.forEach((text, i) => {
                                text.style.display = i === 4 ? 'block' : 'none';
                            });

                            break;
                        default:
                            break;
                    }
                });

                image.addEventListener("mouseleave", () => {
                    hoverText3.forEach((text, i) => {
                        text.style.display = i === 0 ? 'block' : 'none';
                    });
                });

            } else {
                image.style.display = "none";
            }
        });

        media.style.justifyContent = "";
        media.style.alignItems = "flex-start";
        media.style.flexDirection = "row";
        media.style.flexWrap = "wrap";

        video.src = "";
        video.style.display = "none";
    }

});
