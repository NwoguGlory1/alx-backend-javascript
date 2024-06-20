// Import chai, sinon, Utils, sendPaymentRequestToApi
const sinon = require('sinon');
var { expect } = require('chai');

const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  // Define a test case
  it('should call Utils.calculateNumber with SUM, totalAmount, totalShipping', () => {
    // Create a stub for Utils.calculateNumber
    // pass Utils, calculateNumber as arg
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber');
    calculateNumberStub.returns(10);

    // Create a spy for console.log
    const consoleSpy = sinon.spy(console, 'log');

    // Call the function being tested that uses Utils.calculateNumber
    sendPaymentRequestToApi(100, 20);

    // Verify the stub was called with the expected arguments
    expect(calculateNumberStub.calledWithExactly('SUM', 100, 20)).to.be.true;

    // Verify that console.log was called with the correct message
    expect(consoleSpy.calledWithExactly('The total is: 10')).to.be.true;

    // Restore the original function to remove the spy and stub
    calculateNumberStub.restore();
    consoleSpy.restore();
  });
});
