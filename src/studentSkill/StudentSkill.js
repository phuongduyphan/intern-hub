const { Model } = require('../../config/mysql/mysql-config');

class StudentSkill extends Model {
  static get tableName() {
    return 'studentSkill';
  }

  static get idColumn() {
    return ['studentId', 'skillId'];
  }

  static get relationMappings() {
    const { Student } = require('../student/Student');
    const { Skill } = require('../skill/Skill');

    return {
      students: {
        relation: Model.BelongsToOneRelation,
        modelClass: Student,
        join: {
          from: 'studentSkill.studentId',
          to: 'students.studentId',
        },
      },
      skills: {
        relation: Model.BelongsToOneRelation,
        modelClass: Skill,
        join: {
          from: 'studentSkill.skillId',
          to: 'skills.skillId',
        },
      },
    };
  }
}

module.exports = {
  StudentSkill,
};
