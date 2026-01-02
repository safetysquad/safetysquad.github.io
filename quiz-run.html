// ==============================
// GRUNDVARIABLEN
// ==============================
let quiz = null;
let currentIndex = 0;
let userAnswers = {};

// ==============================
// QUIZ LADEN
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const quizId = params.get("id");

  quiz = quizzes.find(q => q.id === quizId);

  if (!quiz) {
    document.body.innerHTML = "<p style='color:white;padding:20px'>Quiz nicht gefunden</p>";
    return;
  }

  document.getElementById("quizTitle").innerText = quiz.title;
  renderQuestion();
  updateProgress();
});

// ==============================
// FRAGE RENDERn
// ==============================
function renderQuestion() {
  const q = quiz.questions[currentIndex];

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

    btn.onclick = () => toggleAnswer(a.id);
    answersBox.appendChild(btn);
  });

  document.getElementById("counter").innerText =
    `Frage ${currentIndex + 1} von ${quiz.questions.length}`;
}

// ==============================
// ANTWORT AUSWÄHLEN (KEIN AUTO-WEITER)
// ==============================
function toggleAnswer(answerId) {
  const q = quiz.questions[currentIndex];

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
  if (currentIndex < quiz.questions.length - 1) {
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
  const percent = ((currentIndex + 1) / quiz.questions.length) * 100;
  document.getElementById("progressBar").style.width = percent + "%";
}

// ==============================
// AUSWERTUNG (KERNLOGIK)
// ==============================
function evaluateQuiz() {
  let points = 0;
  let maxPoints = 0;
  let wrongQuestions = [];

  quiz.questions.forEach(q => {
    maxPoints += q.points;

    const correct = [...q.correct].sort().join(",");
    const given = (userAnswers[q.id] || []).sort().join(",");

    if (correct === given) {
      points += q.points;
    } else {
      wrongQuestions.push(q);
    }
  });

  const percent = Math.round((points / maxPoints) * 100);
  renderResult(points, maxPoints, percent, wrongQuestions);
}

// ==============================
// ERGEBNIS ANZEIGEN
// ==============================
function renderResult(points, maxPoints, percent, wrongQuestions) {
  const main = document.querySelector("main");

  main.innerHTML = `
    <div class="card">
      <h2>Ergebnis</h2>
      <p><b>${points}</b> von <b>${maxPoints}</b> Punkten</p>
      <p><b>${percent}%</b> erreicht</p>
      <br>
      <a class="btn" href="quiz.html">⬅ Zurück zur Quiz-Auswahl</a>
      ${
        wrongQuestions.length > 0
          ? `<button class="btn warn" onclick="retryWrong()">❌ Falsche Fragen üben</button>`
          : ""
      }
    </div>
  `;

  window._wrongQuestions = wrongQuestions;
}

// ==============================
// FALSCHE FRAGEN ERNEUT ÜBEN
// ==============================
function retryWrong() {
  quiz = {
    ...quiz,
    questions: window._wrongQuestions
  };

  currentIndex = 0;
  userAnswers = {};
  document.querySelector("main").innerHTML = `
    <div id="progress" class="progress"><div id="progressBar"></div></div>
    <p id="counter"></p>
    <div class="card">
      <p id="questionText"></p>
    </div>
    <div id="answers"></div>
    <div class="nav">
      <button class="btn warn" onclick="prevQuestion()">⬅ Zurück</button>
      <button class="btn" onclick="nextQuestion()">➡ Weiter</button>
    </div>
  `;

  renderQuestion();
  updateProgress();
}
