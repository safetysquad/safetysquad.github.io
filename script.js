// ===============================
// STATE
// ===============================
let currentIndex = 0;
let showAnswer = false;
let onlyMarked = false;

let doneCards = JSON.parse(localStorage.getItem("safety_doneCards")) || [];
let markedCards = JSON.parse(localStorage.getItem("safety_markedCards")) || [];


// ===============================
// KARTENFILTER
// ===============================
function getActiveCards() {
  return onlyMarked
    ? cards.filter(c => markedCards.includes(c.id))
    : cards;
}


// ===============================
// RENDER KARTE
// ===============================
function renderCard() {
  const activeCards = getActiveCards();

  if (!activeCards || activeCards.length === 0) {
    const el = document.getElementById("cardText");
    if (el) el.textContent = "🎉 Keine Karten vorhanden";
    return;
  }

  if (currentIndex >= activeCards.length) currentIndex = activeCards.length - 1;
  if (currentIndex < 0) currentIndex = 0;

  const card = activeCards[currentIndex];

  const cardText = document.getElementById("cardText");
  if (cardText) {
    cardText.textContent = showAnswer ? card.answer : card.question;
  }

  // Stats oben
  const doneEl = document.getElementById("doneCount");
  const markEl = document.getElementById("markCount");
  const counterEl = document.getElementById("cardCounter");
  const barEl = document.getElementById("progressBar");

  if (doneEl) doneEl.textContent = doneCards.length;
  if (markEl) markEl.textContent = markedCards.length;
  if (counterEl) {
    counterEl.textContent = `${currentIndex + 1} / ${activeCards.length}`;
  }

  if (barEl) {
    const progress = ((currentIndex + 1) / activeCards.length) * 100;
    barEl.style.width = progress + "%";
  }
}


// ===============================
// ACTIONS
// ===============================
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
  const activeCards = getActiveCards();
  if (!activeCards.length) return;

  const card = activeCards[currentIndex];
  if (!markedCards.includes(card.id)) {
    markedCards.push(card.id);
    localStorage.setItem("safety_markedCards", JSON.stringify(markedCards));
  }
  nextCard(); // 👉 IMMER weiter
}

function doneCard() {
  const activeCards = getActiveCards();
  if (!activeCards.length) return;

  const card = activeCards[currentIndex];
  if (!doneCards.includes(card.id)) {
    doneCards.push(card.id);
    localStorage.setItem("safety_doneCards", JSON.stringify(doneCards));
  }
  nextCard(); // 👉 IMMER weiter
}

function toggleMode() {
  onlyMarked = !onlyMarked;
  currentIndex = 0;

  const btn = document.getElementById("toggleMode");
  if (btn) {
    btn.textContent = onlyMarked
      ? "📚 Alle Karten"
      : "⭐ Nur Merkliste";
  }

  renderCard();
}


// ===============================
// STATISTIKSEITE
// ===============================
function renderStats() {
  const doneCards = JSON.parse(localStorage.getItem("safety_doneCards")) || [];
  const markedCards = JSON.parse(localStorage.getItem("safety_markedCards")) || [];

  const total = cards.length;
  const done = doneCards.length;
  const mark = markedCards.length;
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);

  const totalEl = document.getElementById("totalCards");
  const doneEl = document.getElementById("doneCards");
  const markEl = document.getElementById("markCards");
  const percentEl = document.getElementById("progressPercent");
  const barEl = document.getElementById("progressBar");

  if (!totalEl) return; // Schutz: nur auf Statistik-Seite

  totalEl.textContent = total;
  doneEl.textContent = done;
  markEl.textContent = mark;
  percentEl.textContent = percent + "%";
  barEl.style.width = percent + "%";
}


// ===============================
// RESET (nur Statistikseite)
// ===============================
function resetProgress() {
  const ok = confirm("Willst du wirklich ALLE Lernfortschritte löschen?");
  if (!ok) return;

  localStorage.removeItem("safety_doneCards");
  localStorage.removeItem("safety_markedCards");

  location.reload();
}


// ===============================
// START
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  renderCard();
  renderStats();
});
