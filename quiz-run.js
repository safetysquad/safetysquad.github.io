let quiz = null;
let currentIndex = 0;
let userAnswers = {};

// ==============================
// QUIZ LADEN
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const quizId = params.get("id");

  if (!quizId || !quizzes[quizId]) {
    document.body.innerHTML = "<h2>❌ Quiz nicht gefunden</h2>";
    return;
  }

  quiz = {
    id: quizId,
    title: quizId.toUpperCase(),
    questions: quizzes[quizId]
  };

  document.getElementById("quizTitle").innerText = quiz.title;
  renderQuestion();
  updateProgress();
});

// ==============================
// FRAGE ANZEIGEN
// ==============================
function renderQuestion() {
  const q = quiz.questions[currentIndex];

  document.getElementById("questionText").innerText = q.question;
  document.getElementById("answers").innerHTML = "";

  q.answers.forEach(a => {
    const btn = document.createElement("button");
    btn.className = "btn secondary";
    btn.innerText = `${a.id}. ${a.text}`;

    if (userAnswers[q.id]?.includes(a.id)) {
      btn.style.opacity = "0.6";
    }

    btn.onclick = () => toggleAnswer(q.id, a.id);
    document.getElementById("answers").appendChild(btn);
  });

  document.getElementById("counter").innerText =
    `Frage ${currentIndex + 1} von ${quiz.questions.length}`;
}

// ==============================
// ANTWORT WÄHLEN (MULTI)
// ==============================
function toggleAnswer(questionId, answerId) {
  if (!userAnswers[questionId]) {
    userAnswers[questionId] = [];
  }

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
// AUSWERTUNG
// ==============================
function evaluateQuiz() {
  let points = 0;
  let maxPoints = 0;
  let wrongQuestions = [];

  quiz.questions.forEach(q => {
    maxPoints += q.points;

    const correct = [...q.correct].sort().join(",");
    const givenArr = userAnswers[q.id] || [];
    const given = [...givenArr].sort().join(",");

    if (correct === given) {
      points += q.points;
    } else {
      wrongQuestions.push({
        question: q,
        given: givenArr
      });
    }
  });

  const percent = Math.round((points / maxPoints) * 100);
  const passed = percent === 100;

  saveQuizResult(quiz.id, points, maxPoints, percent, passed);
  renderResult(points, maxPoints, percent, wrongQuestions, passed);
}
function saveQuizResult(quizId, points, maxPoints, percent, passed) {
  const key = "safety_quiz_results";
  const data = JSON.parse(localStorage.getItem(key)) || {};

  if (!data[quizId]) {
    data[quizId] = {
      attempts: 0,
      bestPercent: 0
    };
  }

  data[quizId].attempts += 1;
  data[quizId].lastResult = {
    points,
    maxPoints,
    percent,
    passed,
    date: new Date().toISOString()
  };

  if (percent > data[quizId].bestPercent) {
    data[quizId].bestPercent = percent;
  }

  localStorage.setItem(key, JSON.stringify(data));
}

  });

  const percent = Math.round((points / maxPoints) * 100);
  renderResult(points, maxPoints, percent, wrongQuestions);
}

// ==============================
// ERGEBNIS + FALSCHE FRAGEN
// ==============================
function renderResult(points, maxPoints, percent, wrongQuestions, passed) {
  let html = `
    <h2>Ergebnis</h2>

    <div class="result-box">
      <div><b>${points}</b> / ${maxPoints} Punkte</div>
      <div><b>${percent}%</b></div>
    </div>

    <div class="result-status ${passed ? "passed" : "failed"}">
      ${passed ? "✅ BESTANDEN" : "❌ NICHT BESTANDEN – 100 % erforderlich"}
    </div>
  `;

  if (wrongQuestions.length > 0) {
    html += `<h3>Falsch beantwortete Fragen</h3>`;

    wrongQuestions.forEach((w, i) => {
      const q = w.question;

      html += `
        <div class="wrong-card">
          <div class="wrong-question">${q.question}</div>

          <div class="answer-block wrong">
            <b>Deine Antwort</b>
            ${w.given.length === 0 ? "<div>– keine Antwort –</div>" : ""}
            ${w.given.map(id => {
              const a = q.answers.find(x => x.id === id);
              return `<div>❌ ${id}. ${a.text}</div>`;
            }).join("")}
          </div>

          <div class="answer-block correct">
            <b>Richtige Antwort</b>
            ${q.correct.map(id => {
              const a = q.answers.find(x => x.id === id);
              return `<div>✅ ${id}. ${a.text}</div>`;
            }).join("")}
          </div>
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
function restartQuiz() {
  currentIndex = 0;
  userAnswers = {};
  renderQuestion();
  updateProgress();
}

