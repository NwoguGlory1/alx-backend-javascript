// import chai, sinon, Utils, sendPaymentRequestToApi
const sinon = require('sinon');
const { expect } = require('chai');

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function() {
  // Define a test case
  it('should call Utils.calculateNumber with SUM, totalAmount, totalShipping', () => {
    // Create a spy for Utils.calculateNumber
    // pass Utils, calculateNumber as arg
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    
    // Call the function being tested that uses Utils.calculateNumber
    sendPaymentRequestToApi(100, 20);
    
    // Assert that Utils.calculateNumber was called exactly once with the specified arguments
    expect(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Restore the original function to remove the spy
    calculateNumberSpy.restore();
  });
});
