const state = JSON.parse(localStorage.getItem("state")) || {};

const total = cards.length;
const values = Object.values(state);

const done = values.filter(v => v === "done").length;
const mark = values.filter(v => v === "mark").length;

const percent = total === 0 ? 0 : Math.round((done / total) * 100);

document.getElementById("totalCards").innerText = total;
document.getElementById("doneCards").innerText = done;
document.getElementById("markCards").innerText = mark;
document.getElementById("percentDone").innerText = percent + "%";

const bar = document.getElementById("progressBar");
bar.style.width = percent + "%";

function resetAll() {
  const ok = confirm(
    "Willst du wirklich deinen gesamten Lernfortschritt löschen?\n\nDiese Aktion kann nicht rückgängig gemacht werden."
  );
  if (!ok) return;

  localStorage.removeItem("state");
  location.reload();
}
