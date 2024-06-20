const assert = require('assert');
const calculateNumber = require('./1-calcul');

// Describe the "Calculator" feature or module
describe('Calculator', () => {
  // Describe the "calculateNumber" function
  describe('calculateNumber()', () => {
    // Test case description
    it('should sum, subtract or divide rounded a, b based on type', () => {

      // Test case 2: Adding two positive numbers (SUM)
      assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);

      // Test case 3: Subtracting two numbers (SUBTRACT)
      assert.equal(calculateNumber('SUBTRACT', 1.9, 2.1), 0);

      // Test case 4: Dividing two numbers (DIVIDE)
      assert.equal(calculateNumber('DIVIDE', 5.5, 2.1), 3); // 6 / 2
      assert.equal(calculateNumber('DIVIDE', 9.4, 3.7), 2.25); // 9 / 4

      // Test case 5: Throws "Error" if dividing by zero
      assert.equal(calculateNumber('DIVIDE', 5.5, 0.1), 'Error'); // 6 / 0
    });
  });
});
