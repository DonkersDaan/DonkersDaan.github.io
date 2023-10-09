document.addEventListener('DOMContentLoaded', () => {

    const textRight = document.querySelector(".p1");
    const headerClass = document.querySelectorAll('.header');

    const images = document.querySelectorAll(".image");
    const video = document.querySelector(".video");

    const buttons = document.querySelectorAll('.button');
    const videoYT = document.getElementById('BottleStop');

    left = document.getElementById("left");
    right = document.getElementById("right");

    text = document.getElementById("my-work-right");
    media = document.getElementById("my-work-left");

    scrollProgressLeft = document.getElementById('scroll-progress-left');
    scrollProgressText = document.querySelector('.deactivateProgression');

    let originalLeft = parseFloat(left.style.left) || 1;
    let originalRight = parseFloat(right.style.left) || 49;

    let moveOut, moveIn, moveBack;
    let moveOnce = 0;

    mobile = document.getElementById("mobile-container");

    const hoverText = document.querySelectorAll('.reveal');
    const hoverText2 = document.querySelectorAll('.reveal2');
    const hoverText3 = document.querySelectorAll('.reveal3');

    window.addEventListener("load", () => {
        preloadVideo();
        moveOut = setInterval(() => { }, 2000);
        moveIn = setInterval(() => { }, 2000);
    });

    function preloadVideo() {
        video.src = "./Hobby/BenteDaanVid1.mp4";
        video.load();
        video.poster = "./Hobby/BenteDaanCover.png";
        video.addEventListener("canplaythrough", () => {
            images.forEach(image => image.removeAttribute('loading'));
        });
        video.addEventListener("mouseover", () => video.pause());
        video.addEventListener("mouseleave", () => video.play());
    }

    text.addEventListener('mouseover', handleHover);
    media.addEventListener('mouseover', handleHover);

    function handleHover() {
        if (moveOnce === 1) {
            clearInterval(moveIn);
            moveDivsBack();
        }
    }

    buttons.forEach(button => {
        const buttonIndex = button.getAttribute('data-button-index');
        const originalText = button.getAttribute('data-original-text');

        button.addEventListener('mouseover', () => {
            clearInterval(moveOut);
            if (moveOnce === 0) moveDivs();
            button.innerHTML = getButtonText(buttonIndex);
        });

        button.addEventListener('mouseleave', () => button.innerHTML = originalText);

        button.addEventListener('click', () => {
            const special = document.querySelector('.special');
            special && special.classList.remove('special');
            button.classList.add('special');
            textRight.innerHTML = getPageText(buttonIndex);
            media.scrollTop = 0;
        });
    });

    function moveDivs() {
        moveOnce = 1;
        let currentPositionLeft = originalLeft;
        let targetPositionLeft = originalLeft - (0.002 * left.offsetWidth);
        let currentPositionRight = originalRight;
        let targetPositionRight = originalRight + (0.002 * right.offsetWidth);

        moveIn = setInterval(() => {
            if (currentPositionLeft <= targetPositionLeft || currentPositionRight >= targetPositionRight) {
                clearInterval(moveIn);
            } else {
                currentPositionLeft -= 0.08;
                currentPositionRight += 0.08;
                left.style.left = currentPositionLeft + "%";
                right.style.left = currentPositionRight + "%";
            }
        }, 10);
    }

    function moveDivsBack() {
        moveOnce = 0;
        let currentPositionLeft = parseFloat(left.style.left) || 0;
        let targetPositionLeft = originalLeft;
        let currentPositionRight = parseFloat(right.style.left) || 0;
        let targetPositionRight = originalRight;

        moveBack = setInterval(() => {
            if (currentPositionLeft >= targetPositionLeft || currentPositionRight <= targetPositionRight) {
                clearInterval(moveBack);
            } else {
                currentPositionLeft += 0.1;
                currentPositionRight -= 0.1;
                left.style.left = currentPositionLeft + "%";
                right.style.left = currentPositionRight + "%";
            }
        }, 10);
    }

    function getButtonText(buttonIndex) {
        const buttonLabels = ["Home", "AR", "Defence", "Climate", "Other"];
        return buttonLabels[parseInt(buttonIndex)];
    }

    const texthome = document.getElementById("phome").innerHTML;

    function getPageText(buttonIndex) {
        const showElement = (index, condition) => {
            textBoxes[index].style.display = condition ? "flex" : "none";
        };

        switch (buttonIndex) {
            case '0':
                showElement(0, true);
                showElement(1, false);
                showElement(2, false);
                showElement(3, false);
                showElement(4, false);
                changeHome();
                return texthome;
            case '1':
                showElement(0, false);
                showElement(1, true);
                showElement(2, false);
                showElement(3, false);
                showElement(4, false);
                ARBook();
                return;
            case '2':
                showElement(0, false);
                showElement(1, false);
                showElement(2, true);
                showElement(3, false);
                showElement(4, false);
                changeDefence();
                return;
            case '3':
                showElement(0, false);
                showElement(1, false);
                showElement(2, false);
                showElement(3, true);
                showElement(4, false);
                changeGAG();
                return;
            case '4':
                showElement(0, false);
                showElement(1, false);
                showElement(2, false);
                showElement(3, false);
                showElement(4, true);
                Others();
                return "To the left are some other school and passion projects<br><i><b>Scroll</b>, and <b>hover</b> over an image to show what it is about.</i>";
            default:
                return "";
        }
    }

    function changeHome() {
        scrollProgressLeft.style.display = "none";
        scrollProgressText.style.display = "none";

        videoYT.src = "";
        video.src = "";
        video.style.display = "none";

        media.style.justifyContent = "center";
        media.style.alignItems = "center";
        media.style.flexDirection = "";
        media.style.flexWrap = "";

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
                    hoverText.forEach((text, i) => text.style.display = (i === index) ? 'block' : 'none');
                    // if (window.innerWidth < 1675) headerClass[3].style.marginTop = '17vh';
                });
                image.addEventListener("mouseleave", () => {
                    headerClass[3].style.marginTop = '0vh';
                    hoverText[0].style.display = 'block';
                    hoverText.forEach((text, i) => {
                        if (i !== 0) text.style.display = 'none';
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

    function changeGAG() {

        scrollProgressLeft.style.display = "inline";
        scrollProgressText.style.display = "inline";

        videoYT.src = "";
        video.src = "";
        video.style.display = "none";

        images.forEach((image, index) => {
            if (index >= 8 && index <= 11) {
                /////////////////////////////////////////////////////////////////////////Activate after september 2024
                // image.style.display = "inline";

                /////////////////////////////////////////////////////////////////////////deactivate after september 2024
                images[8].style.display = "inline";

                /////////////////////////////////////////////////////////////////////////Activate after september 2024

                // const hoverTextIndex = index - 7;
                // image.addEventListener("mouseover", () => {
                //     hoverText2.forEach((text, i) => text.style.display = (i === hoverTextIndex) ? 'block' : 'none');
                //     if (window.innerWidth < 1600) headerClass[4].style.marginTop = '16vh';
                // });
                // image.addEventListener("mouseleave", () => {
                //     headerClass[4].style.marginTop = '0vh';
                //     hoverText2[0].style.display = 'block';
                //     hoverText2.forEach((text, i) => {
                //         if (i !== 0) text.style.display = 'none';
                //     });
                // });

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

        images.forEach(image => image.style.display = "none");

        video.src = "./Hobby/BenteDaanVid1.mp4";
        video.style.display = "initial";

        video.loop = true;
        video.addEventListener("mouseover", () => video.play());
        video.addEventListener("mouseleave", () => video.pause());
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
                            hoverText3.forEach((text, i) => text.style.display = (i === 1) ? 'block' : 'none');
                            images[12].addEventListener("click", () => window.open('https://www.redbubble.com/people/DD-sign/shop?asc=u&ref=account-nav-dropdown', '_blank'));
                            break;
                        case 2:
                            hoverText3.forEach((text, i) => text.style.display = (i === 2) ? 'block' : 'none');
                            break;
                        case 3:
                        case 4:
                            hoverText3.forEach((text, i) => text.style.display = (i === 3) ? 'block' : 'none');
                            break;
                        case 5:
                            hoverText3.forEach((text, i) => text.style.display = (i === 4) ? 'block' : 'none');
                            break;
                        default:
                            break;
                    }
                });

                image.addEventListener("mouseleave", () => {
                    hoverText3.forEach((text, i) => text.style.display = (i === 0) ? 'block' : 'none');
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

    //Scroll functionality

    let isScrolling = false;

    function syncScroll(event) {
        if (!isScrolling) {
            isScrolling = true;
            if (event.target === media) {
                text.scrollTop = media.scrollTop;
            } else if (event.target === text) {
                // media.scrollTop = text.scrollTop;
            }
            isScrolling = false;
        }
    }

    // Add the scroll event listener to both containers
    media.addEventListener('scroll', syncScroll);
    text.addEventListener('scroll', syncScroll);

    document.addEventListener('wheel', preventZoom);
    function preventZoom(event) {
        if (event.ctrlKey === true) {
            event.preventDefault();
        }
    }

    function updateProgressBar(container, progressBar, progressText) {
        const scrollTop = container.scrollTop;
        const scrollHeight = container.scrollHeight - container.clientHeight;

        if (scrollHeight > 0) {
            const scrollPercentage = (scrollTop / scrollHeight) * 100;
            progressBar.style.width = scrollPercentage + '%';
            progressText.textContent = Math.round(scrollPercentage) + '%';
        } else {
            progressBar.style.width = '0%';
            progressText.textContent = '0%';
        }

    }

    media.addEventListener('scroll', () => {
        updateProgressBar(media, scrollProgressLeft, scrollProgressText);
    });
});
