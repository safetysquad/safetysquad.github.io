// ===============================
// DARK MODE TOGGLE
// ===============================
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Prüfen, ob User bereits Dark Mode bevorzugt
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  body.classList.add("dark");
  toggleBtn.textContent = "☀️"; // Sonne Symbol für Light Mode
}

// Toggle Funktion
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  
  // Icon wechseln
  if (body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    toggleBtn.textContent = "🌙";
    localStorage.setItem("theme", "light");
  }
});
