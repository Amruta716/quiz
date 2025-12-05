let form = document.querySelector("form");
let userName = document.querySelector("#username");
let password = document.querySelector("#password");

let euser = document.querySelectorAll("span")[0]; // username error
let epass = document.querySelectorAll("span")[1]; // password error
let eform = document.querySelectorAll("span")[2]; // match error

let datafromstorage = JSON.parse(localStorage.getItem("details")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault(); // prevent default navigation

  euser.innerHTML = "";
  epass.innerHTML = "";
  // eform.innerHTML = "";

  if (!userName.value) {
    euser.innerHTML = "Enter the email or phone no";
    return;
  }
  if (!password.value) {
    epass.innerHTML = "Enter the password";
    return;
  }

  let matchdata = datafromstorage.find(
    (e) =>
      (e.phone === userName.value && e.pass === password.value) ||
      (e.email === userName.value && e.pass === password.value)
  );

  if (matchdata) {
    localStorage.setItem("quizuser", JSON.stringify(matchdata));
    alert("Login successful!");
    window.location.href = "./quiz.html"; // redirect to quiz
  } else {
    eform.innerHTML = "User not found or password incorrect";
  }
});
