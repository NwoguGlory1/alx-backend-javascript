// Import the function you want to test
import getListStudents from './0-get_list_students';

// Write a test for the getListStudents function
test('getListStudents returns the correct array of students', () => {
 // Call the function and store the result
 const result = getListStudents();

 // Define the expected result
 const expectedResult = [
    {
      id: 1,
      firstName: 'Guillaume',
      location: 'San Francisco',
    },
    {
      id: 2,
      firstName: 'James',
      location: 'Columbia',
    },
    {
      id: 5,
      firstName: 'Serena',
      location: 'San Francisco',
    },
 ];

 // Use Jest's expect function to assert that the result matches the expected result
 expect(result).toEqual(expectedResult);
});
