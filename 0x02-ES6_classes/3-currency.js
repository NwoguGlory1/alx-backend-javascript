export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;

// Getter method for code property
get code() {
  return this._code;
}

// Setter method for code property
set code(code) {
  return this._code = code;
}


// Getter method for name property
get name() {
  return this._name;
}

// Setter method for name property
set name(name) {
  this._name = name;
}

  export default displayFullCurrency() {
    return `${this._name} (${this._code}₦)`;
}
