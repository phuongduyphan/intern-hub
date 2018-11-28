const _ = require('lodash');

const { Job } = require('./Job');
const { JobSkill } = require('../jobSkill/JobSkill');
const { JobCategory } = require('../jobCategory/JobCategory');
const { knex } = require('../../config/mysql/mysql-config');

class JobService {
  static async getListOfJobs() {
    try {
      const listOfJobs = await Job.query().eager('[skills,recruiters.users, categories]')
        .modifyEager('recruiters.users', (builder) => {
          builder.select('displayname', 'email', 'phoneNumber');
        });
      return listOfJobs;
    } catch (err) {
      throw err;
    }
  }

  static async searchJobByKeywords(listOfKeywords) {
    try {
      const [listOfJobByCategories, listOfJobBySkills] = await Promise.all([
        this.searchJobByCategories(listOfKeywords), this.searchJobBySkills(listOfKeywords)]);

      const listOfJobs = listOfJobByCategories.concat(listOfJobBySkills.filter((element) => {
        return !_.find(listOfJobByCategories, { jobId: element.jobId });
      }));
      return listOfJobs;
    } catch (err) {
      throw err;
    }
  }

  static async searchJobByCategories(listOfKeywords) {
    try {
      const listOfRecvJobs = await JobCategory
        .query()
        .join('categories', (join) => {
          join.on('jobCategory.categoryId', '=', 'categories.categoryId');
        })
        .select('jobId')
        .whereIn('categoryName', listOfKeywords)
        .groupBy('jobId')
        .orderBy(knex.raw('count(*)'), 'desc');

      const listOfJobIds = [];
      listOfRecvJobs.forEach((element) => {
        listOfJobIds.push(element.jobId);
      });

      const listOfInorderedJobs = await Job.query().eager('[categories, skills, recruiters.users]')
        .whereIn('jobId', listOfJobIds)
        .modifyEager('recruiters.users', (builder) => {
          builder.select('displayname', 'email', 'phoneNumber');
        });

      const listOfJobs = _.sortBy(listOfInorderedJobs, (item) => {
        return listOfJobIds.indexOf(item.jobId);
      });
      return listOfJobs;
    } catch (err) {
      throw err;
    }
  }

  static async searchJobBySkills(listOfKeywords) {
    try {
      const listOfRecvJobs = await JobSkill
        .query()
        .join('skills', (join) => {
          join.on('jobSkill.skillId', '=', 'skills.skillId');
        })
        .select('jobId')
        .whereIn('skillName', listOfKeywords)
        .groupBy('jobId')
        .orderBy(knex.raw('count(*)'), 'desc');

      const listOfJobIds = [];
      listOfRecvJobs.forEach((element) => {
        listOfJobIds.push(element.jobId);
      });

      const listOfInorderedJobs = await Job.query().eager('[categories, skills, recruiters.users]')
        .whereIn('jobId', listOfJobIds)
        .modifyEager('recruiters.users', (builder) => {
          builder.select('displayname', 'email', 'phoneNumber');
        });

      const listOfJobs = _.sortBy(listOfInorderedJobs, (item) => {
        return listOfJobIds.indexOf(item.jobId);
      });
      return listOfJobs;
    } catch (err) {
      throw err;
    }
  }

  static async getJob(job) {
    try {
      const listOfJobs = await Job.query().eager('[skills, recruiters, categories]').where(job);
      const recvJob = listOfJobs[0];

      return recvJob;
    } catch (err) {
      throw err;
    }
  }

  static async updateJobStatus(job) {
    try {
      const recvJob = await job.$query().patchAndFetch({ isValidated: 1 });
      return recvJob;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = {
  JobService,
};
