console.log("QUIZ-RUN.JS VERSION 4 GELADEN");

// ==============================
// GRUNDVARIABLEN
// ==============================
let quiz = null;
let quizId = null;
let currentIndex = 0;
let userAnswers = {};
let wrongQuestions = [];
let isRetryMode = false;

function getTextById(ids = [], answers = []) {
  return answers
    .filter(a => ids.includes(a.id))
    .map(a => a.text);
}

// ==============================
// QUIZ LADEN
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  quizId = params.get("id");

  quiz = quizzes[quizId];

  if (!quiz) {
    document.body.innerHTML = "<h2>❌ Quiz nicht gefunden</h2>";
    return;
  }

  document.getElementById("quizTitle").innerText = `📝 ${quizId.toUpperCase()}`;

  const showResult = params.get("showResult");
  if (showResult === "1") {
    const bestPercent = Number(localStorage.getItem(`safety_${quizId}_best`) || 0);
    let maxPoints = 0;
    quiz.forEach(q => maxPoints += q.points);
    const points = Math.round((bestPercent / 100) * maxPoints);
    renderResult(points, maxPoints, bestPercent, []);
    return;
  }

  renderQuestion();
  updateProgress();
});

// ==============================
// FRAGE RENDERn
// ==============================
function renderQuestion() {
  const q = quiz[currentIndex];
  if (!q) return;

  const questionTextEl = document.getElementById("questionText");
  const answersBox = document.getElementById("answers");

  let pointsEl = document.getElementById("questionPoints");
  if (!pointsEl) {
    pointsEl = document.createElement("div");
    pointsEl.id = "questionPoints";
    const progressEl = document.querySelector(".progress");
    progressEl.insertAdjacentElement("afterend", pointsEl);
  }
  pointsEl.innerText = `🧠 ${q.points} Punkt${q.points > 1 ? "e" : ""}`;

  questionTextEl.innerText = q.question;
  answersBox.innerHTML = "";

  q.answers.forEach(a => {
    const btn = document.createElement("button");
    btn.className = "btn secondary";
    if (userAnswers[q.id]?.includes(a.id)) btn.classList.add("active");
    btn.innerText = `${a.id}. ${a.text}`;
    btn.onclick = () => toggleAnswer(a.id);
    answersBox.appendChild(btn);
  });

  document.getElementById("counter").innerText =
    `Frage ${currentIndex + 1} von ${quiz.length}`;
}

// ==============================
// ANTWORT AUSWÄHLEN
// ==============================
function toggleAnswer(answerId) {
  const q = quiz[currentIndex];
  if (!userAnswers[q.id]) userAnswers[q.id] = [];
  const selected = userAnswers[q.id];

  if (selected.includes(answerId)) {
    userAnswers[q.id] = selected.filter(a => a !== answerId);
  } else {
    userAnswers[q.id].push(answerId);
  }

  renderQuestion();
}

// ==============================
// NAVIGATION
// ==============================
function nextQuestion() {
  if (currentIndex < quiz.length - 1) {
    currentIndex++;
    renderQuestion();
    updateProgress();
  } else {
    evaluateQuiz();
  }
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion();
    updateProgress();
  }
}

// ==============================
// FORTSCHRITT
// ==============================
function updateProgress() {
  const percent = ((currentIndex + 1) / quiz.length) * 100;
  document.getElementById("progressBar").style.width = percent + "%";
}

// ==============================
// AUSWERTUNG
// ==============================
function evaluateQuiz() {
  let points = 0;
  let maxPoints = 0;
  const results = [];
  wrongQuestions = [];

  quiz.forEach(q => {
    maxPoints += q.points;
    const given = (userAnswers[q.id] || []).sort().join(",");
    const correct = q.correct.sort().join(",");
    const isCorrect = given === correct;

    if (isCorrect) points += q.points;
    else wrongQuestions.push(q); // ❌ sammeln

    results.push({
      question: q.question,
      correctAnswers: q.correct,
      givenAnswers: userAnswers[q.id] || [],
      answers: q.answers,
      isCorrect
    });
  });

  const percent = Math.round((points / maxPoints) * 100);

  if (!isRetryMode) saveStats(percent);

  renderResult(points, maxPoints, percent, results);
}

// ==============================
// ERGEBNIS ANZEIGEN
// ==============================
function renderResult(points, maxPoints, percent, results) {
  const main = document.querySelector("main");

  let html = `
    <div class="result-summary">
      <h2>Ergebnis</h2>
      <p><b>${points}</b> von <b>${maxPoints}</b> Punkten</p>
      <p><b>${percent}%</b> erreicht</p>

      ${
        percent === 100
          ? `<div class="badge success">✅ Bestanden</div>`
          : `<div class="badge warn">❌ Noch nicht bestanden</div>`
      }

      <div class="result-actions">
        <button class="btn" onclick="restartQuiz()">🔁 Test wiederholen</button>
        <a href="quiz.html" class="btn secondary">⬅ Zur Quiz-Auswahl</a>
      </div>
    </div>
  `;

  if (!isRetryMode && wrongQuestions.length > 0) {
    html += `
      <button class="btn warn" onclick="retryWrongQuestions()">
        ❌ Falsche Fragen wiederholen (${wrongQuestions.length})
      </button>
    `;
  }

  results.forEach(r => {
    if (!r.isCorrect) {
      const userTexts = getTextById(r.givenAnswers, r.answers);
      const correctTexts = getTextById(r.correctAnswers, r.answers);

      html += `
        <div class="result-card wrong">
          <p class="question">${r.question}</p>

          <p class="answer user">❌ Deine Antwort:</p>
          <ul class="answer-list user">
            ${userTexts.length ? userTexts.map(t => `<li>${t}</li>`).join("") : "<li>—</li>"}
          </ul>

          <p class="answer correct">✅ Richtige Antwort:</p>
          <ul class="answer-list correct">
            ${correctTexts.map(t => `<li>${t}</li>`).join("")}
          </ul>
        </div>
      `;
    }
  });

  main.innerHTML = html;
}

// ==============================
// STATISTIK SPEICHERN
// ==============================
function saveStats(percent) {
  const attemptsKey = `safety_${quizId}_attempts`;
  const bestKey = `safety_${quizId}_best`;

  const attempts = Number(localStorage.getItem(attemptsKey) || 0) + 1;
  localStorage.setItem(attemptsKey, attempts);

  const best = Math.max(percent, Number(localStorage.getItem(bestKey) || 0));
  localStorage.setItem(bestKey, best);
}

// ==============================
// TEST WIEDERHOLEN
// ==============================
function restartQuiz() {
  currentIndex = 0;
  userAnswers = {};
  isRetryMode = false;

  if (!quiz && quizId) quiz = quizzes[quizId];

  const main = document.querySelector("main");
  main.innerHTML = `
    <div class="card">
      <p id="questionText">Lade Frage…</p>
    </div>

    <div id="answers" class="action-buttons"></div>

    <div class="nav">
      <button class="btn warn" onclick="prevQuestion()">⬅ Zurück</button>
      <button class="btn warn" onclick="nextQuestion()">➡ Weiter</button>
    </div>
  `;

  document.getElementById("progressBar").style.width = "0%";
  document.getElementById("counter").innerText = `Frage 1 von ${quiz.length}`;

  renderQuestion();
  updateProgress();
}

// ==============================
// FALSCH BEANTWORTETE FRAGEN WIEDERHOLEN
// ==============================
function retryWrongQuestions() {
  if (wrongQuestions.length === 0) return;

  isRetryMode = true;
  quiz = wrongQuestions; // nur diese Fragen
  currentIndex = 0;
  userAnswers = {};

  const main = document.querySelector("main");
  main.innerHTML = `
    <div class="card">
      <p id="questionText">Lade Frage…</p>
    </div>

    <div id="answers" class="action-buttons"></div>

    <div class="nav">
      <button class="btn warn" onclick="prevQuestion()">⬅ Zurück</button>
      <button class="btn warn" onclick="nextQuestion()">➡ Weiter</button>
    </div>
  `;

  document.getElementById("progressBar").style.width = "0%";
  document.getElementById("counter").innerText = `Frage 1 von ${quiz.length}`;

  renderQuestion();
  updateProgress();
}
