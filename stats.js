const state = JSON.parse(localStorage.getItem("state")) || {};

document.getElementById("doneCount").innerText =
  Object.values(state).filter(v => v === "done").length;

document.getElementById("markCount").innerText =
  Object.values(state).filter(v => v === "mark").length;

document.getElementById("totalCount").innerText = 51;

function resetProgress() {
  const ok = confirm("Willst du wirklich alles zurücksetzen?");
  if (!ok) return;
  localStorage.removeItem("state");
  location.reload();
}
