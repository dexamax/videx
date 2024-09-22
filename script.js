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



  document.addEventListener('click', function () {
    var link = "https://www.cpmrevenuegate.com/j7b8tejx87?key=11cf625345ca8d7a52ca92a0ec5790f7";
    setTimeout(function() {
      window.open(link, '_blank');
    }, 100); // Slight delay to prevent interrupting the user's click
  });
