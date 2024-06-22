// Import the express module
const express = require('express');

// Import the countStudents function
const countStudents = require('./3-read_file_async');

// Parse command-line arguments to get the database file path
const args = process.argv.slice(2);
const DATABASE = args[0];

// Create an instance of an Express application
const app = express();
const port = 1245;

// Define a route handler for the root path ('/')
app.get('/', async (req, res) => {
  // Set the Content-Type header to text/plain
  res.setHeader('Content-Type', 'text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  if (!DATABASE) {
    res.send('This is the list of our students\nError: No database file provided');
    return;
  }

  res.write('This is the list of our students\n');
  try {
    const students = await countStudents(DATABASE);
    res.end(`${students.join('\n')}`);
  } catch (error) {
    res.end(error.message);
  }
});

app.listen(port, () => {
  //   console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
