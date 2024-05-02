// Import the ClassRoom class
import ClassRoom from './0-classroom';

// Test suite for the ClassRoom class
describe('ClassRoom', () => {
 // Test case for the constructor
 it('should correctly set the maxStudentsSize property', () => {
    // Create a new instance of ClassRoom with maxStudentsSize set to 10
    const room = new ClassRoom(10);

    // Expect the _maxStudentsSize property of the room instance to be 10
    expect(room._maxStudentsSize).toBe(10);
 });
});
