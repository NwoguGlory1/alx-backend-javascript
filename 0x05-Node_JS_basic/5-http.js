// Import the http module and the countStudents function
const http = require('http');
const countStudents = require('./3-read_file_async');

// Create the server
const app = http.createServer((req, res) => {
  res.statusCode = 200; // Set the status code to 200 (OK)
  const url = req.url; // Get the URL path
  res.setHeader('Content-Type', 'text/plain'); // Set the Content-Type header to text/plain

  if (url === '/') {
    // If the request is for the root path, respond with a greeting
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    const database = process.argv[2]; // Get the database file path from command line arguments

    // Call countStudents and handle the returned promise
    countStudents(database).then((response) => {
      res.write('This is the list of our students\n'); // Write the initial message
      res.end(response.join('\n')); // Write the student list and end the response
    }).catch((error) => {
      res.end(`Error: ${error.message}`); // Write the error message and end the response
    });
  }
});

// Start the server and listen on port 1245
app.listen(1245, 'localhost', () => {
  console.log('Server running at http://localhost:1245/');
});

// Export the app module
module.exports = app;
