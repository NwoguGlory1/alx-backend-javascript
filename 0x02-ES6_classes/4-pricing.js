// Import the ClassRoom class
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this.amount = amount;
    this.currency = currency;
  }

  // Getter method for amount property
  get amount() {
    return this._amount;
  }

  // Setter method for amount property
  set amount(newAmount) {
    if (typeof newAmount === 'number') this._amount = newAmount;
  }

  // Getter method for currency property
  get currency() {
    return this._currency;
  }

  // Setter method for currency  property
  set currency(newCurrency) {
    if (newCurrency instanceof Currency) this._currency = newCurrency;
  }

  // Method to display the full currency information
  displayFullPrice() {
    return `${this.amount} ${this.currency.name}  (${this.currency.code})`;
  }

  // Static method to convert price
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
