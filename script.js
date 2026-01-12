// ===============================
// ERKENNT AUTOMATISCH WELCHE KARTEIKARTEN SEITE
// ===============================
let currentIndex = 0;
let showAnswer = false;
let onlyMarked = false;

let doneCards = JSON.parse(localStorage.getItem("doneCards")) || [];
let markedCards = JSON.parse(localStorage.getItem("markedCards")) || [];

const isCards1Page = typeof cards1 !== "undefined"; // prüft, ob data1.js geladen ist
const activeCardsSet = isCards1Page ? cards1 : cards;

// ===============================
// AKTIVE KARTEN
// ===============================
function getActiveCards() {
  if (onlyMarked) {
    return activeCardsSet.filter(c => markedCards.includes(c.id) && !doneCards.includes(c.id));
  }
  return activeCardsSet.filter(c => !doneCards.includes(c.id));
}

// ===============================
// RENDER KARTE
// ===============================
function renderCard() {
  const activeCards = getActiveCards();
  const cardText = document.getElementById("cardText");
  if (!cardText) return;

  if (!activeCards.length) {
    cardText.textContent = onlyMarked ? "⭐ Keine Karten in der Merkliste" : "🎉 Alle Karten erledigt";
    updateStats(0,0);
    return;
  }

  if (currentIndex >= activeCards.length) currentIndex = 0;
  if (currentIndex < 0) currentIndex = 0;

  const card = activeCards[currentIndex];
  cardText.textContent = showAnswer ? card.answer : card.question;

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
  if (counterEl) counterEl.textContent = activeLength===0?"0 / 0":`${index+1} / ${activeLength}`;
  if (barEl) barEl.style.width = activeLength>0?((index+1)/activeLength*100)+"%":"0%";
}

// ===============================
// AKTIONEN
// ===============================
function flipCard(){ showAnswer=!showAnswer; renderCard(); }
function nextCard(){ showAnswer=false; currentIndex++; renderCard(); }
function prevCard(){ showAnswer=false; currentIndex--; renderCard(); }

function markCard(){
  const activeCards = getActiveCards();
  if(!activeCards.length) return;
  const card = activeCards[currentIndex];
  if(!markedCards.includes(card.id)){ markedCards.push(card.id); localStorage.setItem("markedCards",JSON.stringify(markedCards)); }
  nextCard();
}

function doneCard(){
  const activeCards = getActiveCards();
  if(!activeCards.length) return;
  const card = activeCards[currentIndex];
  if(!doneCards.includes(card.id)){ doneCards.push(card.id); localStorage.setItem("doneCards",JSON.stringify(doneCards)); }
  nextCard();
}

// ===============================
// MODUS WECHSEL
// ===============================
function toggleMode(){ onlyMarked=!onlyMarked; currentIndex=0; showAnswer=false; renderCard(); }

// ===============================
// STATISTIK RESET
// ===============================
function resetProgress(){ 
  if(!confirm("Willst du wirklich ALLES zurücksetzen?")) return; 
  localStorage.removeItem("doneCards"); 
  localStorage.removeItem("markedCards"); 
  location.reload();
}

// ===============================
// START
// ===============================
document.addEventListener("DOMContentLoaded",()=>{
  renderCard();
  updateStats(activeCardsSet.length,currentIndex);
});

function toggleMenu(){
  const menu = document.getElementById("moreMenu");
  if(menu) menu.classList.toggle("hidden");
}
