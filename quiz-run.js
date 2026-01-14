console.log("QUIZ-RUN.JS VERSION 8 GELADEN");

// ==============================
// GRUNDVARIABLEN
// ==============================
let quiz = null;
let quizId = null;
let currentIndex = 0;
let userAnswers = {};
let wrongQuestions = [];
let isRetryMode = false;
let isGlobalMode = false;

// ==============================
// Hilfsfunktion
// ==============================
function getTextById(ids = [], answers = []) {
  return answers
    .filter(a => ids.includes(a.id))
    .map(a => a.text);
}

// ==============================
// Quiz Laden
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  quizId = params.get("id");
  const retryParam = params.get("retryWrong");
  const globalWrongParam = params.get("globalWrong");

  // =======================
  // Globaler Fehler-Lernmodus
  // =======================
  if (globalWrongParam === "1") {
    isRetryMode = true;
    isGlobalMode = true;

    let allWrongQuestions = [];
    Object.keys(quizzes).forEach(qId => {
      const savedWrong = JSON.parse(localStorage.getItem(`safety_${qId}_wrong`) || "[]");
      if (savedWrong.length > 0) {
        const questions = quizzes[qId].filter(q => savedWrong.includes(q.id));
        allWrongQuestions = allWrongQuestions.concat(questions);
      }
    });

    if (allWrongQuestions.length === 0) {
      alert("Es gibt aktuell keine falsch beantworteten Fragen.");
      window.location.href = "quiz.html";
      return;
    }

    quiz = allWrongQuestions;
  }

  // =======================
  // Einzelne falsche Fragen
  // =======================
  if (retryParam === "1" && quizId) {
    const savedWrong = JSON.parse(localStorage.getItem(`safety_${quizId}_wrong`) || "[]");
    if (savedWrong.length > 0) {
      isRetryMode = true;
      quiz = quizzes[quizId].filter(q => savedWrong.includes(q.id));
    }
  }

  // =======================
  // Normales Quiz
  // =======================
  if (!quiz && quizId) quiz = quizzes[quizId];

  if (!quiz) {
    document.body.innerHTML = "<h2>❌ Quiz nicht gefunden</h2>";
    return;
  }

  document.getElementById("quizTitle").innerText =
    `📝 ${quizId ? quizId.toUpperCase() : "Fehler-Lernmodus"}`;

  // =======================
  // 👉 Ergebnis direkt anzeigen?
  // =======================
  if (!isRetryMode && quizId) {
    const finished = localStorage.getItem(`safety_${quizId}_finished`);
    if (finished === "1") {
      const bestPercent = Number(localStorage.getItem(`safety_${quizId}_best`) || 0);
      const maxPoints = quiz.reduce((s, q) => s + q.points, 0);
      const points = Math.round((bestPercent / 100) * maxPoints);
      renderResult(points, maxPoints, bestPercent, []);
      return;
    }
  }

  renderQuestion();
  updateProgress();
});

// ==============================
// Frage rendern
// ==============================
function renderQuestion() {
  const q = quiz[currentIndex];
  if (!q) return;

  document.getElementById("questionText").innerText = q.question;
  const answersBox = document.getElementById("answers");
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
// Antwort auswählen
// ==============================
function toggleAnswer(answerId) {
  const q = quiz[currentIndex];
  if (!userAnswers[q.id]) userAnswers[q.id] = [];

  const selected = userAnswers[q.id];
  if (selected.includes(answerId)) {
    userAnswers[q.id] = selected.filter(a => a !== answerId);
  } else {
    selected.push(answerId);
  }

  renderQuestion();
}

// ==============================
// Navigation
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
// Fortschritt
// ==============================
function updateProgress() {
  const percent = ((currentIndex + 1) / quiz.length) * 100;
  document.getElementById("progressBar").style.width = percent + "%";
}

// ==============================
// Auswertung
// ==============================
function evaluateQuiz() {
  let points = 0;
  let maxPoints = 0;
  const results = [];
  const newlyWrong = [];

  quiz.forEach(q => {
    maxPoints += q.points;
    const given = (userAnswers[q.id] || []).sort().join(",");
    const correct = q.correct.sort().join(",");
    const isCorrect = given === correct;

    if (isCorrect) points += q.points;
    else newlyWrong.push(q.id);

    results.push({
      question: q.question,
      correctAnswers: q.correct,
      givenAnswers: userAnswers[q.id] || [],
      answers: q.answers,
      isCorrect
    });
  });

  const percent = Math.round((points / maxPoints) * 100);

  if (!isRetryMode && quizId) {
    saveStats(percent);
    localStorage.setItem(`safety_${quizId}_finished`, "1");
  }

  renderResult(points, maxPoints, percent, results);
}

// ==============================
// Ergebnis anzeigen
// ==============================
function renderResult(points, maxPoints, percent, results) {
  const main = document.querySelector("main");

  main.innerHTML = `
    <div class="result-summary">
      <h2>Ergebnis</h2>
      <p><b>${points}</b> von <b>${maxPoints}</b> Punkten</p>
      <p><b>${percent}%</b> erreicht</p>

      <div class="result-actions">
        <button class="btn" onclick="restartQuiz()">🔁 Test wiederholen</button>
        <a href="quiz.html" class="btn secondary">⬅ Zur Quiz-Auswahl</a>
      </div>
    </div>
  `;
}

// ==============================
// Statistik speichern
// ==============================
function saveStats(percent) {
  const attemptsKey = `safety_${quizId}_attempts`;
  const bestKey = `safety_${quizId}_best`;

  localStorage.setItem(attemptsKey,
    Number(localStorage.getItem(attemptsKey) || 0) + 1);

  localStorage.setItem(bestKey,
    Math.max(percent, Number(localStorage.getItem(bestKey) || 0)));
}

// ==============================
// Quiz neu starten
// ==============================
function restartQuiz() {
  localStorage.removeItem(`safety_${quizId}_finished`);
  currentIndex = 0;
  userAnswers = {};
  isRetryMode = false;
  quiz = quizzes[quizId];
  renderQuizUI();
}

// ==============================
// UI neu rendern
// ==============================
function renderQuizUI() {
  const main = document.querySelector("main");
  main.innerHTML = `
    <div class="card"><p id="questionText"></p></div>
    <div id="answers" class="action-buttons"></div>
    <div class="nav">
      <button class="btn warn" onclick="prevQuestion()">⬅ Zurück</button>
      <button class="btn warn" onclick="nextQuestion()">➡ Weiter</button>
    </div>
  `;
  renderQuestion();
  updateProgress();
}
