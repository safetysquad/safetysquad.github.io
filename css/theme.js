document.addEventListener("DOMContentLoaded", () => {
  // ===============================
  // DARK MODE TOGGLE
  // ===============================
  const toggleBtn = document.getElementById("theme-toggle");
  const body = document.body;

  if (toggleBtn) {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      body.classList.add("dark");
      toggleBtn.textContent = "☀️";
    }

    toggleBtn.addEventListener("click", () => {
      body.classList.toggle("dark");

      if (body.classList.contains("dark")) {
        toggleBtn.textContent = "☀️";
        localStorage.setItem("theme", "dark");
      } else {
        toggleBtn.textContent = "🌙";
        localStorage.setItem("theme", "light");
      }
    });
  }

  // ===============================
  // BACK BUTTON
  // ===============================
  const backBtn = document.getElementById("back-button");
  if (backBtn) {
    backBtn.addEventListener("click", () => {
      if (window.history.length > 1) {
        window.history.back();
      } else {
        window.location.href = "index.html";
      }
    });
  }
});
