// Import the http module
const http = require('http');

// Import the countStudents function
const countStudents = require('./3-read_file_async');

// Create the server
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  // Set the Content-Type header to text/plain
  res.setHeader('Content-Type', 'text/plain');

  const { url } = req; // Destructure 'url' from 'req' object

  if (url === '/') {
    // If the URL is '/', respond with 'Hello Holberton School!'
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    // If the URL is '/students', get the database file path from command-line arguments
    const database = process.argv[2];

    // Check if the database argument is provided
    if (!database) {
      res.end('This is the list of our students\nError: No database file provided');
      return;
    }

    // Call countStudents function and handle the response or error
    countStudents(database)
      .then((response) => {
        // If successful, respond with the list of students
        res.write('This is the list of our students\n');
        res.end(response.join('\n'));
      })
      .catch((error) => {
        // If there's an error, respond with the error message
        res.end(`Error: ${error.message}`);
      });
  } else {
    // If the URL is not recognized, respond with a 404 Not Found message
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});

// Make the server listen on port 1245 and log a message when it's running
app.listen(1245, 'localhost', () => {
  console.log('Server running at http://localhost:1245/');
});

// Export the server as 'app'
module.exports = app;
