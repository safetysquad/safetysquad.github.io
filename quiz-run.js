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
  const q = questions[currentIndex];

  document.getElementById("questionText").innerText = q.question;

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

  document.getElementById("counter").innerText =
    `Frage ${currentIndex + 1} von ${questions.length}`;
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
function renderResult(points, maxPoints, percent, results) {
  const main = document.querySelector("main");

  main.innerHTML = `
    <div class="card">
      <h2>Ergebnis</h2>
      <div class="result-box">
      <p><b>${points}</b> von <b>${maxPoints}</b> Punkten</p>
      <p><b>${percent}%</b> ${
        percent === 100 ? "✅ Bestanden" : "❌ Nicht bestanden"
      }</p>
    </div>
    <div id="resultList"></div>
    <button class="btn" onclick="restartQuiz()">🔁 Test wiederholen</button>
  `;

  const list = document.getElementById("resultList");

  results.forEach((r, i) => {
    const div = document.createElement("div");
    div.className = "card";
    div.style.border =
      r.isCorrect ? "2px solid #22c55e" : "2px solid #ef4444";

    const correctText = r.answers
      .filter(a => r.correctAnswers.includes(a.id))
      .map(a => `${a.id}. ${a.text}`)
      .join("<br>");

    const givenText = r.answers
      .filter(a => r.givenAnswers.includes(a.id))
      .map(a => `${a.id}. ${a.text}`)
      .join("<br>") || "—";

    div.innerHTML = `
      <p><b>Frage ${i + 1}</b></p>
      <p>${r.question}</p>
      ${
        r.isCorrect
          ? "<p>✅ Richtig</p>"
          : `<p>❌ Deine Antwort:</p><p>${givenText}</p>
             <p>✅ Richtige Antwort:</p><p>${correctText}</p>`
      }
    `;

    list.appendChild(div);
  });
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
