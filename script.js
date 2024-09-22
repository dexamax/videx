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

