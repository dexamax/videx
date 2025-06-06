 // Start redirect timer ONLY after user clicks play after pause
    video.addEventListener("play", () => {
      if (hasPaused && !redirectTimerStarted) {
        redirectTimerStarted = true;
        setTimeout(() => {
          window.location.href = "https://example.com"; // Replace with your redirect URL
        }, 10000); // Redirect 10 seconds after user plays video
      }
    });
