const assert = require('assert');
const calculateNumber = require('./0-calcul');

// Describe the "Calculator" feature or module
describe('Calculator', () => {
  // Describe the "calculateNumber" function
  describe('calculateNumber()', () => {
  // Test case description
  it('should round each input number and return their sum', () => {

    // Test case 1: Adding two positive integers
    const result = calculateNumber(1.23, 4.56);
    assert.equal(result, 6);

    // Test case 2: Adding two negative integers
    const resultNegative = calculateNumber(-1.23, -4.56);
    assert.equal(resultNegative, -6);

    // Test case 3: Adding a positive and a negative integer
    const resultMixed = calculateNumber(1.23, -4.56);
    assert.equal(resultMixed, -4);

    // Test case 4: Rounding to zero
    const resultZero = calculateNumber(0.99, 0.01);
    assert.equal(resultZero, 1);
    });
  });
});
