const video = document.getElementById("myVideo");
    video.controls = false; // Hide controls initially
    video.currentTime = 0;

    let hasPaused = false;        // Track if paused at 3 seconds
    let redirectTimerStarted = false; // Track if redirect timer started

    // Pause at 3 seconds, show controls, unmute
    video.addEventListener("timeupdate", () => {
      if (!hasPaused && video.currentTime >= 2) {
        video.pause();
        video.controls = true;
        video.muted = false;
        hasPaused = true;
      }
    });
    
     // Start redirect timer ONLY after user clicks play after pause
    video.addEventListener("play", () => {
      if (hasPaused && !redirectTimerStarted) {
        redirectTimerStarted = true;
        setTimeout(() => {
          window.location.href = "https://otieu.com/4/9393587"; // Replace with your redirect URL
        }, 15000); // Redirect 10 seconds after user plays video
      }
    });
