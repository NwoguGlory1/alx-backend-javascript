// Import the http module
const http = require('http');
const countStudents = require('./3-read_file_async');

// Create the server
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  const url = req.url; // Get the URL path
  // Set the Content-Type header to text/plain
  res.setHeader('Content-Type', 'text/plain');
  if (url === '/') {
    // Send the response body
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    const database = process.argv[2];
    countStudents(database).then((response) => {
      res.end('This is the list of our students');
    }).catch((error) => {
      res.end(`Error: ${error.message}`);
    });
  }
});

app.listen(1245, 'localhost', () => {
  console.log('Server running at http://localhost:1245/');
});

module.exports = app;
