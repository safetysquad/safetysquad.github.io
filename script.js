// ===============================
// STATE
// ===============================
let currentIndex = 0;
let showAnswer = false;
let onlyMarked = false;

let doneCards = JSON.parse(localStorage.getItem("safety_doneCards")) || [];
let markedCards = JSON.parse(localStorage.getItem("safety_markedCards")) || [];


// ===============================
// AKTIVE KARTEN (WICHTIGER FIX)
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
    localStorage.setItem("safety_markedCards", JSON.stringify(markedCards));
  }
  nextCard();
}

function doneCard() {
  const activeCards = getActiveCards();
  if (!activeCards.length) return;

  const card = activeCards[currentIndex];
  if (!doneCards.includes(card.id)) {
    doneCards.push(card.id);
    localStorage.setItem("safety_doneCards", JSON.stringify(doneCards));
  }
  nextCard();
}


// ===============================
// ⭐ MODUS WECHSEL (JETZT FUNKTIONIERT ES)
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
  const total = cards.length;
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
  barEl.style.width = percent + "%";
}


// ===============================
// RESET (Statistik)
// ===============================
function resetProgress() {
  if (!confirm("Willst du wirklich ALLES zurücksetzen?")) return;

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
  renderQuizStats(); 
});

function toggleMenu() {
  document.getElementById("moreMenu").classList.toggle("hidden");
}
// ===============================
// QUIZ-STATISTIK
// ===============================
function renderQuizStats() {
  const box = document.getElementById("quizStats");
  if (!box) return;

  box.innerHTML = "";

  let hasData = false;

  for (let i = 1; i <= 13; i++) {
    const quizId = `quiz${i}`;
    const attempts = localStorage.getItem(`safety_${quizId}_attempts`);
    const best = localStorage.getItem(`safety_${quizId}_best`);

    if (!attempts && !best) continue;

    hasData = true;

    const div = document.createElement("div");
    div.innerHTML = `
      <b>${quizId.toUpperCase()}</b><br>
      Versuche: ${attempts || 0}<br>
      Bestwert: ${best || 0}%
    `;

    box.appendChild(div);
  }

  if (!hasData) {
    box.innerHTML = "<p style='text-align:center;'>Noch keine Quiz-Daten vorhanden.</p>";
  }
}


// ===============================
// QUIZ RESET
// ===============================
function resetQuizStats() {
  if (!confirm("Quiz-Statistik wirklich zurücksetzen?")) return;

  Object.keys(localStorage).forEach(key => {
    if (key.startsWith("safety_quiz")) {
      localStorage.removeItem(key);
    }
  });

  renderQuizStats();
}
