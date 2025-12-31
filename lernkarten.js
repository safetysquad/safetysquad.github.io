let index = 0;
let showAnswer = false;

const STORAGE = "lernkarten_status";
let status = JSON.parse(localStorage.getItem(STORAGE)) || {};

function render() {
  if (!cards || cards.length === 0) {
    document.getElementById("card").innerText = "Keine Lernkarten gefunden.";
    return;
  }

  const card = cards[index];

  document.getElementById("card").innerText =
    showAnswer ? card.answer : card.question;

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
  index = (index + 1) % cards.length;
  showAnswer = false;
  render();
}

function prev() {
  index = (index - 1 + cards.length) % cards.length;
  showAnswer = false;
  render();
}

function mark() {
  status[cards[index].id] = "mark";
  saveAndNext();
}

function done() {
  status[cards[index].id] = "done";
  saveAndNext();
}

function saveAndNext() {
  localStorage.setItem(STORAGE, JSON.stringify(status));
  next();
}

// Debug-Hilfe (kannst du später löschen)
console.log("Lernkarten geladen:", cards.length);

render();
