// Generate Random nUmber with javascript
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

// document.getElementById("secretNumber").textContent = secretNumber;

// bind screen message to an ID.
// let message = document.getElementById("message").textContent;
// console.log(message);

// add event listener t0 check button
document.querySelector("button").addEventListener("click", checkScores);

// Event Function
function checkScores() {
  // bind player guess
  const guess = Number(document.querySelector("input").value);
  //   check for empty input
  if (!guess) {
    document.getElementById("message").textContent = "⚠️ Input a number";
  } else if (guess == secretNumber) {
    document.getElementById("message").textContent = "🎉🥳 YOU WIN!!!!";
  } else if (guess > secretNumber) {
    document.getElementById("message").textContent = "📈 Too Hgh!";
  } else if (guess < secretNumber) {
    document.getElementById("message").textContent = "📉 Too Low!";
  }
}
