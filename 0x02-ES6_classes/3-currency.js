export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // Getter method for code property
  get code() {
    return this._code;
  }

  // Setter method for code property
  set code(newCode) {
    this._code = newCode;
  }

  // Getter method for name property
  get name() {
    return this._name;
  }

  // Setter method for name property
  set name(newName) {
    this._name = newName;
  }

  // Method to display the full currency information
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
