const { Model } = require('../../config/mysql/mysql-config');

class Recruiter extends Model {
  static get tableName() {
    return 'recruiters';
  }

  static get relationMappings() {
    const { User } = require('../user/User');
    const { Job } = require('../job/Job');

    return {
      users: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: 'recruiters.recruiterId',
          to: 'users.userId',
        },
      },
      jobs: {
        relation: Model.HasManyRelation,
        modelClass: Job,
        join: {
          from: 'recruiters.recruiterId',
          to: 'jobs.recruiterId',
        },
      },
    };
  }
}

module.exports = {
  Recruiter,
};
