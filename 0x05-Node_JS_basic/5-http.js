// Import the http module
const http = require('http');

// Import the countStudents function
const countStudents = require('./3-read_file_async');

// Parse command-line arguments to get the database file path
const args = process.argv.slice(2);
const DATABASE = args[0];

const hostname = '127.0.0.1';
const port = 1245;

// Create the server
const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  // Set the Content-Type header to text/plain
  res.setHeader('Content-Type', 'text/plain');

  const { url } = req;

  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    if (!DATABASE) {
      res.end('This is the list of our students\nError: No database file provided');
      return;
    }

    res.write('This is the list of our students\n');
    try {
      const students = await countStudents(DATABASE);
      res.end(`${students.join('\n')}`);
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
