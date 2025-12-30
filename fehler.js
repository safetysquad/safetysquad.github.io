const stats = JSON.parse(localStorage.getItem("pruefung_stats")) || {};
const wrongIds = Object.keys(stats.wrong || {});
let i = 0;

function render() {
  if (wrongIds.length === 0) {
    document.getElementById("box").innerText = "Keine Fehlerfragen 🎉";
    return;
  }
  const q = pruefungsFragen.find(q => q.id == wrongIds[i]);
  document.getElementById("box").innerHTML =
    `<h3>${q.frage}</h3><p>${q.optionen.join("<br>")}</p>`;
}

function next() {
  i = (i + 1) % wrongIds.length;
  render();
}

render();
