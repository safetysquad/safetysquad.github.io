const params = new URLSearchParams(window.location.search);
const quizNumber = params.get("quiz") || 1;
const quiz = quizzes[quizNumber];

let index = 0;
let points = 0;
let wrongQuestions = [];
let selected = [];

const questionText = document.getElementById("questionText");
const answersDiv = document.getElementById("answers");
const progressBar = document.getElementById("progressBar");
const counter = document.getElementById("questionCounter");
const pointsEl = document.getElementById("points");
const quizTitle = document.getElementById("quizTitle");

quizTitle.innerText = `Quiz ${quizNumber}`;

function renderQuestion() {
  const q = quiz[index];
  questionText.innerText = q.question;
  answersDiv.innerHTML = "";
  selected = [];

  q.answers.forEach((a, i) => {
    const btn = document.createElement("button");
    btn.innerText = a.text;
    btn.className = "quiz-answer";
    btn.onclick = () => toggleAnswer(i, btn);
    answersDiv.appendChild(btn);
  });

  counter.innerText = `${index + 1} / ${quiz.length}`;
  progressBar.style.width = `${((index + 1) / quiz.length) * 100}%`;
}

function toggleAnswer(i, btn) {
  if (selected.includes(i)) {
    selected = selected.filter(x => x !== i);
    btn.classList.remove("selected");
  } else {
    selected.push(i);
    btn.classList.add("selected");
  }
}

function submitAnswer() {
  const q = quiz[index];
  const correctIndexes = q.answers
    .map((a, i) => a.correct ? i : null)
    .filter(i => i !== null);

  const isCorrect =
    selected.length === correctIndexes.length &&
    selected.every(i => correctIndexes.includes(i));

  if (isCorrect) {
    points += correctIndexes.length;
  } else {
    wrongQuestions.push(q);
  }

  pointsEl.innerText = points;
  index++;

  if (index < quiz.length) {
    renderQuestion();
  } else {
    localStorage.setItem("quizResult", JSON.stringify({
      quiz: quizNumber,
      points,
      total: quiz.length * 2,
      wrongQuestions
    }));

    localStorage.setItem("wrongQuestions", JSON.stringify(wrongQuestions));

    location.href = "quiz-stats.html";
  }
}

renderQuestion();
