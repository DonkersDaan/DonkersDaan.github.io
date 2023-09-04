const myWorkLeft = document.getElementById('my-work-left');
const myWorkRight = document.getElementById('my-work-right');
let isScrolling = false;

function syncScroll(event) {
    if (!isScrolling) {
        isScrolling = true;
        if (event.target === myWorkLeft) {
            myWorkRight.scrollTop = myWorkLeft.scrollTop;
        } else if (event.target === myWorkRight) {
            // myWorkLeft.scrollTop = myWorkRight.scrollTop;
        }
        isScrolling = false;
    }
}

// Add the scroll event listener to both containers
myWorkLeft.addEventListener('scroll', syncScroll);
myWorkRight.addEventListener('scroll', syncScroll);

document.addEventListener('wheel', preventZoom);
function preventZoom(event) {
    if (event.ctrlKey === true) {
        event.preventDefault();
    }
}