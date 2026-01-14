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
  // Falsche Fragen eines Quiz wiederholen
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
  if (!quizId && !isGlobalMode) {
    document.body.innerHTML = "<h2>❌ Quiz nicht gefunden</h2>";
    return;
  }

  if (!quiz && quizId) quiz = quizzes[quizId];

  document.getElementById("quizTitle").innerText =
    `📝 ${quizId ? quizId.toUpperCase() : "Fehler-Lernmodus"}`;

  // =======================
  // Ergebnis automatisch anzeigen, falls vorhanden
  // =======================
  if (!isRetryMode && quizId) {
    const lastResult = JSON.parse(
      localStorage.getItem(`safety_${quizId}_lastResult`) || "null"
    );

    if (lastResult) {
      renderResult(
        lastResult.points,
        lastResult.maxPoints,
        lastResult.percent,
        lastResult.results
      );
      return;
    }
  }

  renderQuizUI();
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

  if (userAnswers[q.id].includes(answerId)) {
    userAnswers[q.id] = userAnswers[q.id].filter(a => a !== answerId);
  } else {
    userAnswers[q.id].push(answerId);
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
    saveLastResult(points, maxPoints, percent, results);
    updatePersistentWrong(newlyWrong, results);
  }

  renderResult(points, maxPoints, percent, results);
}

// ==============================
// Ergebnis persistent speichern
// ==============================
function saveLastResult(points, maxPoints, percent, results) {
  localStorage.setItem(
    `safety_${quizId}_lastResult`,
    JSON.stringify({ points, maxPoints, percent, results })
  );
}

// ==============================
// Statistik speichern
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
// Quiz UI rendern
// ==============================
function renderQuizUI() {
  const main = document.querySelector("main");
  main.innerHTML = `
    <div class="card">
      <p id="questionText"></p>
    </div>
    <div id="answers" class="action-buttons"></div>
    <div class="nav">
      <button class="btn warn" onclick="prevQuestion()">⬅ Zurück</button>
      <button class="btn warn" onclick="nextQuestion()">➡ Weiter</button>
    </div>
  `;
  currentIndex = 0;
  userAnswers = {};
  renderQuestion();
  updateProgress();
}
