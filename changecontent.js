document.addEventListener('DOMContentLoaded', () => {

    cursor = document.querySelector('.cursor');

    const overlay = document.getElementById("overlay");
    const prismText = document.getElementById("ClickPrismText");
    const buttoncontainer = document.getElementById("button-container");

    const pyramidLoader = document.querySelector('.pyramid-loader');
    const wrapp = document.querySelector('.wrapper');
    const pyramidSides = document.querySelector('.side4');
    let isAnimating = false;
    let isChangingColor = false;
    let turnCounter = 0;
    let loadCounter = 0;
    let currentColor = "#272222"; // Initial background color


    //Cursor 
    const mousemoveHandler = (e) => {
        cursor.setAttribute("style", "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;");
    };

    document.addEventListener('mousemove', mousemoveHandler);

    //Pyramid change color
    const rainbowColors = [

        "#003477",   // Darker Blue
        "#380077",   // Darker Indigo
        "#630077",   // Darker Violet
        "#272222",
        "#770000",   // Darker Red
        "#773600",   // Darker Orange
        "#776100",   // Adjusted Yellow
        "#0a7700"   // Darker Green
        // Darker Grey Color
    ];


    let targetColor = rainbowColors[0];

    const readout = document.querySelector("p");

    const workContainer = document.getElementById('work-container');

    let opacityOverlay = 0;
    let opacityTrue = false;
    let fadeIn = setInterval(3000);
    let fadeOut = setInterval(3000);


    pyramidSides.addEventListener("mouseover", () => {
        if (turnCounter > 0) {
            overlay.style.display = 'block';
            clearInterval(fadeOut);
            overlayActive();
        }

    });

    pyramidSides.addEventListener("mouseleave", () => {
        if (turnCounter > 0) {
            clearInterval(fadeIn);
            overlayInactive();
        }
    });

    function overlayActive() {
        if (!isAnimating) {
            fadeIn = setInterval(() => {
                if (opacityOverlay >= 0.9) {
                    clearInterval(fadeIn);
                }
                overlay.style.opacity = opacityOverlay;
                opacityOverlay += 0.01;
            }, 10);
        }
    };

    function overlayInactive() {
        fadeOut = setInterval(() => {
            if (opacityOverlay <= 0) {
                clearInterval(fadeOut);
            }
            overlay.style.opacity = opacityOverlay;
            opacityOverlay -= 0.01;
        },);
    };

    pyramidSides.addEventListener("mousemove", (e) => {
        const { x, y } = pyramidSides.getBoundingClientRect();
        pyramidSides.style.setProperty("--x", e.clientX - x);
        pyramidSides.style.setProperty("--y", e.clientY - y);
    });

    pyramidSides.addEventListener('click', () => {

        overlay.style.pointerEvents = "none";
        turnCounter = 1;
        prismText.style.display = "none";
        wrapp.classList.remove('jump');
        clearInterval(fadeIn);
        clearInterval(fadeOut);
        overlay.style.display = 'none';

        if (!isAnimating) {

            pyramidLoader.classList.add('clicked');

            document.removeEventListener('mousemove', mousemoveHandler);
            cursor.classList.add('expand');

            isAnimating = true;
            turnCounter++;

            isChangingColor = true;
            workContainer.classList.add('animation-active');
            MCContainer.classList.add('animation-active');
            setTimeout(() => {
                changeBackgroundColor();
                if (loadCounter == 0) {
                    triggerLoadAnimation();
                    loadCounter++;
                }
            }, 500);

            setTimeout(() => {
                pyramidLoader.classList.remove('clicked');
                isAnimating = false;
                workContainer.classList.remove('animation-active');
                MCContainer.classList.remove('animation-active');
                cursor.classList.remove('expand');
                document.addEventListener('mousemove', mousemoveHandler);

            }, 1700);
        }
    });

    function triggerLoadAnimation() {
        left.classList.add('loadAnimation');
        right.classList.add('loadAnimation');
        buttoncontainer.classList.add('loadAnimation');
    }


    function changeBackgroundColor() {

        let steps = 100; // Number of steps for the transition
        let step = 0;

        let initialRgb = hexToRgb(currentColor);
        let targetRgb = hexToRgb(targetColor);

        let rDiff = (targetRgb[0] - initialRgb[0]) / steps;
        let gDiff = (targetRgb[1] - initialRgb[1]) / steps;
        let bDiff = (targetRgb[2] - initialRgb[2]) / steps;

        let interval = setInterval(() => {
            step++;

            if (step >= steps) {
                clearInterval(interval);
                isChangingColor = false;
                currentColor = targetColor; // Update the currentColor to the target color for the next transition
                updateTargetColor();
            } else {
                let r = Math.round(initialRgb[0] + rDiff * step);
                let g = Math.round(initialRgb[1] + gDiff * step);
                let b = Math.round(initialRgb[2] + bDiff * step);

                document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                // pyramidSides.forEach((side) => {
                //     side.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${alpha})`;
                // });
            }
        }, 10); // The interval will run every 10 milliseconds for a smooth transition
    }

    function updateTargetColor() {
        let currentIndex = rainbowColors.indexOf(targetColor);
        let nextIndex = (currentIndex + 1) % rainbowColors.length;
        targetColor = rainbowColors[nextIndex];
    }

    function hexToRgb(hexColor) {
        const match = hexColor.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
        if (!match) {
            return [0, 0, 0];
        }
        const [, r, g, b] = match;
        return [parseInt(r, 16), parseInt(g, 16), parseInt(b, 16)];
    }


    // document.addEventListener('click', e => {
    //     if (e.target === pyramidSides) {
    //         document.removeEventListener('mousemove', mousemoveHandler);
    //         cursor.classList.add('expand');
    //         setTimeout(() => {
    //             cursor.classList.remove('expand');
    //             document.addEventListener('mousemove', mousemoveHandler);

    //         }, 2000);
    //     }

    //     // else {
    //     //     cursor.classList.add('expand2');
    //     //     setTimeout(() => {
    //     //         cursor.classList.remove('expand2');
    //     //         document.addEventListener('mousemove', mousemoveHandler);

    //     //     }, 500);
    //     // }
    // })
});
