const params = new URLSearchParams(window.location.search);
const quizNr = params.get("quiz");
const mode = params.get("mode"); // normal | wrong

let questions = [];
let index = 0;
let score = 0;
let wrongQuestions = [];

if (mode === "wrong") {
  questions = JSON.parse(localStorage.getItem("wrongQuestions")) || [];
} else {
  questions = quizData[quizNr] || [];
}

function renderQuestion() {
  if (!questions[index]) {
    finishQuiz();
    return;
  }

  const q = questions[index];
  document.getElementById("question").innerText = q.question;

  const box = document.getElementById("answers");
  box.innerHTML = "";

  q.answers.forEach((a, i) => {
    const label = document.createElement("label");
    label.innerHTML = `
      <input type="checkbox" value="${i}">
      ${a}
    `;
    box.appendChild(label);
  });

  updateProgress();
}

function submitAnswer() {
  const checked = [...document.querySelectorAll("input:checked")]
    .map(i => Number(i.value));

  const q = questions[index];
  const correct =
    checked.length === q.correct.length &&
    checked.every(v => q.correct.includes(v));

  if (correct) {
    score += q.points || 1;
  } else {
    wrongQuestions.push(q);
    saveAnalysis(q);
  }

  index++;
  renderQuestion();
}

function updateProgress() {
  const percent = Math.round((index / questions.length) * 100);
  document.getElementById("progressBar").style.width = percent + "%";
}

function finishQuiz() {
  if (mode !== "wrong") {
    localStorage.setItem("wrongQuestions", JSON.stringify(wrongQuestions));
  }

  document.getElementById("quiz").innerHTML = `
    <h2>✅ Fertig!</h2>
    <p>Punkte: ${score}</p>
    <a class="menu-btn" href="analysis.html">📊 Zur Lernanalyse</a>
  `;
}

function saveAnalysis(q) {
  let stats = JSON.parse(localStorage.getItem("analysis")) || {};
  stats[q.id] = (stats[q.id] || 0) + 1;
  localStorage.setItem("analysis", JSON.stringify(stats));
}

renderQuestion();
