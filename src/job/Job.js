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
    const { Skill } = require('../skill/Skill');

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
      skills: {
        relation: Model.ManyToManyRelation,
        modelClass: Skill,
        join: {
          from: 'jobs.jobId',
          through: {
            from: 'jobSkill.jobId',
            to: 'jobSkill.skillId',
          },
          to: 'skills.skillId',
        },
      },
    };
  }
}

module.exports = {
  Job,
};
