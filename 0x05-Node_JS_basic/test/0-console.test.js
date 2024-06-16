const sinon = require('sinon');
const assert = require('assert');
const displayMessage = require('./0-console');

describe('displayMessage', () => {
    let consoleSpy;

    beforeEach(() => {
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        consoleSpy.restore();
    });

    it('should print the correct message to STDOUT', () => {
        const testMessage = 'Hello NodeJS!';
        displayMessage(testMessage);

        assert(consoleSpy.calledOnce);
        assert(consoleSpy.calledWith(testMessage));
    });
});
