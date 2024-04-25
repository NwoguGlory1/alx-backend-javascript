import ClassRoom from '../0-classroom.js';

describe('ClassRoom', () => {
  test('constructor should initialize _maxStudentsSize property', () => {
    const room = new ClassRoom(10);
    expect(room._maxStudentsSize).toBe(10);
  });
});
