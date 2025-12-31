let currentIndex = 0;
let useMerklisteOnly = false;

let merkliste = JSON.parse(localStorage.getItem("merkliste")) || [];
let richtig = JSON.parse(localStorage.getItem("richtig")) || [];
let falsch = JSON.parse(localStorage.getItem("falsch")) || [];

function getActiveCards() {
  return useMerklisteOnly
    ? cards.filter(c => merkliste.includes(c.id))
    : cards;
}

function renderCard() {
  const activeCards = getActiveCards();
  if (activeCards.length === 0) {
    document.getElementById("question").innerText = "Keine Karten vorhanden";
    return;
  }

  const card = activeCards[currentIndex];
  document.getElementById("question").innerText = card.question;

  updateCounter();
  updateProgress();
}

function nextCard() {
  const activeCards = getActiveCards();
  if (currentIndex < activeCards.length - 1) {
    currentIndex++;
    renderCard();
  }
}

function prevCard() {
  if (currentIndex > 0) {
    currentIndex--;
    renderCard();
  }
}

function addToMerkliste() {
  const card = getActiveCards()[currentIndex];
  if (!merkliste.includes(card.id)) {
    merkliste.push(card.id);
    localStorage.setItem("merkliste", JSON.stringify(merkliste));
  }
  nextCard();
}

function markTrue() {
  const card = getActiveCards()[currentIndex];
  if (!richtig.includes(card.id)) {
    richtig.push(card.id);
    localStorage.setItem("richtig", JSON.stringify(richtig));
  }
  nextCard();
}

function markFalse() {
  const card = getActiveCards()[currentIndex];
  if (!falsch.includes(card.id)) {
    falsch.push(card.id);
    localStorage.setItem("falsch", JSON.stringify(falsch));
  }
  nextCard();
}

function toggleMerkliste() {
  useMerklisteOnly = !useMerklisteOnly;
  currentIndex = 0;
  renderCard();
}

function updateCounter() {
  const activeCards = getActiveCards();
  document.getElementById("cardCounter").innerText =
    `Karte ${currentIndex + 1} von ${activeCards.length}`;
  document.getElementById("merkCount").innerText = merkliste.length;
}

function updateProgress() {
  const activeCards = getActiveCards();
  const percent = Math.round(((currentIndex + 1) / activeCards.length) * 100);
  document.getElementById("progressBar").style.width = percent + "%";
  document.getElementById("progressText").innerText = percent + "%";
}

renderCard();
