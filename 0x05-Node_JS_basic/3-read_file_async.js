const fs = require('fs'); // Import the built-in 'fs' module to handle file system operations.

function countStudents(path) {
  // Define a function 'countStudents' that takes a file path as an argument and returns a Promise.
  return new Promise((resolve, reject) => {
    // Create a new Promise to handle asynchronous file reading.
    fs.readFile(path, 'utf8', (err, data) => {
      // Use 'fs.readFile' to read the file at the given path asynchronously.
      if (err) {
        // If an error occurs while reading the file,
        reject(Error('Cannot load the database')); // reject the Promise with an error message.
        return; // Exit the function to avoid further execution.
      }
      const response = []; // Initialize an empty array to store response messages.
      let msg; // Initialize a variable to store messages.

      const content = data.toString().split('\n'); // Split the file content by newline to get an array of lines.

      let students = content.filter((item) => item); // Filter out any empty lines from the content array.

      students = students.map((item) => item.split(',')); // Split each line by comma to get an array of student data.

      const NUMBER_OF_STUDENTS = students.length ? students.length - 1 : 0; // Calculate the number of students.
      msg = `Number of students: ${NUMBER_OF_STUDENTS}`; // Create a message with the number of students.
      console.log(msg); // Log the message to the console.

      response.push(msg); // Add the message to the response array.

      const fields = {}; // Initialize an object to store students grouped by their field of study.
      for (const i in students) {
        if (i !== 0) { // Skip the header row (first row).
          if (!fields[students[i][3]]) fields[students[i][3]] = []; // Initialize an array for the field if it doesn't exist.

          fields[students[i][3]].push(students[i][0]); // Add the student's name to the appropriate field array.
        }
      }

      delete fields.field; // Remove any field that might be named 'field' (if exists in the CSV header).

      for (const key of Object.keys(fields)) {
        // Loop through each field to create and log a message for each group of students.
        msg = `Number of students in ${key}: ${
          fields[key].length
        }. List: ${fields[key].join(', ')}`; // Create a message for each field.
        
        console.log(msg); // Log the message to the console.
        
        response.push(msg); // Add the message to the response array.
      }
      resolve(response); // Resolve the Promise with the response array.
    });
  });
}

module.exports = countStudents; // Export the 'countStudents' function so it can be used in other files.
