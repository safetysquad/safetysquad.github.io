const questions = JSON.parse(localStorage.getItem("wrongQuestions")) || [];

let index = 0;
let selected = [];

const questionText = document.getElementById("questionText");
const answersDiv = document.getElementById("answers");
const progressBar = document.getElementById("progressBar");

function renderQuestion() {
  if (index >= questions.length) {
    questionText.innerText = "🎉 Alle falschen Fragen korrekt beantwortet!";
    answersDiv.innerHTML = "";
    progressBar.style.width = "100%";
    return;
  }

  const q = questions[index];
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

  progressBar.style.width =
    `${((index + 1) / questions.length) * 100}%`;
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
  const q = questions[index];
  const correctIndexes = q.answers
    .map((a, i) => a.correct ? i : null)
    .filter(i => i !== null);

  const isCorrect =
    selected.length === correctIndexes.length &&
    selected.every(i => correctIndexes.includes(i));

  if (isCorrect) {
    index++;
  }

  renderQuestion();
}

renderQuestion();

