<a id="redirectLink" href="https://otieu.com/4/7939569" style="display:none;" target="_blank" rel="noreferrer noopener">Redirect</a>

<script>
    setTimeout(function() {
        // Create a MouseEvent to simulate a user-initiated click
        const link = document.getElementById("redirectLink");

        const evt = new MouseEvent("click", {
            bubbles: true,
            cancelable: true,
            view: window
        });

        const canceled = !link.dispatchEvent(evt);

        if (!canceled) {
            console.log("Simulated click triggered.");
        } else {
            console.log("Click was blocked or canceled.");
        }
    }, 10000); // 10 seconds
</script>
