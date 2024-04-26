// Import the ClassRoom class
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // Getter method for code property
  get amount() {
    return this._amount;
  }

  // Setter method for code property
  set amount(newAmount) {
    this._amount = newAmount;
  }

  // Getter method for name property
  get currency() {
    return this._currency;
  }

  // Setter method for name property
  set name(newCurrency) {
    this._currency = newCurrency;
  }

  // Method to display the full currency information
  displayFullPrice() {
    return `${this._amount} ${this._currency.name}  (${this._currency.code})`;
  }

  // Static method to convert price
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
