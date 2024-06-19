const fs = require('fs');
const csv = require('csv-parser');

function countStudents(filePath) {
  let results = [];

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Cannot load the database`);
      console.error(err);
    } else {
      const parser = csv();
      parser.write(data);
      parser.end();
      parser.on('readable', function () {
        let record;
        while ((record = parser.read()) !== null) {
          results.push(record);
        }
      });
      parser.on('error', function (err) {
        console.error(err);
      });
      parser.on('end', function () {
        const numberOfStudents = results.length - 1; // subtract 1 for the header row
        const field = results[0].field;
        const listOfFirstNames = results.slice(1).map((student) => student.firstName); // skip the header row
        console.log(`Number of students: ${numberOfStudents}`);
        console.log(`Number of students in ${field}: ${numberOfStudents}. List: ${listOfFirstNames}`);
        const fields = {};
        results.slice(1).forEach((student) => {
          if (!fields[student.field]) fields[student.field] = [];
          fields[student.field].push(student.firstName);
        });
        for (const key of Object.keys(fields)) {
          console.log(`Number of students in ${key}: ${fields[key].length}. List: ${fields[key].join(', ')}`);
        }
      });
    }
  });
}

module.exports = countStudents;
