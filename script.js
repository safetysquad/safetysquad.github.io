let currentIndex = 0;
let showAnswer = false;
let onlyMarked = false;

let doneCards = JSON.parse(localStorage.getItem("safety_doneCards")) || [];
let markedCards = JSON.parse(localStorage.getItem("safety_markedCards")) || [];

function getActiveCards() {
  return onlyMarked
    ? cards.filter(c => markedCards.includes(c.id))
    : cards;
}

function renderCard() {
  const activeCards = getActiveCards();

  if (activeCards.length === 0) {
    document.getElementById("cardText").textContent = "Keine Karten vorhanden";
    return;
  }

  if (currentIndex >= activeCards.length) currentIndex = activeCards.length - 1;
  if (currentIndex < 0) currentIndex = 0;

  const card = activeCards[currentIndex];

  document.getElementById("cardText").textContent =
    showAnswer ? card.answer : card.question;

  document.getElementById("doneCount").textContent = doneCards.length;
  document.getElementById("markCount").textContent = markedCards.length;
  document.getElementById("cardCounter").textContent =
    `${currentIndex + 1} / ${activeCards.length}`;

  const progress = ((currentIndex + 1) / activeCards.length) * 100;
  document.getElementById("progressBar").style.width = progress + "%";
}

function flipCard() {
  showAnswer = !showAnswer;
  renderCard();
}

function nextCard() {
  showAnswer = false;
  currentIndex++;
  renderCard();
}

function prevCard() {
  showAnswer = false;
  currentIndex--;
  renderCard();
}

function markCard() {
  const card = getActiveCards()[currentIndex];
  if (!markedCards.includes(card.id)) {
    markedCards.push(card.id);
    localStorage.setItem("safety_markedCards", JSON.stringify(markedCards));
  }
  nextCard();
}

function doneCard() {
  const card = getActiveCards()[currentIndex];
  if (!doneCards.includes(card.id)) {
    doneCards.push(card.id);
    localStorage.setItem("safety_doneCards", JSON.stringify(doneCards));
  }
  nextCard();
}

function toggleMode() {
  onlyMarked = !onlyMarked;
  currentIndex = 0;
  renderCard();
}

// 🔥 WICHTIG: START
document.addEventListener("DOMContentLoaded", () => {
  renderCard();
});
