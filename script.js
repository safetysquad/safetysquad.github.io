// ===============================
// STATE
// ===============================
const currentSet = document.body.dataset.set || "default";

let doneCards = JSON.parse(localStorage.getItem(`${currentSet}_doneCards`)) || [];
let markedCards = JSON.parse(localStorage.getItem(`${currentSet}_markedCards`)) || [];
let currentIndex = 0;
let showAnswer = false;
let onlyMarked = false;

// ===============================
// KARTEN GET
// ===============================
function getActiveCards() {
  if (onlyMarked) {
    return cards.filter(
      c => markedCards.includes(c.id) && !doneCards.includes(c.id)
    );
  }
  return cards.filter(c => !doneCards.includes(c.id));
}

// ===============================
// RENDER CARD
// ===============================
function renderCard() {
  const activeCards = getActiveCards();
  const cardText = document.getElementById("cardText");
  if (!cardText) return;

  if (activeCards.length === 0) {
    cardText.textContent = onlyMarked
      ? "⭐ Keine Karten in der Merkliste"
      : "🎉 Alle Karten erledigt";
    updateStats(0, 0);
    return;
  }

  if (currentIndex >= activeCards.length) currentIndex = 0;
  if (currentIndex < 0) currentIndex = 0;

  const card = activeCards[currentIndex];
  cardText.textContent = showAnswer ? card.answer : card.question;

  updateStats(activeCards.length, currentIndex);
}

// ===============================
// STATS OBEN
// ===============================
function updateStats(activeLength, index) {
  const doneEl = document.getElementById("doneCount");
  const markEl = document.getElementById("markCount");
  const counterEl = document.getElementById("cardCounter");
  const barEl = document.getElementById("progressBar");

  if (doneEl) doneEl.textContent = doneCards.length;
  if (markEl) markEl.textContent = markedCards.length;

  if (counterEl) {
    counterEl.textContent =
      activeLength === 0 ? "0 / 0" : `${index + 1} / ${activeLength}`;
  }

  if (barEl && activeLength > 0) {
    barEl.style.width = ((index + 1) / activeLength) * 100 + "%";
  } else if (barEl) {
    barEl.style.width = "0%";
  }
}

// ===============================
// AKTIONEN
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
    localStorage.setItem(`${currentSet}_markedCards`, JSON.stringify(markedCards));
  }
  nextCard();
}

function doneCard() {
  const activeCards = getActiveCards();
  if (!activeCards.length) return;

  const card = activeCards[currentIndex];
  if (!doneCards.includes(card.id)) {
    doneCards.push(card.id);
    localStorage.setItem(`${currentSet}_doneCards`, JSON.stringify(doneCards));
  }
  nextCard();
}

// ===============================
// MODUS WECHSEL
// ===============================
function toggleMode() {
  onlyMarked = !onlyMarked;
  currentIndex = 0;
  showAnswer = false;

  const btn = document.getElementById("toggleMode");
  if (btn) {
    btn.textContent = onlyMarked
      ? "📚 Alle Karten"
      : "⭐ Nur Merkliste";
  }

  renderCard();
}

// ===============================
// RESET (Statistik)
// ===============================
function resetProgress() {
  if (!confirm("Willst du wirklich ALLES zurücksetzen?")) return;

  localStorage.removeItem(`${currentSet}_doneCards`);
  localStorage.removeItem(`${currentSet}_markedCards`);
  location.reload();
}

// ===============================
// START
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  renderCard();

  // Burger-Menü fix
  const burger = document.getElementById("burgerBtn");
  const menu = document.getElementById("moreMenu");
  if (burger && menu) {
    burger.addEventListener("click", () => {
      menu.classList.toggle("hidden");
    });
  }
});
