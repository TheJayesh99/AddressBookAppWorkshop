window.addEventListener("DOMContentLoaded", (event) => {
  //validate first name
  const name = document.querySelector("#name");
  const nameError = document.querySelector(".name-error");
  name.addEventListener("input", function () {
    if (name.value.length == 0) {
      nameError.textContent = "";
      return;
    }
    let nameRegex = RegExp("^[A-Z]{1}[a-zA-Z ]{2,}$");
    if (nameRegex.test(name.value)) {
      nameError.textContent = "";
    } else {
      nameError.textContent = "Invalid name";
    }
  });

  //validation for phone number
  const phoneNumber = document.querySelector("#phoneNumber");
  const numberError = document.querySelector(".tel-error");
  phoneNumber.addEventListener("input", function () {
    let phoneNumberRegex = RegExp("^[1-9]{2}[ ][9]{1}[0-9]{9}$");
    if (phoneNumberRegex.test(phoneNumber.value)) {
        numberError.textContent = ""
    } else {
      numberError.textContent = "Phone number is incorrect";
    }
  });

  //validation for zip code
  const zip = document.querySelector("#zip");
  const zipError = document.querySelector(".zip-error");
  zip.addEventListener("input", function () {
    let zipRegex = RegExp("^[0-9]{3}[ ]?[0-9]{3}$");
    if (zipRegex.test(zip.value)) {
        zipError.textContent = "";
      } else {
        zipError.textContent = "Invalid zipcode";
      }
  });
});
