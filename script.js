const video = document.getElementById('myVideo');

function playVideo() {
    video.play();
}

function pauseVideo() {
    video.pause();
}

function stopVideo() {
    video.pause();
    video.currentTime = 0;
}

function rewindVideo() {
    video.currentTime -= 10;
}

function fastForwardVideo() {
    video.currentTime += 10;
}

// Set the redirect link
const redirectUrl = 'https://noohapou.com/4/7939569';

// Function to check if 1 minute has passed
function canRedirect() {
    const now = new Date().getTime();
    const lastRedirectTime = localStorage.getItem('lastRedirectTime');
    // Check if 1 minute has passed or if lastRedirectTime is null (first visit)
    return !lastRedirectTime || now - lastRedirectTime > 1 * 60 * 1000;  // 1 minute in milliseconds
}

// Function to handle the redirect
function handleRedirect() {
    if (canRedirect()) {
        // Redirect to the provided URL
        window.location.href = redirectUrl;
        // Update the last redirect time in localStorage
        localStorage.setItem('lastRedirectTime', new Date().getTime());
    }
}

// Add an event listener for clicks anywhere on the page
document.addEventListener('click', function(event) {
    // Prevent redirect if clicking on the video element
    if (event.target !== video) {
        handleRedirect();
    }
});

// Optional: Allow the user to start the video first
document.addEventListener('DOMContentLoaded', function() {
    video.addEventListener('play', function() {
        handleRedirect(); // Redirect when video starts playing, if conditions are met
    });
});
