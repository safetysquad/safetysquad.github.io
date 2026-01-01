const params = new URLSearchParams(window.location.search);
const quizNr = params.get("quiz");

let questions = quizData[quizNr];
let index = 0;
let score = 0;
let wrongQuestions = [];

function renderQuestion() {
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
    score += q.points;
  } else {
    wrongQuestions.push(q);
    saveWrong(q);
  }

  index++;
  index < questions.length ? renderQuestion() : finishQuiz();
}

function updateProgress() {
  const percent = Math.round(((index) / questions.length) * 100);
  document.getElementById("progressBar").style.width = percent + "%";
}

function finishQuiz() {
  localStorage.setItem("wrongQuestions", JSON.stringify(wrongQuestions));
  document.getElementById("quiz").innerHTML = `
    <h2>Ergebnis</h2>
    <p>Punkte: ${score}</p>
    <a href="analysis.html">📊 Lernanalyse</a>
  `;
}

function saveWrong(q) {
  let stats = JSON.parse(localStorage.getItem("analysis")) || {};
  stats[q.id] = (stats[q.id] || 0) + 1;
  localStorage.setItem("analysis", JSON.stringify(stats));
}

renderQuestion();
