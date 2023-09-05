// const media = document.getElementById('my-work-left');
// const text = document.getElementById('my-work-right');

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

scrollProgressLeft = document.getElementById('scroll-progress-left');
scrollProgressText = document.querySelector('.deactivateProgression');

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

// Add a scroll event listener to both containers
media.addEventListener('scroll', () => {
    // const scrollProgressText = document.getElementById('scroll-progress-text');
    updateProgressBar(media, scrollProgressLeft, scrollProgressText);
});

