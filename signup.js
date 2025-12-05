let form = document.querySelector("form");
let inputs = document.querySelectorAll("input");
let spans = document.querySelectorAll("span");

let [firstname, lastname, email, mobile, createpassword, confirmpassword] =
  inputs;
let [efirst, elast, eemail, emobile, epass, ecpass] = spans;

let storage = JSON.parse(localStorage.getItem("details")) || [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let flag = true;

  // First Name
  if (!firstname.value) {
    efirst.innerHTML = "*ENTER FIRST NAME";
    flag = false;
  } else efirst.innerHTML = "";

  // Last Name
  if (!lastname.value) {
    elast.innerHTML = "*ENTER LAST NAME";
    flag = false;
  } else elast.innerHTML = "";

  // Email
  if (!email.value) {
    eemail.innerHTML = "*ENTER EMAIL";
    flag = false;
  } else eemail.innerHTML = "";

  // Mobile
  if (!mobile.value) {
    emobile.innerHTML = "*ENTER MOBILE";
    flag = false;
  } else if (storage.find((e) => e.phone === mobile.value)) {
    emobile.innerHTML = "Mobile already registered";
    flag = false;
  } else emobile.innerHTML = "";

  // Password
  if (!createpassword.value) {
    epass.innerHTML = "*ENTER PASSWORD";
    flag = false;
  } else epass.innerHTML = "";

  // Confirm Password
  if (
    !confirmpassword.value ||
    confirmpassword.value !== createpassword.value
  ) {
    ecpass.innerHTML = "*Password does not match";
    flag = false;
  } else ecpass.innerHTML = "";

  if (flag) {
    let details = {
      first: firstname.value,
      last: lastname.value,
      email: email.value,
      phone: mobile.value,
      pass: createpassword.value,
      quiz: null,
    };
    storage.push(details);
    localStorage.setItem("details", JSON.stringify(storage));
    alert("Signup successful! Please login.");
    window.location.href = "./login.html";
  }
});
