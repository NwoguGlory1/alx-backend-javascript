// Using the map function to return id from an array
export default function getListStudentIds(students) {
  if (Array.isArray(students)) {
    return students.map((student) => student.id);
  }
  return [];
}
