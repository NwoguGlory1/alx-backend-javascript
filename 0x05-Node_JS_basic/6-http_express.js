// Import the express module
const express = require('express');

// Create an instance of an Express application
const app = express();
const port = 1245;

// Define a route handler for the root path ('/')
app.get('/', (req, res) => {
  // Send a 'Hello World!' response when root path is accesed
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
  //   console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
