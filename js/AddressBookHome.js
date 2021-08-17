window.addEventListener("DOMContentLoaded", (event) => {
  contactList = getContactFromStorage()
  document.querySelector(".contact-count").textContent = contactList.length;
  createInnerHtml();
});

const getContactFromStorage = () =>{
    return localStorage.getItem('contactList') ? 
    JSON.parse(localStorage.getItem('contactList')) : []
}

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
            <img src="../assets/icons/delete-black-18dp.svg" alt="delete" id="${contact._id}" onclick="remove(this)">
            <img src="../assets/icons/create-black-18dp.svg" alt="update" id="${contact._id}" onclick="update(this)">
        </td>
        </tr>`;
  }
  document.querySelector("#table-display").innerHTML = innerHtml;
};
