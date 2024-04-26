export default class Airport {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }
  // Overriding the toString method

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
