const { Model } = require('../../config/mysql/mysql-config');

class Category extends Model {
  static get tableName() {
    return 'categories';
  }

  static get idColumn() {
    return 'categoryId';
  }

  static get relationMappings() {
    const { Job } = require('../job/Job');

    return {
      jobs: {
        relation: Model.ManyToManyRelation,
        modelClass: Job,
        join: {
          from: 'categories.categoryId',
          through: {
            from: 'jobCategory.categoryId',
            to: 'jobCategory.jobId',
          },
          to: 'jobs.jobId',
        },
      },
    };
  }
}

module.exports = {
  Category,
};
