let index = 0;
let showAnswer = false;
let mode = "all"; // all | mark

const state = JSON.parse(localStorage.getItem("state")) || {};
let filteredCards = [];

/* ---------- LOGIK ---------- */

function updateFilteredCards() {
  if (mode === "mark") {
    filteredCards = cards.filter(c => state[c.id] === "mark");
  } else {
    filteredCards = cards.filter(c => state[c.id] !== "done");
  }

  if (index >= filteredCards.length) index = 0;
}

function currentCard() {
  return filteredCards.length ? filteredCards[index] : null;
}

/* ---------- RENDER ---------- */

function render() {
  const card = currentCard();
  const cardEl = document.getElementById("cardText");
  const counter = document.getElementById("counterText");

  if (!card) {
    cardEl.innerText = "🎉 Keine Karten mehr!";
    counter.innerText = "";
    return;
  }

  cardEl.innerText = showAnswer ? card.answer : card.question;

  counter.innerText = `Karte ${index + 1} von ${filteredCards.length}`;

  const done = Object.values(state).filter(v => v === "done").length;
  const percent = Math.round((done / cards.length) * 100);

  document.getElementById("progressBar").style.width = percent + "%";
  document.getElementById("progressText").innerText = percent + "%";
}

/* ---------- AKTIONEN ---------- */

function nextCard() {
  if (!filteredCards.length) return;
  showAnswer = false;
  index = (index + 1) % filteredCards.length;
  render();
}

function prevCard() {
  if (!filteredCards.length) return;
  showAnswer = false;
  index = (index - 1 + filteredCards.length) % filteredCards.length;
  render();
}

function doneCard() {
  state[currentCard().id] = "done";
  saveAndNext();
}

function wrongCard() {
  delete state[currentCard().id];
  saveAndNext();
}

function markCard() {
  state[currentCard().id] = "mark";
  saveAndNext();
}

function saveAndNext() {
  localStorage.setItem("state", JSON.stringify(state));
  updateFilteredCards();
  nextCard();
}

function toggleMarkMode() {
  mode = mode === "all" ? "mark" : "all";
  index = 0;
  updateFilteredCards();
  render();
}

/* ---------- START ---------- */

updateFilteredCards();
render();
