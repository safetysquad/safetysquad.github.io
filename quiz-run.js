// Quiz-ID aus URL lesen (?quiz=quiz1)
const params = new URLSearchParams(window.location.search);
const quizKey = params.get("quiz");

// Sicherheitsprüfung
if (!quizKey || !QUIZZES[quizKey]) {
  document.getElementById("quizContainer").innerHTML =
    "<p>❌ Quiz nicht gefunden</p>";
  throw new Error("Quiz existiert nicht: " + quizKey);
}

const quiz = QUIZZES[quizKey];
let current = 0;

document.getElementById("quizTitle").innerText =
  "Quiz " + quizKey.replace("quiz", "");

renderQuestion();

function renderQuestion() {
  const q = quiz[current];

  const answersHtml = q.answers.map(a =>
    `<button class="btn secondary" onclick="selectAnswer('${a.id}')">
      ${a.id}) ${a.text}
    </button>`
  ).join("");

  document.getElementById("quizContainer").innerHTML = `
    <p><b>Frage ${q.id} von ${quiz.length}</b></p>
    <p>${q.question}</p>
    <div class="actions">${answersHtml}</div>
  `;
}

function selectAnswer(id) {
  current++;
  if (current >= quiz.length) {
    document.getElementById("quizContainer").innerHTML =
      "<h2>✅ Quiz beendet</h2>";
    return;
  }
  renderQuestion();
}
