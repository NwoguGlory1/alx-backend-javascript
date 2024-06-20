const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai)');

describe('Calculator', () => {
  describe('calculateNumber()', () => {
    it('should sum rounded a, b based on type', () => {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });

    it('should subtract two numbers', () => {
      expect(calculateNumber('SUBTRACT', 1.9, 2.1)).to.equal(-0.2);
    });

    it('should divide two numbers', () => {
      expect(calculateNumber('DIVIDE', 5.5, 2.1)).to.equal(2.62);
      expect(calculateNumber('DIVIDE', 9.4, 3.7)).to.equal(2.25);
    });

    it('should throw an error when dividing by zero', () => {
      expect(() => calculateNumber('DIVIDE', 5.5, 0)).to.throw('Error');
    });
  });
});
