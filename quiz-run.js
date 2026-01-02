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
    const given = (userAnswers[q.id] || []).sort().join(",");

    if (correct === given) {
      points += q.points;
    } else {
      wrongQuestions.push({
        question: q,
        given: userAnswers[q.id] || []
      });
    }
  });

  const percent = Math.round((points / maxPoints) * 100);
  renderResult(points, maxPoints, percent, wrongQuestions);
}

// ==============================
// ERGEBNIS + FALSCHE FRAGEN
// ==============================
function renderResult(points, maxPoints, percent, wrongQuestions) {
  let html = `
    <h2>Ergebnis</h2>
    <p><b>${points}</b> von <b>${maxPoints}</b> Punkten</p>
    <p><b>${percent}%</b> erreicht</p>
    <hr>
  `;

  if (wrongQuestions.length > 0) {
    html += `<h3>❌ Falsch beantwortete Fragen</h3>`;

    wrongQuestions.forEach(w => {
      const q = w.question;

      html += `<div class="card" style="margin-bottom:1rem;">`;
      html += `<b>${q.question}</b><br><br>`;

      html += `<u>Deine Antwort:</u><br>`;
      if (w.given.length === 0) {
        html += `– keine Antwort –<br>`;
      } else {
        w.given.forEach(id => {
          const a = q.answers.find(x => x.id === id);
          html += `❌ ${id}. ${a.text}<br>`;
        });
      }

      html += `<br><u>Richtige Antwort:</u><br>`;
      q.correct.forEach(id => {
        const a = q.answers.find(x => x.id === id);
        html += `✅ ${id}. ${a.text}<br>`;
      });

      html += `</div>`;
    });
  } else {
    html += `<p>🎉 Alle Fragen richtig beantwortet!</p>`;
  }

  html += `<a href="quiz.html" class="btn">⬅ Zurück zur Quiz-Auswahl</a>`;

  document.querySelector("main").innerHTML = html;
}
