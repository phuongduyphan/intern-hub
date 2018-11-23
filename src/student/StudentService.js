const { Student } = require('./Student');
const { Job } = require('../job/Job');

class StudentService {
  static async getListOfStudents() {
    try {
      const listOfStudents = await Student.query().eager('[skills]');
      return listOfStudents;
    } catch (err) {
      throw err;
    }
  }

  static async searchStudentWithSkills(listOfSkills) {
    try {

    } catch (err) {
      throw err;
    }
  }

  static async getStudent(student) {
    try {
      const listOfStudents = await Student.query().eager('[skills]').where(student);
      const recvStudent = listOfStudents[0];

      return recvStudent;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = {
  StudentService,
};
