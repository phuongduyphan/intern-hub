const { Model } = require('../../config/mysql/mysql-config');

class Job extends Model {
  static get tableName() {
    return 'jobs';
  }

  static get idColumn() {
    return 'jobId';
  }

  static get relationMappings() {
    const { Recruiter } = require('../recruiter/Recruiter');
    const { Category } = require('../category/Category');

    return {
      recruiters: {
        relation: Model.BelongsToOneRelation,
        modelClass: Recruiter,
        join: {
          from: 'jobs.recruiterId',
          to: 'recruiters.recruiterId',
        },
      },
      categories: {
        relation: Model.ManyToManyRelation,
        modelClass: Category,
        join: {
          from: 'jobs.jobId',
          through: {
            from: 'jobCategory.jobId',
            to: 'jobCategory.categoryId',
          },
          to: 'categories.categoryId',
        },
      },
    };
  }
}

module.exports = {
  Job,
};
