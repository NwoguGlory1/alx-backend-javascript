const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    const database = process.argv[2];
    if (!database) {
      res.status(500).send('Cannot load the database');
      return;
    }

    try {
      const students = await readDatabase(database);
      // Process and send the response based on the students data
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    const major = req.params.major;
    const database = process.argv[2];
    if (!database) {
      res.status(500).send('Cannot load the database');
      return;
    }

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    try {
      const students = await readDatabase(database);
      // Process and send the response based on the students data and the major
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }
}

module.exports = StudentsController;
