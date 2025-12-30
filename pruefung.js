const STORAGE = "pruefung_stats";
let stats = JSON.parse(localStorage.getItem(STORAGE)) || {
  attempts: 0,
  best: 0,
  completed: false,
  wrong: {}
};

let answers = {};

function render() {
  const q = pruefungsFragen[0];
  document.getElementById("attempts").innerText = stats.attempts;
  document.getElementById("best").innerText = stats.best + "%";
  document.getElementById("status").innerText = stats.completed ? "✅" : "❌";

  let html = `<h3>${q.frage}</h3>`;
  q.optionen.forEach((o, i) => {
    html += `
      <label>
        <input type="checkbox" onchange="toggle(${q.id},${i})"> ${o}
      </label>`;
  });
  document.getElementById("box").innerHTML = html;
}

function toggle(id, idx) {
  answers[id] = answers[id] || [];
  answers[id].includes(idx)
    ? answers[id].splice(answers[id].indexOf(idx), 1)
    : answers[id].push(idx);
}

function finish() {
  let correct = 0;

  pruefungsFragen.forEach(q => {
    const a = answers[q.id] || [];
    if (a.length === q.korrekt.length && a.every(x => q.korrekt.includes(x))) {
      correct++;
    } else {
      stats.wrong[q.id] = (stats.wrong[q.id] || 0) + 1;
    }
  });

  const percent = Math.round((correct / pruefungsFragen.length) * 100);
  stats.attempts++;
  stats.best = Math.max(stats.best, percent);
  if (percent === 100) stats.completed = true;

  localStorage.setItem(STORAGE, JSON.stringify(stats));
  alert(`Ergebnis: ${percent}%`);
}

render();
