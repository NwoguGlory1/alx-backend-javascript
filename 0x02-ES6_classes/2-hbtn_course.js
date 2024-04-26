export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter method for name property
  get name() {
    return this._name;
  }

  // Setter method for name property
  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new TypeError('Name must be a string');
    }
  }

  // Getter method for length property
  get length() {
    return this._length;
  }

  // Setter method for length property
  set length(newLength) {
    if (typeof newLength === 'number') {
      this._length = newLength;
    } else {
      throw new TypeError('Length must be a number');
    }
  }

  // Getter method for students property
  get students() {
    return this._students;
  }

  // Setter method for students property
  set students(newStudents) {
    if (
      Array.isArray(newStudents) && newStudents.every((student) => typeof student === 'string')
    ) {
      this._students = newStudents;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}

/* Create a new HolbertonCourse object
try {
  const course = new HolbertonCourse('JavaScript', 12, ['Alice', 'Bob', 'Charlie']);
  console.log(course);

  // Attempt to update properties with invalid values
  course.name = 123; // Invalid value for name
  course.length = -5; // Invalid value for length
  course.students = ['Alice', 123, 'Charlie']; // Invalid value for students
} catch (error) {
  console.error('Error:', error.message);
}*/
