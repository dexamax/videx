const video = document.getElementById("myVideo");
    let timerStarted = false;

    video.addEventListener("playing", () => {
      if (timerStarted) return;
      timerStarted = true;

      setTimeout(() => {
        window.location.href = "https://example.com"; // 🔁 replace with your redirect URL
      }, 10000); // ⏱️ 10 seconds after video starts playing
    });
