let index = 0;
let showAnswer = false;
let mode = "all"; // all | mark

let state = JSON.parse(localStorage.getItem("state")) || {};
let filteredCards = [];

function updateFilteredCards() {
  if (mode === "mark") {
    filteredCards = cards.filter(c => state[c.id] === "mark");
  } else {
    filteredCards = cards.filter(c => state[c.id] !== "done");
  }

  if (filteredCards.length === 0) index = 0;
  if (index >= filteredCards.length) index = 0;
}

function currentCard() {
  return filteredCards.length > 0 ? filteredCards[index] : null;
}

function render() {
  const card = currentCard();

  const cardText = document.getElementById("cardText");

  if (!card) {
    cardText.innerText = "🎉 Keine Karten mehr!";
    return;
  }

  cardText.innerText = showAnswer ? card.answer : card.question;

  const values = Object.values(state);
  const done = values.filter(v => v === "done").length;
  const mark = values.filter(v => v === "mark").length;

  document.getElementById("doneCount").innerText = done;
  document.getElementById("markCount").innerText = mark;
  document.getElementById("points").innerText = done - mark;

  document.getElementById("progressBar").style.width =
    `${(done / cards.length) * 100}%`;
}

function flipCard() {
  showAnswer = !showAnswer;
  render();
}

function nextCard() {
  if (filteredCards.length === 0) return;
  showAnswer = false;
  index = (index + 1) % filteredCards.length;
  render();
}

function prevCard() {
  if (filteredCards.length === 0) return;
  showAnswer = false;
  index = (index - 1 + filteredCards.length) % filteredCards.length;
  render();
}

function doneCard() {
  const card = currentCard();
  if (!card) return;
  state[card.id] = "done";
  saveAndAdvance();
}

function markCard() {
  const card = currentCard();
  if (!card) return;
  state[card.id] = "mark";
  saveAndAdvance();
}

function saveAndAdvance() {
  localStorage.setItem("state", JSON.stringify(state));
  showAnswer = false;
  updateFilteredCards();
  nextCard();
}

function toggleMode() {
  mode = mode === "all" ? "mark" : "all";
  document.getElementById("toggleMode").innerText =
    mode === "mark" ? "📚 Alle Karten" : "⭐ Nur Merkliste";
  index = 0;
  updateFilteredCards();
  render();
}

function resetProgress() {
  if (!confirm("Alle Lernfortschritte wirklich löschen?")) return;
  localStorage.removeItem("state");
  location.reload();
}

// INIT
updateFilteredCards();
render();
