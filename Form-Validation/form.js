document
  .getElementById("form-validate")
  .addEventListener("submit", function (event) {
    console.log(event);
    event.preventDefault(); // to avoid reload
    let userName = document.getElementById("userName").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document
      .getElementById("confirmPassword")
      .value.trim();

    let uNameError = document.getElementById("username-error");
    let emailError = document.getElementById("email-error");
    let passError = document.getElementById("password-error");
    let cPassError = document.getElementById("cPassword-error");

    let isValid = true;

    let uNamePattern = /^[A-Za-z]+ [A-Za-z]+$/;
    let emailPattern = /^[a-z0-9]+@[a-z]{4,}\.[a-z]{2,}$/;

    if (userName == "") {
      uNameError.innerText = "Name is Required";
      isValid=false;
    } else if (!uNamePattern.test(userName)) {
      uNameError.innerText = "Enter your Full Name";
      isValid=false;
    } else if (uNamePattern.test(userName)) {
      uNameError.innerText = "";
      isValid=true;
    }
    if (email == "") {
      emailError.innerText = "E-Mail is Required";
      isValid=false;
    } else if (!emailPattern.test(email)) {
      emailError.innerText = "Enter a valid email";
      isValid=false;
    } else if (emailPattern.test(email)) {
      emailError.innerText = "";
      isValid=true;
    }

    if (password == "") {
      passError.innerText = "Password is Required";
      isValid=false;
    } else if (passError.length <= 3 || password.length >= 10) {
      passError.innerText = "Enter a valid Password between 3 to 10";
      isValid=false;
    } else if (passError.length > 3 || password.length <= 10) {
      passError.innerText = "";
      isValid=true;
    }

    if (confirmPassword == "") {
      cPassError.innerText = "Confirm Password is Required";
      isValid=false;
    } else if (confirmPassword !== password) {
      cPassError.innerText = "Password is not matched";
      isValid=false;
    } else if (confirmPassword == password) {
      cPassError.innerText = "";
      isValid=true;
    }
if(isValid){
    alert(`Hi ${userName}, Welcome to our website`)
    console.log(userName,email,password);
}

  });
