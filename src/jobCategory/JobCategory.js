const { Model } = require('../../config/mysql/mysql-config');

class JobCategory extends Model {
  static get tableName() {
    return 'jobCategory';
  }

  static get relationMappings() {
    const { Job } = require('../job/Job');
    const { Category } = require('../category/Category');

    return {
      jobs: {
        relation: Model.BelongsToOneRelation,
        modelClass: Job,
        join: {
          from: 'jobCategory.jobId',
          to: 'jobs.jobId',
        },
      },
      categories: {
        relation: Model.BelongsToOneRelation,
        modelClass: Category,
        join: {
          from: 'jobCategory.categoryId',
          to: 'categories.categoryId',
        },
      },
    };
  }
}

module.exports = {
  JobCategory,
};
