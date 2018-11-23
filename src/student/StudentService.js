const _ = require('lodash');

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

  static async searchStudentBySkills(listOfSkills) {
    try {
      const listOfRecvStudents = await StudentSkill
        .query()
        .join('skills', (join) => {
          join.on('studentSkill.skillId', '=', 'skills.skillId');
        })
        .select('studentId')
        .whereIn('skillName', listOfSkills)
        .groupBy('studentId')
        .orderBy(knex.raw('count(*)'), 'desc');

      const listOfStudentIds = [];
      listOfRecvStudents.forEach((element) => {
        listOfStudentIds.push(element.studentId);
      });

      const listOfInorderedStudents = await Student.query().eager('[skills]').whereIn('studentId', listOfStudentIds);
      const listOfStudents = _.sortBy(listOfInorderedStudents, (item) => {
        return listOfStudentIds.indexOf(item.studentId);
      });
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
