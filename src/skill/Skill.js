const { Model } = require('../../config/mysql/mysql-config');

class Skill extends Model {
  static get tableName() {
    return 'skills';
  }

  static get idColumn() {
    return 'skillId';
  }

  static get relationMappings() {
    const { Student } = require('../student/Student');

    return {
      students: {
        relation: Model.ManyToManyRelation,
        modelClass: Student,
        join: {
          from: 'skills.skillId',
          through: {
            from: 'studentSkill.skillId',
            to: 'studentSkill.studentId',
          },
          to: 'students.studentID',
        },
      },
    };
  }
}

module.exports = {
  Skill,
};
