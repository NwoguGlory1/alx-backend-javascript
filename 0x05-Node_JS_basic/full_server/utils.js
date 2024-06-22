const fs = require('fs');

function readDatabase(filepath) {
  return fs.readFile(filepath, 'utf8')
    .then((data) => {
      const database = JSON.parse(data);
      const students = {};
      database.forEach((student) => {
        if (!students[student.field]) {
          students[student.field] = [];
        }
        students[student.field].push(student.firstname);
      });
      return students;
    })
    .catch((error) => {
      throw new Error(`Error reading database: ${error.message}`);
    });
}
