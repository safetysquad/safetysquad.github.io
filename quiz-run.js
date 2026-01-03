// ==============================
// VARIABLEN
// ==============================
let quizId = null;
let questions = [];
let currentIndex = 0;
let userAnswers = {};

// ==============================
// QUIZ LADEN
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  quizId = params.get("id");

  if (!quizId || !quizzes[quizId]) {
    document.querySelector("main").innerHTML =
      "<h2>❌ Quiz nicht gefunden</h2>";
    return;
  }

  questions = quizzes[quizId];

  document.getElementById("quizTitle").innerText =
    `Quiz ${quizId.replace("quiz", "")}`;

  renderQuestion();
  updateProgress();
});

// ==============================
// FRAGE RENDERN
// ==============================
function renderQuestion() {
  const q = questions[currentIndex];

  document.getElementById("questionText").innerText = q.question;
  document.getElementById("counter").innerText =
    `Frage ${currentIndex + 1} von ${questions.length}`;

  const answersBox = document.getElementById("answers");
  answersBox.innerHTML = "";

  q.answers.forEach(a => {
    const btn = document.createElement("button");
    btn.className = "btn secondary";
    btn.innerText = `${a.id}. ${a.text}`;

    if (userAnswers[q.id]?.includes(a.id)) {
      btn.style.opacity = "0.6";
    }

    btn.onclick = () => toggleAnswer(q.id, a.id);
    answersBox.appendChild(btn);
  });
}

// ==============================
// ANTWORT AUSWÄHLEN
// ==============================
function toggleAnswer(questionId, answerId) {
  if (!userAnswers[questionId]) userAnswers[questionId] = [];

  const selected = userAnswers[questionId];

  if (selected.includes(answerId)) {
    userAnswers[questionId] = selected.filter(a => a !== answerId);
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

  questions.forEach(q => {
    maxPoints += q.points;

    const correct = [...q.correct].sort().join(",");
    const given = (userAnswers[q.id] || []).sort().join(",");

    if (correct === given) {
      points += q.points;
    }
  });

  const percent = Math.round((points / maxPoints) * 100);
  saveResult(percent);
  renderResult(points, maxPoints, percent);
}

// ==============================
// ERGEBNIS SPEICHERN
// ==============================
function saveResult(percent) {
  const key = `safety_quiz_${quizId}`;
  const old = JSON.parse(localStorage.getItem(key)) || {
    bestPercent: 0,
    attempts: 0,
    passed: false
  };

  old.attempts++;
  if (percent > old.bestPercent) old.bestPercent = percent;
  if (percent === 100) old.passed = true;

  localStorage.setItem(key, JSON.stringify(old));
}

// ==============================
// ERGEBNIS ANZEIGEN
// ==============================
function renderResult(points, maxPoints, percent) {
  const passed = percent === 100;

  document.querySelector("main").innerHTML = `
    <div class="card">
      <h2>📊 Ergebnis</h2>
      <p><b>${points}</b> von <b>${maxPoints}</b> Punkten</p>
      <p><b>${percent}%</b> erreicht</p>
      ${passed ? "<h3>🏆 BESTANDEN</h3>" : "<h3>❌ Nicht bestanden</h3>"}
    </div>

    <button class="btn" onclick="restartQuiz()">🔁 Test wiederholen</button>
    <a class="btn secondary" href="quiz.html">⬅ Zurück zur Quiz-Auswahl</a>
  `;
}

// ==============================
// TEST WIEDERHOLEN
// ==============================
function restartQuiz() {
  currentIndex = 0;
  userAnswers = {};
  location.reload();
}
