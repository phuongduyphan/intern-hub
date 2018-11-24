const { Model } = require('../../config/mysql/mysql-config');

class JobSkill extends Model {
  static get tableName() {
    return 'jobSkill';
  }

  static get relationMappings() {
    const { Job } = require('../job/Job');
    const { Skill } = require('../skill/Skill');

    return {
      jobs: {
        relation: Model.BelongsToOneRelation,
        modelClass: Job,
        join: {
          from: 'jobSkill.jobId',
          to: 'jobs.jobId',
        },
      },
      skills: {
        relation: Model.BelongsToOneRelation,
        modelClass: Skill,
        join: {
          from: 'jobSkill.skillId',
          to: 'skills.skillId',
        },
      },
    };
  }
}

module.exports = {
  JobSkill,
};
