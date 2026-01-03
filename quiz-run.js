// ==============================
// GRUNDVARIABLEN
// ==============================
let quiz = null;
let quizId = null;
let currentIndex = 0;
let userAnswers = {};

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
  renderQuestion();
  updateProgress();
});


// ==============================
// FRAGE RENDERn
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
    btn.innerText = `${a.id}. ${a.text}`;
    btn.onclick = () => toggleAnswer(a.id);
    answersBox.appendChild(btn);
  });

  document.getElementById("counter").innerText =
    `Frage ${currentIndex + 1} von ${quiz.length}`;
}


// ==============================
// ANTWORT AUSWÄHLEN (MEHRFACH)
// ==============================
function toggleAnswer(questionId, answerId) {
  if (!userAnswers[questionId]) {
    userAnswers[questionId] = [];
  }

  const list = userAnswers[questionId];

  if (list.includes(answerId)) {
    userAnswers[questionId] = list.filter(a => a !== answerId);
  } else {
    userAnswers[questionId].push(answerId);
  }

  renderQuestion();
}

// ==============================
// NAVIGATION
// ==============================
function nextQuestion() {
  if (currentIndex < questions.length - 1) {
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
  const percent = ((currentIndex + 1) / questions.length) * 100;
  document.getElementById("progressBar").style.width = percent + "%";
}

// ==============================
// AUSWERTUNG
// ==============================
function evaluateQuiz() {
  let points = 0;
  let maxPoints = 0;

  const results = [];

  questions.forEach(q => {
    maxPoints += q.points;

    const given = (userAnswers[q.id] || []).sort().join(",");
    const correct = q.correct.sort().join(",");

    const isCorrect = given === correct;

    if (isCorrect) points += q.points;

    results.push({
      question: q.question,
      correctAnswers: q.correct,
      givenAnswers: userAnswers[q.id] || [],
      answers: q.answers,
      isCorrect
    });
  });

  const percent = Math.round((points / maxPoints) * 100);

  saveStats(percent);
  renderResult(points, maxPoints, percent, results);
}

// ==============================
// ERGEBNIS ANZEIGEN
// ==============================
function renderResult(points, maxPoints, percent, wrongQuestions) {
  const main = document.querySelector("main");

  let html = `
    <div class="result-summary">
      <h2>Ergebnis</h2>
      <p><b>${points}</b> von <b>${maxPoints}</b> Punkten</p>
      <p><b>${percent}%</b> erreicht</p>

      ${percent === 100 
        ? `<div class="badge success">✅ Bestanden</div>`
        : `<div class="badge warn">❌ Noch nicht bestanden</div>`
      }

      <button class="btn" onclick="restartQuiz()">🔁 Test wiederholen</button>
      <a href="quiz.html" class="btn secondary">⬅ Zur Quiz-Auswahl</a>
    </div>
  `;

  if (wrongQuestions.length > 0) {
    html += `<h3>❌ Falsch beantwortete Fragen</h3>`;

    wrongQuestions.forEach(q => {
      const user = (userAnswers[q.id] || []).join(", ");
      const correct = q.correct.join(", ");

      html += `
        <div class="result-card wrong">
          <p class="question">${q.question}</p>

          <p class="answer user">❌ Deine Antwort: ${user || "—"}</p>
          <p class="answer correct">✅ Richtige Antwort: ${correct}</p>
        </div>
      `;
    });
  }

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

  const best = Math.max(
    percent,
    Number(localStorage.getItem(bestKey) || 0)
  );
  localStorage.setItem(bestKey, best);
}

// ==============================
// TEST WIEDERHOLEN
// ==============================
function restartQuiz() {
  currentIndex = 0;
  userAnswers = {};
  document.querySelector("main").innerHTML = `
    <div class="card">
      <p id="questionText"></p>
    </div>
    <div id="answers"></div>
    <div class="nav">
      <button class="btn warn" onclick="prevQuestion()">⬅ Zurück</button>
      <button class="btn warn" onclick="nextQuestion()">➡ Weiter</button>
    </div>
    <p id="counter"></p>
  `;
  renderQuestion();
  updateProgress();
}
