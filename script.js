<script>
  // Set the redirect link
  const redirectUrl = 'https://noohapou.com/4/7939569';

  // Function to check if 2 minutes have passed since the last activity
  function canRedirect() {
    const now = new Date().getTime();
    const lastRedirectTime = localStorage.getItem('lastRedirectTime');
    
    // Check if 2 minutes have passed or if it's the first visit (null lastRedirectTime)
    return !lastRedirectTime || now - lastRedirectTime > 1 * 60 * 1000;  // 2 minutes in milliseconds
  }

  // Function to handle the redirect cycle
  function handleRedirect() {
    let redirectCycle = localStorage.getItem('redirectCycle') || 0; // Get redirect cycle, default to 0

    if (redirectCycle < 2) {
      // Redirect if we're on the first two cycles
      window.location.href = redirectUrl;
      
      // Update the last redirect time in localStorage
      localStorage.setItem('lastRedirectTime', new Date().getTime());
      
      // Increment the redirect cycle
      localStorage.setItem('redirectCycle', Number(redirectCycle) + 1);
    } else {
      console.log('No redirect, part of the 3rd cycle.');
    }
  }

  // Reset the redirect cycle after 2 minutes have passed
  function resetRedirectCycle() {
    if (canRedirect()) {
      // Reset the redirect cycle to 0
      localStorage.setItem('redirectCycle', 0);
      console.log('Redirect cycle reset after 2 minutes.');
    }
  }

  // Run resetRedirectCycle every time the page is loaded
  resetRedirectCycle();

  // Add an event listener for clicks anywhere on the page
  document.addEventListener('click', function() {
    handleRedirect();
  });
</script>
