// Import the http module
const http = require('http');

// Create the server
const app = http.createServer((req, res) => {
  res.statusCode = 200;
  // Set the Content-Type header to text/plain
  res.setHeader('Content-Type', 'text/plain');
  // Send the response body
  res.end('Hello Holberton School!');
});

app.listen(1245, 'localhost', () => {
  console.log('Server running at http://localhost:1245/');
});

module.exports = app;
