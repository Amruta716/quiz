let quizuser = JSON.parse(localStorage.getItem("quizuser"));
let userResult = quizuser.quiz;
let main = document.querySelector("main");
let viewBtn = document.querySelector("#viewBtn");

let score = 0;

// CREATE RESULT BLOCKS
userResult.forEach((e) => {
  let div = document.createElement("div");

  if (e.userAnswer === e.crctAnswer) {
    div.className = "crct";
    score++;
  } else {
    div.className = "wrong";
  }

  div.innerHTML = `
    <p>${e.question}</p>
    <h4>Your Answer: ${e.userAnswer}</h4>
    <h5>Correct Answer: ${e.crctAnswer}</h5>
  `;

  main.append(div);
});

// PERCENTAGE
let percent = Math.round((score / userResult.length) * 100);

// NAME & SCORE
document.querySelector("#name").innerText = quizuser.first;
document.querySelector("#score").innerText = `${score}/${userResult.length}`;

// MESSAGE ACCORDING TO SCORE
let msg = document.querySelector("header h1");

if (percent >= 80) msg.innerText = "🔥 Excellent Performance!";
else if (percent >= 60) msg.innerText = "✅ Good Job!";
else if (percent >= 40) msg.innerText = "🙂 Keep Practicing";
else msg.innerText = "😟 Try Again";

// CIRCLE PROGRESS
let circle = document.querySelector("#progressCircle");
let percentText = document.querySelector("#percentText");

let radius = 70;
let circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = circumference;

// OFFSET CALCULATION
let offset = circumference - (percent / 100) * circumference;

// ANIMATION
setTimeout(() => {
  circle.style.strokeDashoffset = offset;
  percentText.innerText = percent + "%";
}, 300);

// TOGGLE VIEW ANSWERS
viewBtn.onclick = () => {
  if (main.style.display === "none") {
    main.style.display = "block";
    viewBtn.innerText = "Hide Answers";
  } else {
    main.style.display = "none";
    viewBtn.innerText = "View Answers";
  }
};
