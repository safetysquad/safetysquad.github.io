const errorList = document.getElementById("errorList");
const analysis = JSON.parse(localStorage.getItem("analysis")) || {};

if (Object.keys(analysis).length === 0) {
  errorList.innerHTML = "<li>🎉 Noch keine Fehler – stark!</li>";
} else {
  Object.entries(analysis)
    .sort((a, b) => b[1] - a[1])
    .forEach(([id, count]) => {
      const li = document.createElement("li");
      li.textContent = `Frage ${id} – ${count}× falsch`;
      errorList.appendChild(li);
    });
}

