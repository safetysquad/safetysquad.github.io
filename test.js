let index = 0;
let mode = "all";

const marked = JSON.parse(localStorage.getItem("markedCards")) || [];
const stats = JSON.parse(localStorage.getItem("testStats")) || {
  correct: 0,
  wrong: 0,
  runs: 0
};

let activeCards = [];

function loadCards() {
  if (mode === "mark") {
    activeCards = cards.filter(c => marked.includes(c.id));
  } else {
    activeCards = [...cards];
  }
  index = 0;
}

function render() {
  if (activeCards.length === 0) {
    document.getElementById("cardText").innerText =
      "Keine Karten vorhanden.";
    return;
  }

  if (index >= activeCards.length) {
    finish();
    return;
  }

  document.getElementById("cardText").innerText =
    activeCards[index].question;

  updateProgress();
}

function correct() {
  stats.correct++;
  index++;
  save();
  render();
}

function wrong() {
  stats.wrong++;
  index++;
  save();
  render();
}

function mark() {
  const id = activeCards[index].id;
  if (!marked.includes(id)) {
    marked.push(id);
    localStorage.setItem("markedCards", JSON.stringify(marked));
  }
}

function updateProgress() {
  const percent = Math.round((index / activeCards.length) * 100);
  document.getElementById("progressBar").style.width = percent + "%";
  document.getElementById("progressText").innerText = percent + "%";
}

function toggleMode() {
  mode = mode === "all" ? "mark" : "all";
  loadCards();
  render();
}

function finish() {
  stats.runs++;
  save();
  location.href = "stats.html";
}

function save() {
  localStorage.setItem("testStats", JSON.stringify(stats));
}
let currentIndex = 0;
let merkliste = JSON.parse(localStorage.getItem("merkliste")) || [];

function addToMerkliste() {
  const card = cards[currentIndex];

  if (!merkliste.includes(card.id)) {
    merkliste.push(card.id);
    localStorage.setItem("merkliste", JSON.stringify(merkliste));
  }

  nextCard(); // 👉 automatisch nächste Karte
}
<button onclick="addToMerkliste()">⭐ Merkliste</button>

// INIT
loadCards();
render();
