let contactList
window.addEventListener("DOMContentLoaded", (event) => {
  if (site_properties.use_local_storage.match("true")) {
    getContactFromStorage()
  } else {
    getContactDataFromServer() 
  }
});

const getContactFromStorage = () =>{
  contactList = localStorage.getItem('ContactList') ? 
  JSON.parse(localStorage.getItem('ContactList')) : []
  procesContactCount()
  createInnerHtml()
}

function procesContactCount() {
  document.querySelector(".contact-count").textContent = contactList.length;
}

function getContactDataFromServer() {
  makePromiseCall("GET", site_properties.server_url, true)
    .then(
      (responseText) =>{
        contactList = JSON.parse(responseText)
        procesContactCount()
        createInnerHtml();
      }
    )
    .catch(
      (error) =>
        {
            console.log("Error status"+JSON.stringify(error));
            contactList = []
            processContactCount()
        }
    );

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
            <img src="../assets/icons/delete-black-18dp.svg" alt="delete" id="${contact.id}" onclick="remove(this)">
            <img src="../assets/icons/create-black-18dp.svg" alt="update" id="${contact.id}" onclick="update(this)">
        </td>
        </tr>`;
  }
  document.querySelector("#table-display").innerHTML = innerHtml;
};

function remove(node) {
    let removeContact = contactList.find(contact => contact.id == node.id)
    if (!removeContact) {
        return
    }
    const index = contactList.map(contact => contact.id).indexOf(removeContact.id)
    contactList.splice(index, 1); 
    if (site_properties.use_local_storage.match("true")) {
    localStorage.setItem("ContactList",JSON.stringify(contactList))
    document.querySelector(".contact-count").textContent = contactList.length
    createInnerHtml();
    }
    else{
      const deleteUrl = site_properties.server_url + removeContact.id.toString()
      console.log(deleteUrl);
      makePromiseCall("DELETE", deleteUrl, false)
      .then(
        (responseText) =>
          createInnerHtml()
      )
      .catch(
        (error) =>{
            console.log("Delete Error Status: "+JSON.stringify(error));
        }
      );
  }
}

function update(node) {
    let contactEdit = contactList.find(editContact => editContact.id == node.id)
    if (!contactEdit) {
        return
    }
    localStorage.setItem('contactEdit',JSON.stringify(contactEdit))
    window.location.replace("../pages/AddressBookFrom.html")
  }