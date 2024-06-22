const fs = require('fs').promises;

const readDatabase = async (filePath) => {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    // Process the CSV data and return an object of arrays of first names per field
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

module.exports = readDatabase;
