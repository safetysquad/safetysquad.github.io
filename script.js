let index = 0;
let showAnswer = false;
let mode = "all";

let state = JSON.parse(localStorage.getItem("state")) || {};
let filteredCards = [];

function updateFilteredCards() {
  filteredCards =
    mode === "mark"
      ? cards.filter(c => state[c.id] === "mark")
      : cards.filter(c => state[c.id] !== "done");

  filteredCards.sort((a, b) => a.id - b.id);

  if (index >= filteredCards.length) index = 0;
}

function currentCard() {
  return filteredCards[index] || null;
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
  document.getElementById("cardCounter").innerText =
    `${index + 1} / ${filteredCards.length}`;

  document.getElementById("progressBar").style.width =
    `${(done / cards.length) * 100}%`;
}

function flipCard() {
  showAnswer = !showAnswer;
  render();
}

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
  const currentId = currentCard().id;
  state[currentId] = "done";
  saveAndNext(currentId);
}

function markCard() {
  const currentId = currentCard().id;
  state[currentId] = "mark";
  saveAndNext(currentId);
}

function saveAndNext(currentId) {
  localStorage.setItem("state", JSON.stringify(state));
  updateFilteredCards();

  const nextIndex = filteredCards.findIndex(c => c.id > currentId);
  index = nextIndex !== -1 ? nextIndex : 0;

  showAnswer = false;
  render();
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
  if (!confirm("Willst du wirklich alles zurücksetzen?")) return;
  localStorage.removeItem("state");
  location.reload();
}

updateFilteredCards();
render();
