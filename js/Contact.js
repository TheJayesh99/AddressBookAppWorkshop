class Contact {
  
    get id() {
      return this._id;
    }
    set id(id) {
      this._id = id;
    }
  
    get name() {
      return this._name;
    }
    set name(name) {
      let nameRegex = RegExp("^[A-Z]{1}[A-z ]{2,}$");
      if (nameRegex.test(name)) {
        this._name = name;
      } else {
        throw "invalid Name";
      }
    }
  
    get phoneNumber() {
      return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
      let phoneNumberRegex = RegExp("^[0-9]{2}[ ][9]{1,}[0-9]{9}$");
      if (phoneNumberRegex.test(phoneNumber)) {
        this._phoneNumber = phoneNumber;
      } else {
        throw "Phone number is incorrect";
      }   
    }
  
    get address() {
      return this._address;
    }
    set address(address) {
      this._address = address;
    }
    
    get city() {
      return this._city;
    }
    set city(city) {
      this._city = city;
    }
    
    get state() {
      return this._state;
    }
    set state(state) {
      this._state = state;
    }
  
    get zip() {
      return this._zip;
    }
    set zip(zip) {
      let zipRegex = RegExp("^[0-9]{3}[ ]?[0-9]{3}$");
      if (zipRegex.test(zip)) {
        this._zip = zip;
      } else {
        throw "zip is incorrect";
      }
    }
  
    toString(){
        return `id ${this.id} Name ${this.name} phoneNumber ${this.phoneNumber} Address ${this.address} City ${this.city} State ${this.state} Zip  ${this.zip}`
    }
  
  }
  