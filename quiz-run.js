console.log("QUIZ-RUN.JS VERSION 2 GELADEN");

// ==============================
// GRUNDVARIABLEN
// ==============================
let quiz = null;
let quizId = null;
let currentIndex = 0;
let userAnswers = {};

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

  // =============================
  // Punkteanzeige unter Progress
  // =============================
  let pointsEl = document.getElementById("questionPoints");

  if (!pointsEl) {
    pointsEl = document.createElement("div");
    pointsEl.id = "questionPoints";

    const progressEl = document.querySelector(".progress");
    progressEl.insertAdjacentElement("afterend", pointsEl);
  }

  pointsEl.innerText = `🧠 ${q.points} Punkt${q.points > 1 ? "e" : ""}`;

  // =============================
  // Frage setzen
  // =============================
  questionTextEl.innerText = q.question;

  // Antworten leeren
  answersBox.innerHTML = "";

  q.answers.forEach(a => {
    const btn = document.createElement("button");
    btn.className = "btn secondary";

    if (userAnswers[q.id]?.includes(a.id)) {
      btn.classList.add("active");
    }

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
function toggleAnswer(answerId) {
  const q = quiz[currentIndex];

  if (!userAnswers[q.id]) {
    userAnswers[q.id] = [];
  }

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

  quiz.forEach(q => {
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
              userTexts.length
                ? userTexts.map(t => `<li>${t}</li>`).join("")
                : "<li>—</li>"
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
  renderQuestion();
  updateProgress();
}
