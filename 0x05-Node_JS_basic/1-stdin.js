// Set the encoding for stdin to 'utf8' so it reads data as a string
process.stdin.setEncoding('utf8');

// Write the initial prompt to the standard output
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Handle 'data' event to capture user input
process.stdin.on('data', (data) => {
  // Trim the data to remove any extraneous whitespace or newline characters
  const INPUT = data.trim();

  // Display the user's name
  process.stdout.write(`Your name is: ${INPUT}\n`);

  // End the input stream
  process.stdin.end();
});

// Handle 'end' event to display closing message
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
