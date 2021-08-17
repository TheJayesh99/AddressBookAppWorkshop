window.addEventListener("DOMContentLoaded", (event) => {
  //validate first name
  const name = document.querySelector("#name");
  const nameError = document.querySelector(".name-error");
  name.addEventListener("input", function () {
    if (name.value.length == 0) {
      nameError.textContent = "";
      return;
    }
    try {
      new Contact().name = name.value;
      nameError.textContent = "";
    } catch (error) {
      nameError.textContent = error;
    }
  });

  //validation for phone number
  const phoneNumber = document.querySelector("#phoneNumber");
  const numberError = document.querySelector(".tel-error");
  phoneNumber.addEventListener("input", function () {
    if (phoneNumber.value.length == 0) {
      numberError.textContent = "";
      return;
    }
    try {
      new Contact().phoneNumber = phoneNumber.value;
      numberError.textContent = "";
    } catch (error) {
      numberError.textContent = error;
    }
  });

  //validation for zip code
  const zip = document.querySelector("#zip");
  const zipError = document.querySelector(".zip-error");
  zip.addEventListener("input", function () {
    if (zip.value.length == 0) {
      zipError.textContent = "";
      return;
    }
    try {
      new Contact().zip = zip.value;
      zipError.textContent = "";
    } catch (error) {
      zipError.textContent = error;
    }
  });
});

function save() {
  try {
    let contact = createContact();
    craeteAndUpdateStorage(contact)
  } catch (error) {
    alert(error);
  }
}

function craeteAndUpdateStorage(contact) {
  let contactList = JSON.parse(localStorage.getItem("ContactList"))
  if (contactList != undefined) {
    contactList.push(contact)
  } else {
    contactList = [contact]
  }
  alert("Contact Added Sucessfully")
  localStorage.setItem("contactList",JSON.stringify(contactList))
}

function createContact() {
  let contact = new Contact();
  contact.id = new Date().getTime();
  try {
    contact.name = getInputValueById("#name");
  } catch (error) {
    setTextValue(".name-error", error);
    throw error;
  }

  try {
    contact.phoneNumber = getInputValueById("#phoneNumber");
  } catch (error) {
    setTextValue(".tel-error", error);
    throw error;
  }
  contact.address = getInputValueById("#address");
  let city = getInputValueById("#city");
  if (city != "Select City") {
    contact.city = city;
  } else {
    throw "Please select city";
  }
  let state = getInputValueById("#state");
  if (state != "Select State") {
    contact.state = state;
  } else {
    throw "Please select state";
  }

  try {
    contact.zip = getInputValueById("#zip");
  } catch (error) {
    setTextValue(".zip-error", error);
    throw error;
  }
  console.log(contact.toString());
  return contact
}

function getInputValueById(property) {
  let value = document.querySelector(property).value;
  return value;
}

function resetForm() {
    setValue("#name", "");
    setValue("#phoneNumber", "");
    setValue("#address", "");
    setValue("#city", "Select City");
    setValue("#state", "Select State");
    setValue("#zip", "");
  }

function setValue(id, value) {
const element = document.querySelector(id);
element.value = value;
}