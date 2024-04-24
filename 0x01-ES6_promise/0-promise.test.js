import getResponseFromAPI from './0-promise';

test('getResponseFromAPI resolves with correct data', () => {
  // Mock the setTimeout function to speed up the test
  jest.useFakeTimers();

  // Call the function and store the promise it returns
  const promise = getResponseFromAPI();

  // Advance timers so setTimeout is called
  jest.advanceTimersByTime(2000);

  // Check if the promise resolves with the correct data
  return expect(promise).resolves.toEqual("Async operation completed successfully!");
});
