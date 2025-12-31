const richtig = JSON.parse(localStorage.getItem("richtig")) || [];
const falsch = JSON.parse(localStorage.getItem("falsch")) || [];
const merkliste = JSON.parse(localStorage.getItem("merkliste")) || [];

document.getElementById("total").innerText = cards.length;
document.getElementById("true").innerText = richtig.length;
document.getElementById("false").innerText = falsch.length;
document.getElementById("merk").innerText = merkliste.length;

function resetStats() {
  localStorage.clear();
  location.reload();
}
