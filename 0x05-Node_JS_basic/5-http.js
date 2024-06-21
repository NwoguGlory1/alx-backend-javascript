// Import the http module
const http = require('http');

// Import the countStudents function
const countStudents = require('./3-read_file_async');

// Create the server
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  // Set the Content-Type header to text/plain
  res.setHeader('Content-Type', 'text/plain');

  const url = req.url;

  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    const database = process.argv[2]; // Get the database file path from command-line arguments
    countStudents(database).then((response) => {
      res.write('This is the list of our students\n');
      res.end(response.join('\n'));
    }).catch((error) => {
      res.end(`Error: ${error.message}`);
    });
  }
});

app.listen(1245, 'localhost', () => {
  console.log('Server running at http://localhost:1245/');
});

module.exports = app;
