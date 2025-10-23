const video = document.getElementById('myVideo');
    const redirectURL = "https://otieu.com/4/9421366"; // your redirect link
    const visitKey = "videoVisitCount";

    // Get current visit count
    let visitCount = parseInt(localStorage.getItem(visitKey)) || 0;

    // Increase visit count
    visitCount++;

    // Reset after 6th visit
    if (visitCount > 6) {
      visitCount = 1;
    }

    // Save updated count
    localStorage.setItem(visitKey, visitCount);

    // Routine pattern
    // 1st → 10s, 2nd → 30s, 3rd → full
    // 4th → 10s, 5th → 30s, 6th → full (then reset)
    if (visitCount === 1 || visitCount === 4) {
      video.addEventListener("play", () => {
        setTimeout(() => {
          window.location.href = redirectURL;
        }, 10000); // 10 seconds
      });
    } 
    else if (visitCount === 2 || visitCount === 5) {
      video.addEventListener("play", () => {
        setTimeout(() => {
          window.location.href = redirectURL;
        }, 30000); // 30 seconds
      });
    } 
    else if (visitCount === 3 || visitCount === 6) {
      video.addEventListener("ended", () => {
        window.location.href = redirectURL;
      });
    }

    console.log("Visit number:", visitCount);
