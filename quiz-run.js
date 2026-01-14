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
    currentIndex = 0;
    userAnswers = {};
  }

  // =======================
  // Falsche Fragen eines einzelnen Quizzes wiederholen
  // =======================
  if (retryParam === "1" && quizId) {
    const savedWrong = JSON.parse(localStorage.getItem(`safety_${quizId}_wrong`) || "[]");
    if (savedWrong.length > 0) {
      isRetryMode = true;
      quiz = quizzes[quizId].filter(q => savedWrong.includes(q.id));
      wrongQuestions = quiz.slice();
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

  document.getElementById("quizTitle").innerText = `📝 ${quizId ? quizId.toUpperCase() : "Fehler-Lernmodus"}`;

  // Falsch beantwortete Fragen aus localStorage laden (für normale Quiz-Session)
  if (!isRetryMode && quizId) {
    const savedWrong = JSON.parse(localStorage.getItem(`safety_${quizId}_wrong`) || "[]");
    if (savedWrong.length > 0 && !params.get("showResult")) {
      wrongQuestions = quiz.filter(q => savedWrong.includes(q.id));
    }
  }

  // Direkt Ergebnis anzeigen?
  if (params.get("showResult") === "1") {
    const bestPercent = Number(localStorage.getItem(`safety_${quizId}_best`) || 0);
    const maxPoints = quiz.reduce((sum, q) => sum + q.points, 0);
    const points = Math.round((bestPercent / 100) * maxPoints);
    renderResult(points, maxPoints, bestPercent, []);
    return;
  }

  renderQuizUI();
  renderQuestion();
  updateProgress();
});

// ==============================
// Frage rendern
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
    document.querySelector(".progress").insertAdjacentElement("afterend", pointsEl);
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
// Antwort auswählen
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

  if (!isRetryMode) {
    saveStats(percent);
    updatePersistentWrong(newlyWrong, results);
  }

  renderResult(points, maxPoints, percent, results);
}

// ==============================
// Persistent Falsch Fragen
// ==============================
function updatePersistentWrong(newWrong, results) {
  const savedWrong = JSON.parse(localStorage.getItem(`safety_${quizId}_wrong`) || "[]");

  // Richtige Fragen entfernen
  results.forEach(r => {
    if (r.isCorrect) {
      r.correctAnswers.forEach(id => {
        const index = savedWrong.indexOf(id);
        if (index > -1) savedWrong.splice(index, 1);
      });
    }
  });

  // Neue falsche Fragen hinzufügen
  newWrong.forEach(id => {
    if (!savedWrong.includes(id)) savedWrong.push(id);
  });

  localStorage.setItem(`safety_${quizId}_wrong`, JSON.stringify(savedWrong));
}

// ==============================
// Ergebnis anzeigen + Falsch beantwortete Fragen
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

  // Falsch beantwortete Fragen filtern
  const wrongResults = results.filter(r => !r.isCorrect);

  if (wrongResults.length > 0) {
    html += `<h3>❌ Falsch beantwortete Fragen</h3>`;
    wrongResults.forEach(r => {
      const userTexts = getTextById(r.givenAnswers, r.answers);
      const correctTexts = getTextById(r.correctAnswers, r.answers);

      html += `
        <div class="result-card wrong">
          <p class="question">${r.question}</p>

          <p class="answer user">Deine Antwort:</p>
          <ul class="answer-list user">
            ${userTexts.length ? userTexts.map(t => `<li>${t}</li>`).join("") : "<li>—</li>"}
          </ul>

          <p class="answer correct">Richtige Antwort:</p>
          <ul class="answer-list correct">
            ${correctTexts.map(t => `<li>${t}</li>`).join("")}
          </ul>
        </div>
      `;
    });

    // Button um nur die falschen Fragen zu wiederholen
    html += `<button class="btn warn" onclick="retryWrongQuestions()">❌ Falsch beantwortete Fragen wiederholen</button>`;
  }

  main.innerHTML = html;
}

// ==============================
// Statistik speichern
// ==============================
function saveStats(percent) {
  if (!quizId) return;
  const attemptsKey = `safety_${quizId}_attempts`;
  const bestKey = `safety_${quizId}_best`;

  const attempts = Number(localStorage.getItem(attemptsKey) || 0) + 1;
  localStorage.setItem(attemptsKey, attempts);

  const best = Math.max(percent, Number(localStorage.getItem(bestKey) || 0));
  localStorage.setItem(bestKey, best);
}

// ==============================
// Quiz wiederholen
// ==============================
function restartQuiz() {
  currentIndex = 0;
  userAnswers = {};
  isRetryMode = false;

  if (!quiz && quizId) quiz = quizzes[quizId];

  renderQuizUI();
}

// ==============================
// Quiz UI rendern (für Wiederholung & Retry)
// ==============================
function renderQuizUI() {
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
// Falsche Fragen wiederholen
// ==============================
function retryWrongQuestions() {
  const globalWrong = new URLSearchParams(window.location.search).get("globalWrong");

  if (globalWrong === "1" || isGlobalMode) {
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
    if (allWrongQuestions.length === 0) return;
    quiz = allWrongQuestions;
    currentIndex = 0;
    userAnswers = {};
  } else if (quizId) {
    const savedWrong = JSON.parse(localStorage.getItem(`safety_${quizId}_wrong`) || "[]");
    if (savedWrong.length === 0) return;
    isRetryMode = true;
    quiz = quizzes[quizId].filter(q => savedWrong.includes(q.id));
    currentIndex = 0;
    userAnswers = {};
  }

  renderQuizUI();
}
