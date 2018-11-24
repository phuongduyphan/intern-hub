const { Model } = require('../../config/mysql/mysql-config');

class Student extends Model {
  static get tableName() {
    return 'students';
  }

  static get idColumn() {
    return 'studentId';
  }

  static get relationMappings() {
    const { User } = require('../user/User');
    const { Skill } = require('../skill/Skill');

    return {
      users: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'students.studentId',
          to: 'users.userId',
        },
      },
      skills: {
        relation: Model.ManyToManyRelation,
        modelClass: Skill,
        join: {
          from: 'students.studentId',
          through: {
            from: 'studentSkill.studentId',
            to: 'studentSkill.skillId',
          },
          to: 'skills.skillId',
        },
      },
    };
  }
}

module.exports = {
  Student,
};
