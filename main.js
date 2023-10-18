// Generate Random nUmber with javascript
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);

let score = 20;
let highScore = 0;

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
    document.querySelector(".container").style.backgroundColor = "Green";
    document.getElementById("secretNumber").textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.getElementById("highScore").textContent = highScore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.getElementById("message").textContent = "📈 Too High!";
      score--;
      document.getElementById("score").textContent = score;
    } else {
      document.getElementById("message").textContent =
        "😭😭😭 You lost the game!";
      document.querySelector(".container").style.backgroundColor = "Red";
    }
  } else if (guess < secretNumber) {
    document.getElementById("message").textContent = "📉 Too Low!";
    score--;
    document.getElementById("score").textContent = score;
  }
  //   } else if (guess < secretNumber) {
}

document.getElementById("newGame").addEventListener("click", newGame);

function newGame() {
  document.getElementById("message").textContent = "Start Guessing...";

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.getElementById("secretNumber").textContent = "?";

  document.querySelector(".container").style.backgroundColor = "#f8fafc";

  score = 20;
  document.getElementById("score").textContent = score;

  secretNumber = "?";
}
