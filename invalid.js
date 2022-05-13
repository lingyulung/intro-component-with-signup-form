const fieldContainer = document.querySelectorAll(".fieldContainer");
const fNameField = document.getElementById("fNameField");
const lNameField = document.getElementById("lNameField");
const emailField = document.getElementById("emailField");
const passwordField = document.getElementById("passwordField");
const inputField = document.querySelectorAll(".inputField");
const fName = document.querySelector(".fName");
const lName = document.querySelector(".lName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const invalidImg = document.querySelectorAll(".invalidImg");
const fNameInvalid = document.querySelector(".fNameInvalid");
const lNameInvalid = document.querySelector(".lNameInvalid");
const emailInvalid = document.querySelector(".emailInvalid");
const passwordInvalid = document.querySelector(".passwordInvalid");
const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

document.querySelector(".userInfo").addEventListener("submit", function (e) {
  e.preventDefault();

  if (
    fName.value !== "" &&
    lName.value !== "" &&
    email.value.match(emailFormat) &&
    password.value !== ""
  ) {
    for (const container of fieldContainer) {
      container.style.height = "3rem";

      for (const field of inputField) {
        field.value = "";
        field.blur();
        field.classList.remove("redFieldOutline");
      }
    }

    for (const img of invalidImg) {
      img.style.opacity = "0";
    }

    return true;
  } else {
    if (fName.value === "") {
      fNameField.style.height = "auto";
      fName.classList.add("redFieldOutline");
      fNameInvalid.style.opacity = "100%";
    } else {
      fNameField.style.height = "3rem";
      fNameInvalid.style.opacity = "0";
      fName.classList.remove("redFieldOutline");
    }

    if (lName.value === "") {
      lNameField.style.height = "auto";
      lNameInvalid.style.opacity = "100%";
      lName.classList.add("redFieldOutline");
    } else {
      lNameField.style.height = "3rem";
      lNameInvalid.style.opacity = "0";
      lName.classList.remove("redFieldOutline");
    }

    if (!email.value.match(emailFormat)) {
      emailField.style.height = "auto";
      emailInvalid.style.opacity = "100%";
      email.classList.add("redFieldOutline");
    } else {
      emailField.style.height = "3rem";
      emailInvalid.style.opacity = "0";
      email.classList.remove("redFieldOutline");
    }

    if (password.value === "") {
      passwordField.style.height = "auto";
      passwordInvalid.style.opacity = "100%";
      password.classList.add("redFieldOutline");
    } else {
      passwordField.style.height = "3rem";
      passwordInvalid.style.opacity = "0";
      password.classList.remove("redFieldOutline");
    }

    return false;
  }
});
