export default function updateStudentGradeByCity(students, city, newGrades) {
  // First, filter the students to include only those from the specified city
  const studentsFromCity = students.filter((student) => student.location === city);

  // Then, map over the filtered list to update the grades
  const updatedStudents = studentsFromCity.map((student) => {
    // Find the new grade for the current student
    const newGradeObj = newGrades.find((gradeObj) => gradeObj.studentId === student.id);

    // If a new grade is found, update the student's grade; otherwise, set it to "N/A"
    const updatedGrade = newGradeObj ? newGradeObj.grade : 'N/A';

    // Return a new object with the updated grade
    return { ...student, grade: updatedGrade };
  });

  // Return the array of updated students
  return updatedStudents;
}
