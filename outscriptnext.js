const firstRedirectUrl = "https://snaptik.app/en2";

const cooldownTime = 1 * 60 * 1000; // 1 minute in milliseconds

        function handleButtonClick() {
            const now = new Date().getTime();
            const lastClickTime = localStorage.getItem('lastClickTime');

            if (lastClickTime && now - lastClickTime < cooldownTime) {
                // Redirect to the second link if clicked within the cooldown time
                window.location.href = secondRedirectUrl;
            } else {
                // Redirect to the first link and update the last click time
                localStorage.setItem('lastClickTime', now);
                window.location.href = firstRedirectUrl;
            }
        }
