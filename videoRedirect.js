const video = document.getElementById('myVideo');
        const redirectURL = "https://otieu.com/4/6825061"; // 🔁 Change this to your desired link
        const visitKey = "videoVisitCount";

        // Get visit count (default to 0 if not set)
        let visitCount = parseInt(localStorage.getItem(visitKey)) || 0;

        // Increment and store updated count
        visitCount++;
        localStorage.setItem(visitKey, visitCount);

        // Check if visit is odd (1st, 3rd, 5th...)
        const shouldRedirect = visitCount % 2 === 1;

        if (shouldRedirect) {
            video.addEventListener("play", () => {
                setTimeout(() => {
                    window.location.href = redirectURL;
                }, 10000); // 10 seconds
            });
        }
