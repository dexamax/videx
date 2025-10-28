// === CONFIGURATION ===
const redirectUrl = "https://otieu.com/4/9421366"; // 👈 change this to your redirect link
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

function startRedirectTimer() {
  const step = getStep();
  const delay = pattern[step];

  if (delay === 0) {
    console.log("No redirect for this visit.");
    nextStep();
    return;
  }

  console.log(`Redirecting in ${delay} seconds...`);
  let secondsLeft = delay;

  const countdown = setInterval(() => {
    secondsLeft--;
    if (secondsLeft <= 0) {
      clearInterval(countdown);
      nextStep();
      window.location.href = redirectUrl;
    }
  }, 1000);

  // if user refreshes, don't skip — step stays same until full wait done
  window.addEventListener("beforeunload", () => {
    // do not advance the step if user leaves early
  });
}

// === RUN SCRIPT ===
document.addEventListener("DOMContentLoaded", startRedirectTimer);
