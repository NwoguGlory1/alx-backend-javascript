// Import the Utils module
const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {

  // Call Utils.calculateNumber
  // while re-assigining a, b as total Amount, totalShipping
  const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
  }

module.exports = sendPaymentRequestToApi;
