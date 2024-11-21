const fom = document.getElementById("form");
fom.addEventListener("submit", (e) => {
  e.preventDefault();
  const resultArea = document.getElementById("text__area");
  const yes = document.getElementById("yes");
  const no = document.getElementById("no");
  const data = new FormData(e.target);
  const name = data.get("name").toLocaleLowerCase();
  if (name === "majidul") {
    resultArea.innerText = "Majidul Is Singel Boy.";
  } else if (name === "fardin") {
    resultArea.innerText = "fardin Love Sumona 100% pure Love.";
  } else if (name === "sanjida") {
    resultArea.innerText = "She is Loves to Eat.";
  } else if (name === "aysha") {
    resultArea.innerText = "She is loves Raj.";
  } else if (name === "israt") {
    resultArea.innerText = "She is....";
  } else if (name === "sumona") {
    resultArea.innerText =
      "Fardin Loves you..Do you acept Fardin Proposal Yet ";
    yes.style.display = "inline-block";
    no.style.display = "inline-block";
  } else {
    resultArea.innerText = "I Dont't Know You";
  }
});
const yes = document.getElementById("yes");
const no = document.getElementById("no");
const body = document.getElementById("body");
yes.addEventListener("click", () => {
  body.style.backgroundColor = "green";
});
no.addEventListener("click", () => {
  body.style.backgroundColor = "red";
});
