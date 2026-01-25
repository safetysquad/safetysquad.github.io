// ===============================
// === INITIAL STATE & DATENSET ===
// ===============================
const currentSet = document.body.dataset.set; // "cards", "cards1"

const cardsActive =
  currentSet === "cards1"
    ? cards1
    : cards;

let currentIndex = 0;
let showAnswer = false;
let viewMode = "all"; // "all" | "marked" | "done"

let doneCards =
  JSON.parse(localStorage.getItem(`${currentSet}_doneCards`)) || [];

let markedCards =
  JSON.parse(localStorage.getItem(`${currentSet}_markedCards`)) || [];


// ===============================
// === AKTIVE KARTEN JE MODUS ===
// ===============================
function getActiveCards() {
  if (viewMode === "marked") {
    return cardsActive.filter(c => markedCards.includes(c.id));
  }

  if (viewMode === "done") {
    return cardsActive.filter(c => doneCards.includes(c.id));
  }

  // default: offene Karten
  return cardsActive.filter(c => !doneCards.includes(c.id));
}


// ===============================
// === KARTE RENDERn ===
// ===============================
function renderCard() {
  const activeCards = getActiveCards();
  const cardText = document.getElementById("cardText");
  if (!cardText) return;

  if (activeCards.length === 0) {
    if (viewMode === "marked") {
      cardText.textContent = "⭐ Keine Karten in der Merkliste";
    } else if (viewMode === "done") {
      cardText.textContent = "🎉 Keine erledigten Karten";
    } else {
      cardText.textContent = "🎉 Alle Karten erledigt";
    }

    updateStats(0, 0);
    highlightActiveBox();
    return;
  }

  if (currentIndex >= activeCards.length) currentIndex = 0;
  if (currentIndex < 0) currentIndex = 0;

  const card = activeCards[currentIndex];
  cardText.textContent = showAnswer ? card.answer : card.question;

  updateStats(activeCards.length, currentIndex);
  highlightActiveBox();
}


// ===============================
// === STATS & PROGRESS ===
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

  if (barEl) {
    barEl.style.width =
      activeLength > 0 ? ((index + 1) / activeLength) * 100 + "%" : "0%";
  }
}


// ===============================
// === KARTEN-AKTIONEN ===
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
    localStorage.setItem(
      `${currentSet}_markedCards`,
      JSON.stringify(markedCards)
    );
  }

  showAnswer = false;
  renderCard();
}

function doneCard() {
  const activeCards = getActiveCards();
  if (!activeCards.length) return;

  const card = activeCards[currentIndex];

  if (!doneCards.includes(card.id)) {
    doneCards.push(card.id);
    localStorage.setItem(
      `${currentSet}_doneCards`,
      JSON.stringify(doneCards)
    );
  }

  showAnswer = false;
  currentIndex = 0;
  renderCard();
}


// ===============================
// === STAT-BOXEN (ALL / MARK / DONE) ===
// ===============================
function initStatBoxes() {
  const doneBox = document.getElementById("doneBox");
  const markBox = document.getElementById("markBox");
  const allBox  = document.getElementById("allBox");

  if (doneBox) {
    doneBox.onclick = () => switchMode("done");
  }

  if (markBox) {
    markBox.onclick = () => switchMode("marked");
  }

  if (allBox) {
    allBox.onclick = () => switchMode("all");
  }
}

function switchMode(mode) {
  viewMode = mode;
  currentIndex = 0;
  showAnswer = false;
  renderCard();
}


// ===============================
// === AKTIVE BOX HIGHLIGHT ===
// ===============================
function highlightActiveBox() {
  const doneBox = document.getElementById("doneBox");
  const markBox = document.getElementById("markBox");
  const allBox  = document.getElementById("allBox");

  // alle Boxen "deaktivieren"
  [doneBox, markBox, allBox].forEach(box => {
    if (!box) return;
    box.classList.remove("active");
  });

  // aktive Box markieren
  if (viewMode === "done" && doneBox) doneBox.classList.add("active");
  if (viewMode === "marked" && markBox) markBox.classList.add("active");
  if (viewMode === "all" && allBox) allBox.classList.add("active");
}



// ===============================
// === STATISTIK-SEITE ===
// ===============================
function renderStats() {
  const total = cardsActive.length;
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
// === RESET ===
// ===============================
function resetProgress() {
  if (!confirm("Willst du wirklich ALLES zurücksetzen?")) return;

  localStorage.removeItem(`${currentSet}_doneCards`);
  localStorage.removeItem(`${currentSet}_markedCards`);
  location.reload();
}


// ===============================
// === DOM READY ===
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  renderCard();
  renderStats();
  initStatBoxes();
});
