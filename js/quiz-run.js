console.log("QUIZ-RUN.JS VERSION 1 GELADEN");

// ==============================
// GRUNDVARIABLEN
// ==============================
let quiz = null;
let quizId = null;
let currentIndex = 0;
let userAnswers = {};
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
    renderQuizUI();
    return;
  }

  // =======================
  // Falsche Fragen eines einzelnen Quizzes wiederholen
  // =======================
  if (retryParam === "1" && quizId) {
    const savedWrong = JSON.parse(localStorage.getItem(`safety_${quizId}_wrong`) || "[]");
    if (savedWrong.length > 0) {
      isRetryMode = true;
      quiz = quizzes[quizId].filter(q => savedWrong.includes(q.id));
      renderQuizUI();
      return;
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

  document.getElementById("quizTitle").innerText = `📝 ${quizId ? quizId.toUpperCase() : "Fehler-Lernmodus"}`;

  // =======================
  // Prüfen: Schon einmal abgeschlossen?
  // =======================
  const bestPercent = Number(localStorage.getItem(`safety_${quizId}_best`) || 0);
  if (bestPercent > 0) {
    const maxPoints = quiz.reduce((sum, q) => sum + q.points, 0);
    const points = Math.round((bestPercent / 100) * maxPoints);
    const savedWrong = JSON.parse(localStorage.getItem(`safety_${quizId}_wrong`) || "[]");

    // Falsche Fragen laden
    const wrongResults = savedWrong.length
      ? quiz.filter(q => savedWrong.includes(q.id)).map(q => ({
          question: q.question,
          correctAnswers: q.correct,
          givenAnswers: [],
          answers: q.answers,
          isCorrect: false,
          id: q.id
        }))
      : [];

    renderResult(points, maxPoints, bestPercent, wrongResults);
    return;
  }

  renderQuizUI();
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
      isCorrect,
      id: q.id
    });
  });

  const percent = Math.round((points / maxPoints) * 100);

  // ✅ Immer aktualisieren, auch im Retry-Modus
  updatePersistentWrong(newlyWrong, results);

  // Nur normalen Fortschritt speichern, nicht im Retry-Modus
  if (!isRetryMode) saveStats(percent);

  renderResult(points, maxPoints, percent, results);
}

// ==============================
// Persistent Falsch Fragen
// ==============================
function updatePersistentWrong(newWrong, results) {
  let savedWrong = JSON.parse(localStorage.getItem(`safety_${quizId}_wrong`) || "[]");

  // Richtige Fragen entfernen
  results.forEach(r => {
    if (r.isCorrect) {
      const index = savedWrong.indexOf(r.id);
      if (index > -1) savedWrong.splice(index, 1);
    }
  });

  // Neue falsche Fragen hinzufügen
  newWrong.forEach(id => {
    if (!savedWrong.includes(id)) savedWrong.push(id);
  });

  localStorage.setItem(`safety_${quizId}_wrong`, JSON.stringify(savedWrong));
}

// ==============================
// Ergebnis anzeigen
// ==============================
function renderResult(points, maxPoints, percent, results) {
  const main = document.querySelector("main");

  let html = `
    <div class="result-summary">
      <h2>Ergebnis</h2>
      <p><b>${points}</b> von <b>${maxPoints}</b> Punkten</p>
      <p><b>${percent}%</b> erreicht</p>

      ${percent === 100 ? `<div class="badge success">✅ Bestanden</div>` : `<div class="badge warn">❌ Noch nicht bestanden</div>`}

      <div class="result-actions">
        <button class="btn" onclick="restartQuiz()">🔁 Test wiederholen</button>
        <a href="quiz.html" class="btn secondary">⬅ Zur Quiz-Auswahl</a>
      </div>
    </div>
  `;

  // Button für falsche Fragen
  if (!isRetryMode) {
    if (isGlobalMode) {
      html += `<button class="btn warn" onclick="retryWrongQuestions()">❌ Alle falschen Fragen wiederholen</button>`;
    } else if (quizId) {
      const savedWrong = JSON.parse(localStorage.getItem(`safety_${quizId}_wrong`) || "[]");
      if (savedWrong.length > 0) {
        html += `<button class="btn warn" onclick="retryWrongQuestions()">❌ Falsche Fragen wiederholen (${savedWrong.length})</button>`;
      }
    }
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
  ${
    r.givenAnswers && r.givenAnswers.length
      ? userTexts.map(t => `<li>${t}</li>`).join("")
      : "<li><i>(Antwort wurde nur im letzten Durchlauf angezeigt)</i></li>"
  }
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

  renderQuizUI();
}

// ==============================
// Quiz UI rendern
// ==============================
function renderQuizUI() {
  const main = document.querySelector("main");

  // Nur den Main-Bereich neu bauen: card + answers + nav
  main.innerHTML = `
    <div class="card">
      <p id="questionText">Lade Frage…</p>
    </div>

    <div id="answers" class="actions"></div>

    <div class="nav">
      <button class="btn warn" onclick="prevQuestion()">⬅ Zurück</button>
      <button class="btn warn" onclick="nextQuestion()">➡ Weiter</button>
    </div>
  `;

  // Fortschritt updaten
  renderQuestion();
  updateProgress(); // nutzt weiterhin #progressBar im Header
}

// ==============================
// Falsche Fragen wiederholen
// ==============================
function retryWrongQuestions() {
  if (isGlobalMode) {
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
  } else if (quizId) {
    const savedWrong = JSON.parse(localStorage.getItem(`safety_${quizId}_wrong`) || "[]");
    if (savedWrong.length === 0) return;
    quiz = quizzes[quizId].filter(q => savedWrong.includes(q.id));
  }

  currentIndex = 0;
  userAnswers = {};
  isRetryMode = true;
  renderQuizUI();
}
