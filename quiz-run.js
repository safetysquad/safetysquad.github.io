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

function toggleAnswer(id) {
  const q = quiz[current];
  const arr = userAnswers[q.id];

  if (arr.includes(id)) {
    userAnswers[q.id] = arr.filter(x => x !== id);
  } else {
    userAnswers[q.id].push(id);
  }

  renderQuestion();
}

function nextQuestion() {
  current++;

  if (current >= quiz.length) {
    finishQuiz();
    return;
  }

  renderQuestion();
}

function finishQuiz() {
  let points = 0;
  let maxPoints = 0;

  quiz.forEach(q => {
    maxPoints += q.points;

    const correct = q.answers
      .filter(a => a.correct)
      .map(a => a.id)
      .sort()
      .join(",");

    const given = (userAnswers[q.id] || [])
      .sort()
      .join(",");

    if (correct === given) {
      points += q.points;
    }
  });

  const percent = Math.round((points / maxPoints) * 100);

  document.getElementById("quizContainer").innerHTML = `
    <h2>📊 Ergebnis</h2>
    <p><b>${points}</b> von <b>${maxPoints}</b> Punkten</p>
    <p><b>${percent}%</b> erreicht</p>
  `;
}
