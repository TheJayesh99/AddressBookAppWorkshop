window.addEventListener("DOMContentLoaded", (event) => {
  document.querySelector(".contact-count").textContent = contactList.length;
  createInnerHtml();
});


const createInnerHtml = () => {
  if (contactList.length == 0) {
    return;
  }
  const headerHtml = `<tr>
    <th>Name</th>
    <th>Address</th>
    <th>City</th>
    <th>State</th>
    <th>Zip Code</th>
    <th>Phone Number</th>
    </tr>`;
  let innerHtml = `${headerHtml}`;
  for (const contact of contactList) {
    innerHtml = `${innerHtml} 
        <tr>
        <td>${contact._name}</td>
        <td>
            ${contact._address}
        </td>
        <td>${contact._city}</td>
        <td>${contact._state}</td>
        <td>${contact._zip}</td>
        <td>${contact._phoneNumber}</td>
        <td>
            <img src="../assets/icon/delete-black-18dp.svg" alt="delete" id="${contact._id}" onclick="remove(this)">
            <img src="../assets/icon/create-black-18dp.svg" alt="update" id="${contact._id}" onclick="update(this)">
        </td>
        </tr>`;
  }
  document.querySelector("#table-display").innerHTML = innerHtml;
};

let contactList = [
  {
    _id: 1629208165495,
    _name: "Jayesh",
    _phoneNumber: "90 9874563210",
    _address: "kharghar",
    _city: "Surat",
    _state: "Daman and Diu",
    _zip: "410141",
  },
  {
    _id: 1629208165495,
    _name: "Omkar",
    _phoneNumber: "90 9874563210",
    _address: "mumbai",
    _city: "Surat",
    _state: "Daman and Diu",
    _zip: "410141",
  },
];
