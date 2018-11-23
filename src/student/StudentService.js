const { Student } = require('./Student');
const { StudentSkill } = require('../studentSkill/StudentSkill');
const { knex } = require('../../config/mysql/mysql-config');

class StudentService {
  static async getListOfStudents() {
    try {
      const listOfStudents = await Student.query().eager('[skills]');
      return listOfStudents;
    } catch (err) {
      throw err;
    }
  }

  static async searchStudentWithSkills(listOfSkillIds) {
    try {
      const listOfRecvStudents = await StudentSkill
        .query()
        .select('studentId')
        .whereIn('skillId', listOfSkillIds)
        .groupBy('studentId')
        .orderBy(knex.raw('count(*)'), 'desc');

      const listOfStudentPromises = [];
      listOfRecvStudents.forEach((element) => {
        const student = new Student();
        student.studentId = element.studentId;
        listOfStudentPromises.push(this.getStudent(student));
      });

      const listOfStudents = await Promise.all(listOfStudentPromises);

      return listOfStudents;
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
