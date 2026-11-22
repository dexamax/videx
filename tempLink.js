const tempLink = "about:blank";

(function () {
  const originalHandleClick = window.handleClick;

  window.handleClick = function (btn, id) {
    // ඕනෑම බටන් එකක් එබුවම කෙලින්ම main code එකේ තියෙන finalLink එකට යවනවා
    if (typeof finalLink !== "undefined") {
      localStorage.removeItem("clickedButtons");
      btn.classList.add("clicked");

      const buttons = document.querySelectorAll(".circle-btn");
      buttons.forEach(b => b.disabled = true);

      setTimeout(() => {
        window.location.replace(finalLink);
      }, 300);
      return;
    }

    // fallback එකක් විදිහට මුල් function එක තියලා තියෙනවා
    if (typeof originalHandleClick === "function") {
      originalHandleClick(btn, id);
    }
  };
})();
