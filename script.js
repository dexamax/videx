const video = document.getElementById('myVideo');

// Function to check if 1 minute has passed
function canRedirect() {
    const now = new Date().getTime();
    const lastRedirectTime = localStorage.getItem('lastRedirectTime');
    // Check if 1 minute has passed or if lastRedirectTime is null (first visit)
    const canRedirect = !lastRedirectTime || now - lastRedirectTime > 1 * 60 * 1000; // 1 minute in milliseconds
    
    console.log(`Can redirect: ${canRedirect}`); // Debugging line
    return canRedirect;
}

// Function to handle the redirect
function handleRedirect() {
    if (canRedirect()) {
        console.log('Redirecting to:', redirectUrl); // Debugging line
        // Redirect to the provided URL
        window.location.href = redirectUrl;
        // Update the last redirect time in localStorage
        localStorage.setItem('lastRedirectTime', new Date().getTime());
    } else {
        console.log('Not redirecting yet, wait for 1 minute.'); // Debugging line
    }
}

// Set the redirect link
const redirectUrl = 'https://kqfdedl.com/cl/274188042ab37cb0';

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
