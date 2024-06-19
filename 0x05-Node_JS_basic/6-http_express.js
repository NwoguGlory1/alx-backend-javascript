// Import the express module
const express = require('express');

// Create an instance of an Express application
const app = express();

// Define a route handler for the root path ('/')
app.get('/', (req, res) => {
  // Send a 'Hello World!' response when root path is accessed
  res.send('Hello Holberton School!');
});

// Define the port number where server will listen for requests
const port = 1245;

// Start the server and listen on the specified port
app.listen(port, () => {
  // Log a message to the console when the server has started successfully
  console.log(`Server started on port ${port}`);
});

// Export the app module so it can be used in other files
module.exports = app;

