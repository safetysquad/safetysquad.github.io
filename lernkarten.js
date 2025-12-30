let index = 0;
let showAnswer = false;

const STORAGE = "lernkarten_status";
let status = JSON.parse(localStorage.getItem(STORAGE)) || {};

function render() {
  const card = lernkarten[index];
  document.getElementById("card").innerText =
    showAnswer ? card.antwort : card.frage;

  const values = Object.values(status);
  document.getElementById("done").innerText =
    values.filter(v => v === "done").length;

  document.getElementById("mark").innerText =
    values.filter(v => v === "mark").length;
}

function flip() {
  showAnswer = !showAnswer;
  render();
}

function next() {
  index = (index + 1) % lernkarten.length;
  showAnswer = false;
  render();
}

function prev() {
  index = (index - 1 + lernkarten.length) % lernkarten.length;
  showAnswer = false;
  render();
}

function mark() {
  status[lernkarten[index].id] = "mark";
  saveAndNext();
}

function done() {
  status[lernkarten[index].id] = "done";
  saveAndNext();
}

function saveAndNext() {
  localStorage.setItem(STORAGE, JSON.stringify(status));
  next();
}

render();
