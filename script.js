// ===============================
// KONFIGURATION: pro Lernkarten-Datei
// ===============================
const STORAGE_PREFIX = "lernkarteikarten1"; // Ändere z.B. auf "lernkarteikarten2" für andere Datei
const CARDS = typeof cards !== "undefined" ? cards : cards1; // wählt automatisch cards oder cards1

// ===============================
// STATE
// ===============================
let currentIndex = 0;
let showAnswer = false;
let onlyMarked = false;

let doneCards = JSON.parse(localStorage.getItem(`${STORAGE_PREFIX}_doneCards`)) || [];
let markedCards = JSON.parse(localStorage.getItem(`${STORAGE_PREFIX}_markedCards`)) || [];

// ===============================
// AKTIVE KARTEN
// ===============================
function getActiveCards() {
  if (onlyMarked) {
    return CARDS.filter(
      c => markedCards.includes(c.id) && !doneCards.includes(c.id)
    );
  }
  return CARDS.filter(c => !doneCards.includes(c.id));
}

// ===============================
// RENDER KARTE
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
    localStorage.setItem(`${STORAGE_PREFIX}_markedCards`, JSON.stringify(markedCards));
  }
  nextCard();
}

function doneCard() {
  const activeCards = getActiveCards();
  if (!activeCards.length) return;

  const card = activeCards[currentIndex];
  if (!doneCards.includes(card.id)) {
    doneCards.push(card.id);
    localStorage.setItem(`${STORAGE_PREFIX}_doneCards`, JSON.stringify(doneCards));
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
// STATISTIKSEITE
// ===============================
function renderStats() {
  const total = CARDS.length;
  const done = doneCards.length;
  const mark = markedCards.length;
  const percent = total === 0 ? 0 : Math.round((done / total) * 100);

  const totalEl = document.getElementById("totalCards");
  const doneEl = document.getElementById("doneCards");
  const markEl = document.getElementById("markCards");
  const percentEl = document.getElementById("progressPercent");
  const barEl = document.getElementById("progressBar");

  if (!totalEl) return;

  totalEl.textContent = total;
  doneEl.textContent = done;
  markEl.textContent = mark;
  percentEl.textContent = percent + "%";
  if (barEl) barEl.style.width = percent + "%";
}

// ===============================
// ===============================
// RESET (Statistik pro Lernkarten-Set)
// ===============================
function resetProgress(prefix) {
  if (!prefix) return; // kein Prefix angegeben
  if (!confirm("Willst du wirklich ALLES für dieses Lernkarten-Set zurücksetzen?")) return;

  localStorage.removeItem(`${prefix}_doneCards`);
  localStorage.removeItem(`${prefix}_markedCards`);

  // Neu rendern
  if (prefix === "lernkarteikarten1") {
    renderStatsSet('lernkarteikarten1', 'totalCards1', 'doneCards1', 'markCards1', 'progressPercent1', 'progressBar1');
  } else if (prefix === "lernkarteikarten2") {
    renderStatsSet('lernkarteikarten2', 'totalCards2', 'doneCards2', 'markCards2', 'progressPercent2', 'progressBar2');
  }
}

// ===============================
// START
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  renderCard();
  renderStats();
});
