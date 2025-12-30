const stats = JSON.parse(localStorage.getItem("pruefung_stats")) || {};
let html = "";

Object.entries(stats.wrong || {}).forEach(([id, count]) => {
  const q = pruefungsFragen.find(q => q.id == id);
  html += `<p><b>${q.frage}</b><br>Falsch beantwortet: ${count}×</p>`;
});

document.getElementById("analysis").innerHTML =
  html || "Noch keine Daten vorhanden.";
