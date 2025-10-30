// === CONFIGURATION ===
const redirectUrl = "https://otieu.com/4/9421366"; // 👈 your redirect link
const pattern = [10, 20, 0]; // seconds (0 = no redirect)
const key = "visitStep";

// === HELPER FUNCTIONS ===
function getStep() {
  const data = localStorage.getItem(key);
  let step = data ? parseInt(data) : 0;
  if (isNaN(step) || step < 0 || step >= pattern.length) step = 0;
  return step;
}

function saveStep(step) {
  localStorage.setItem(key, step);
}

function nextStep() {
  let step = getStep() + 1;
  if (step >= pattern.length) step = 0; // reset after 3rd
  saveStep(step);
}

// === REDIRECT FUNCTION ===
function doRedirect() {
  if (window._alreadyRedirected) return; // prevent double redirect
  window._alreadyRedirected = true;
  nextStep();
  window.location.href = redirectUrl;
}

// === MAIN FUNCTION ===
function startRedirectTimer() {
  const step = getStep();
  const delay = pattern[step];

  if (delay === 0) {
    console.log("No redirect for this visit.");
    nextStep();
    return;
  }

  console.log(`Redirecting in ${delay} seconds or on 80% scroll...`);
  let secondsLeft = delay;

  // start countdown redirect
  const countdown = setInterval(() => {
    secondsLeft--;
    if (secondsLeft <= 0) {
      clearInterval(countdown);
      doRedirect();
    }
  }, 1000);

  // scroll listener (redirect after 80% scroll if not already redirected)
  function checkScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;
    if (scrollPercent >= 50) {
      clearInterval(countdown);
      window.removeEventListener("scroll", checkScroll);
      doRedirect();
    }
  }
  window.addEventListener("scroll", checkScroll);

  // if user refreshes early, keep same step
  window.addEventListener("beforeunload", () => {});
}

// === RUN SCRIPT ===
document.addEventListener("DOMContentLoaded", startRedirectTimer);
