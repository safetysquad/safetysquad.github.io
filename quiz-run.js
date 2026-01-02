const params = new URLSearchParams(window.location.search);
const quizKey = params.get("quiz");

if (!quizKey || !QUIZZES[quizKey]) {
  document.getElementById("quizContainer").innerHTML =
    "<p>❌ Quiz nicht gefunden</p>";
  throw new Error("Quiz existiert nicht");
}

const quiz = QUIZZES[quizKey];
let current = 0;

// speichert Auswahl pro Frage
const userAnswers = {};

renderQuestion();

function renderQuestion() {
  const q = quiz[current];
  if (!userAnswers[q.id]) userAnswers[q.id] = [];

  const answersHtml = q.answers.map(a => {
    const active = userAnswers[q.id].includes(a.id) ? "active" : "";
    return `
      <button class="btn secondary ${active}"
        onclick="toggleAnswer('${a.id}')">
        ${a.id}) ${a.text}
      </button>
    `;
  }).join("");

  document.getElementById("quizContainer").innerHTML = `
    <p><b>Frage ${q.id} von ${quiz.length}</b></p>
    <p>${q.question}</p>

    <div class="actions">
      ${answersHtml}
    </div>

    <button class="btn" onclick="nextQuestion()">
      ➡ Weiter
    </button>
  `;
}

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

  renderAnswers(); // ❗ KEIN automatisches Weiter
}


function nextQuestion() {
  current++;

  if (current >= quiz.length) {
    finishQuiz();
    return;
  }

  renderQuestion();
}

function evaluateQuiz() {
  let points = 0;
  let maxPoints = 0;

  quiz.questions.forEach(q => {
    maxPoints += q.points;

    const correct = [...q.correct].sort().join(",");
    const given = (userAnswers[q.id] || []).sort().join(",");

    if (correct === given) {
      points += q.points;
    }
  });

  const percent = Math.round((points / maxPoints) * 100);
  showResult(points, maxPoints, percent);
}

