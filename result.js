let quizuser = JSON.parse(localStorage.getItem("quizuser"));
let userResult = quizuser.quiz;
console.log(quizuser);

let main = document.querySelector("main");
let score = 0;
userResult.map((e) => {
  //! one way to write result without style
  //   main.innerHTML += `
  //     <p>${e.question}</p>
  //     <h3>Your Answer:${e.userAnswer}</h3>
  //     <h3>Correct Answer: ${e.crctAnswer}</h3>
  //     `;

  //! second way to achieve result using style
  let div = document.createElement("div");
  main.append(div);
  if (e.userAnswer == e.crctAnswer) {
    div.className = "crct";
    score++;
  } else {
    div.className = "wrong";
  }
  let p = document.createElement("p");
  p.innerHTML = e.question;

  let h3 = document.createElement("h3");
  h3.innerHTML = `Your Answer:${e.userAnswer}`;

  let h4 = document.createElement("h4");
  h4.innerHTML = `correct Answer :${e.crctAnswer}`;

  div.append(p, h3, h4);
});

let userName = document.querySelector("#name");
let userScore = document.querySelector("#score");
let innerDiv = document.querySelector("#innerDiv");
let width = 0;
let marks = document.querySelector("#marks");

userName.innerHTML = quizuser.first;
userScore.innerHTML = `${score}/${userResult.length}`;

let percentage = setInterval(() => {
  width++;
  innerDiv.style.width = `${width}%`;
  if (width >= (score / userResult.length) * 100) {
    clearInterval(percentage);

    marks.innerHTML = `${((score / userResult.length) * 100).toFixed(2)}%`;
    marks.style.display = "block";
  }
}, 20);
