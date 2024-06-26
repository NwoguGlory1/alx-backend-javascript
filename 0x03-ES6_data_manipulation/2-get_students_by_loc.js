// Using the map function to return id from an array
// import getListStudents from './0-get_list_students';

export default function getStudentsByLocation(students, city) {
  return students.filter((student) => student.location === city);
}
