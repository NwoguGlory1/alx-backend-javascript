// Using reduce on arrays
// Function to calculate the sum of all numbers in an array
export default function getStudentIdsSum(students) {
  return students.reduce((accumulator, currentValue) => accumulator + currentValue.id, 0);
}
