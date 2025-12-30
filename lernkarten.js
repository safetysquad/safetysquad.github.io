let i = 0;
let show = false;
const STORAGE = "lernkarten_status";
let status = JSON.parse(localStorage.getItem(STORAGE)) || {};

function render() {
  const k = lernkarten[i];
  document.getElementById("box").innerText = show ? k.antwort : k.frage;

  const values = Object.values(status);
  document.getElementById("done").innerText = values.filter(v => v === "done").length;
  document.getElementById("mark").innerText = values.filter(v => v === "mark").length;
}

function flip() { show = !show; render(); }
function next() { i = (i + 1) % lernkarten.length; show = false; render(); }
function prev() { i = (i - 1 + lernkarten.length) % lernkarten.length; show = false; render(); }

function mark() {
  status[lernkarten[i].id] = "mark";
  saveNext();
}

function done() {
  status[lernkarten[i].id] = "done";
  saveNext();
}

function saveNext() {
  localStorage.setItem(STORAGE, JSON.stringify(status));
  next();
}

render();
