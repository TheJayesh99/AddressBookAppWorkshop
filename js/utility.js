function checkName(name) {
    let nameRegex = RegExp("^[A-Z]{1}[A-z ]{2,}$");
    if (!nameRegex.test(name)) {
        throw "invalid Name";
    }
}

function checkNumber(phoneNumber) {
    let phoneNumberRegex = RegExp("^[0-9]{2}[ ][9]{1,}[0-9]{9}$");
      if (!phoneNumberRegex.test(phoneNumber)) {
        throw "Phone number is incorrect";
      }
}

function checkZip(zip) {
    let zipRegex = RegExp("^[0-9]{3}[ ]?[0-9]{3}$");
      if (!zipRegex.test(zip)) {
        throw "zip is incorrect";
      }
}