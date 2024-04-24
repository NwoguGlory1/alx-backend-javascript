// taskBlock.test.js

import taskBlock from './1-block-scoped'; // Update the path if necessary

describe('taskBlock function', () => {
  test('should return [false, true] when trueOrFalse is false', () => {
    // Call the taskBlock function with false argument
    const result = taskBlock(false);
    
    // Check if the result matches the expected output
    expect(result).toEqual([false, true]);
  });

  test('should return [false, true] when trueOrFalse is true', () => {
    // Call the taskBlock function with true argument
    const result = taskBlock(true);
    
    // Check if the result matches the expected output
    expect(result).toEqual([false, true]);
  });
});
