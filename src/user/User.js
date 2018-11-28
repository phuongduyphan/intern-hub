const { Model } = require('../../config/mysql/mysql-config');

class User extends Model {
  static get tableName() {
    return 'users';
  }

  static get idColumn() {
    return 'userId';
  }

  static get relationMappings() {
    const { Student } = require('../student/Student');
    const { Recruiter } = require('../recruiter/Recruiter');

    return {
      students: {
        relation: Model.HasOneRelation,
        modelClass: Student,
        join: {
          from: 'users.userId',
          to: 'students.studentId',
        },
      },
      recruiters: {
        relation: Model.HasOneRelation,
        modelClass: Recruiter,
        join: {
          from: 'users.userId',
          to: 'recruiters.recruiterId',
        },
      },
    };
  }
}

module.exports = {
  User,
};
