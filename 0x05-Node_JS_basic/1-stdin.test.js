const readline = require('readline');
const fs = require('fs');

test('should display welcome message', () => {
  const stdin = fs.createReadStream('stdin.txt');
  const stdout = fs.createWriteStream('stdout.txt');

  const rl = readline.createInterface({ input: stdin, output: stdout });

  const expectedOutput = 'Welcome to Holberton School, what is your name?\n';

  expect(stdout.toString()).toBe(expectedOutput);
});

test('should display user name', () => {
  const stdin = fs.createReadStream('stdin.txt');
  const stdout = fs.createWriteStream('stdout.txt');

  const rl = readline.createInterface({ input: stdin, output: stdout });

  const userInput = 'John\n';
  stdin.write(userInput);

  const expectedOutput = 'Your name is: John\n';

  expect(stdout.toString()).toBe(expectedOutput);
});

test('should display closing message', () => {
  const stdin = fs.createReadStream('stdin.txt');
  const stdout = fs.createWriteStream('stdout.txt');

  const rl = readline.createInterface({ input: stdin, output: stdout });

  const userInput = 'John\n';
  stdin.write(userInput);
  stdin.end();

  const expectedOutput = 'This important software is now closing\n';

  expect(stdout.toString()).toBe(expectedOutput);
});
