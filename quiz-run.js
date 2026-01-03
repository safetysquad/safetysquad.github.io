// ==============================
// GRUNDVARIABLEN
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
    document.querySelector("main").innerHTML = "<p>Quiz nicht gefunden</p>";
    return;
  }

  questions = quizzes[quizId];

  renderQuestion();
  updateProgress();
});

// ==============================
// FRAGE RENDERN
// ==============================
function renderQuestion() {
  const q = questions[currentIndex];
  if (!q) return;

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
// ANTWORT AUSWÄHLEN (MULTI)
// ==============================
function toggleAnswer(questionId, answerId) {
  if (!userAnswers[questionId]) {
    userAnswers[questionId] = [];
  }

  const arr = userAnswers[questionId];

  if (arr.includes(answerId)) {
    userAnswers[questionId] = arr.filter(a => a !== answerId);
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

  const wrong = [];

  questions.forEach(q => {
    maxPoints += q.points;

    const correct = [...q.correct].sort().join(",");
    const given = (userAnswers[q.id] || []).sort().join(",");

    if (correct === given) {
      points += q.points;
    } else {
      wrong.push({ q, given: userAnswers[q.id] || [] });
    }
  });

  const percent = Math.round((points / maxPoints) * 100);
  const passed = percent === 100;

  saveResult(points, maxPoints, percent, passed);
  renderResult(points, maxPoints, percent, passed, wrong);
}

// ==============================
// ERGEBNIS SPEICHERN
// ==============================
function saveResult(points, maxPoints, percent, passed) {
  const key = "safety_quiz_results";
  const data = JSON.parse(localStorage.getItem(key)) || {};

  if (!data[quizId]) {
    data[quizId] = { attempts: 0, best: 0 };
  }

  data[quizId].attempts += 1;
  data[quizId].best = Math.max(data[quizId].best, percent);
  data[quizId].last = { points, maxPoints, percent, passed };

  localStorage.setItem(key, JSON.stringify(data));
}

// ==============================
// ERGEBNIS ANZEIGEN
// ==============================
function renderResult(points, maxPoints, percent, passed, wrong) {
  let html = `
    <h2>Ergebnis</h2>
    <p><b>${points}</b> von ${maxPoints} Punkten</p>
    <p><b>${percent}%</b></p>
    <p>${passed ? "✅ BESTANDEN" : "❌ NICHT BESTANDEN (100 % nötig)"}</p>
  `;

  if (wrong.length > 0) {
    html += "<h3>Falsch beantwortete Fragen</h3>";

    wrong.forEach(w => {
      html += `
        <div class="wrong-card">
          <p><b>${w.q.question}</b></p>

          <p>❌ Deine Antwort:</p>
          ${w.given.length === 0 ? "<p>– keine –</p>" : ""}
          ${w.given.map(id => {
            const a = w.q.answers.find(x => x.id === id);
            return `<p>${id}. ${a.text}</p>`;
          }).join("")}

          <p>✅ Richtige Antwort:</p>
          ${w.q.correct.map(id => {
            const a = w.q.answers.find(x => x.id === id);
            return `<p>${id}. ${a.text}</p>`;
          }).join("")}
        </div>
      `;
    });
  }

  html += `
    <button class="btn secondary" onclick="restartQuiz()">🔁 Test wiederholen</button>
    <a href="quiz.html" class="btn">⬅ Zur Quiz-Auswahl</a>
  `;

  document.querySelector("main").innerHTML = html;
}

// ==============================
// QUIZ NEUSTART
// ==============================
function restartQuiz() {
  currentIndex = 0;
  userAnswers = {};

  restoreQuizLayout();
  renderQuestion();
  updateProgress();
}

