// ===============================
// STATE
// ===============================
let currentIndex = 0;
let showAnswer = false;
let onlyMarked = false;

let doneCards = JSON.parse(localStorage.getItem("safety_doneCards")) || [];
let markedCards = JSON.parse(localStorage.getItem("safety_markedCards")) || [];

// ===============================
// AKTIVE KARTEN
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
  const cardDiv = document.querySelector(".card");
  if (!cardText || !cardDiv) return;

  // Alte Icons entfernen
  cardDiv.querySelectorAll(".icon-top-right, .icon-bottom-right").forEach(el => el.remove());

  if (activeCards.length === 0) {
    cardText.textContent = onlyMarked
      ? "⭐ Keine Karten in der Merkliste"
      : "🎉 Alle Karten erledigt";
    updateStats(0, 0);
    cardDiv.className = "card question";
    return;
  }

  if (currentIndex >= activeCards.length) currentIndex = 0;
  if (currentIndex < 0) currentIndex = 0;

  const card = activeCards[currentIndex];

  // Flip-Animation
  cardDiv.style.transform = "rotateY(0deg)";
  setTimeout(() => {
    cardText.textContent = showAnswer ? card.answer : card.question;
  }, 100);

  // Klassen setzen
  cardDiv.className = "card"; // reset
  if (markedCards.includes(card.id)) cardDiv.classList.add("marked");
  else if (showAnswer) cardDiv.classList.add("answer");
  else cardDiv.classList.add("question");

  // ⭐ Merkliste oben rechts
  if (markedCards.includes(card.id)) {
    const star = document.createElement("div");
    star.className = "icon-top-right";
    star.textContent = "⭐";
    cardDiv.appendChild(star);
  }

  // ✔ Erledigt unten rechts
  if (doneCards.includes(card.id)) {
    const check = document.createElement("div");
    check.className = "icon-bottom-right";
    check.textContent = "✔";
    cardDiv.appendChild(check);
  }

  // 🔁 Antwort oben rechts (neben Merkliste)
  if (showAnswer) {
    const reply = document.createElement("div");
    reply.className = "icon-top-right";
    reply.style.right = "40px";
    reply.textContent = "🔁";
    cardDiv.appendChild(reply);
  }

  updateStats(activeCards.length, currentIndex);
}

// ===============================
// STATS
// ===============================
function updateStats(activeLength, index) {
  const doneEl = document.getElementById("doneCount");
  const markEl = document.getElementById("markCount");
  const counterEl = document.getElementById("cardCounter");
  const barEl = document.getElementById("progressBar");

  if (doneEl) doneEl.textContent = doneCards.length;
  if (markEl) markEl.textContent = markedCards.length;
  if (counterEl) counterEl.textContent = activeLength === 0 ? "0 / 0" : `${index + 1} / ${activeLength}`;

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
  const cardDiv = document.querySelector(".card");
  if (cardDiv) cardDiv.style.transform = "rotateY(180deg)";
  setTimeout(renderCard, 150);
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
// MODUS WECHSEL
// ===============================
function toggleMode() {
  onlyMarked = !onlyMarked;
  currentIndex = 0;
  showAnswer = false;

  const btn = document.getElementById("toggleMode");
  if (btn) btn.textContent = onlyMarked ? "📚 Alle Karten" : "⭐ Nur Merkliste";

  renderCard();
}

// ===============================
// MORE MENU
// ===============================
function toggleMenu() {
  document.getElementById("moreMenu").classList.toggle("hidden");
}

// ===============================
// START
// ===============================
document.addEventListener("DOMContentLoaded", () => {
  renderCard();
});
