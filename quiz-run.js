let quiz = null;
let currentIndex = 0;
let userAnswers = {};

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const quizId = params.get("id");

  quiz = quizzes.find(q => q.id === quizId);

  if (!quiz || !quiz.questions || quiz.questions.length === 0) {
    document.querySelector("main").innerHTML =
      "<p>❌ Quiz oder Fragen nicht gefunden</p>";
    return;
  }

  document.getElementById("quizTitle").innerText = quiz.title;
  renderQuestion();
  updateProgress();
});

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

function toggleAnswer(answerId) {
  const q = quiz.questions[currentIndex];

  if (!userAnswers[q.id]) userAnswers[q.id] = [];

  if (userAnswers[q.id].includes(answerId)) {
    userAnswers[q.id] = userAnswers[q.id].filter(a => a !== answerId);
  } else {
    userAnswers[q.id].push(answerId);
  }

  renderQuestion();
}

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

function updateProgress() {
  const percent =
    ((currentIndex + 1) / quiz.questions.length) * 100;
  document.getElementById("progressBar").style.width = percent + "%";
}

function evaluateQuiz() {
  let points = 0;
  let maxPoints = 0;

  quiz.questions.forEach(q => {
    maxPoints += q.points;
    const correct = q.correct.sort().join(",");
    const given = (userAnswers[q.id] || []).sort().join(",");
    if (correct === given) points += q.points;
  });

  document.querySelector("main").innerHTML = `
    <h2>Ergebnis</h2>
    <p>${points} von ${maxPoints} Punkten</p>
    <p>${Math.round((points / maxPoints) * 100)}%</p>
    <a class="btn" href="quiz.html">⬅ Zurück</a>
  `;
}
