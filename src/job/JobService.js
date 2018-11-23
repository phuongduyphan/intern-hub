const _ = require('lodash');

const { Job } = require('./Job');
const { JobSkill } = require('../jobSkill/JobSkill');
const { JobCategory } = require('../jobCategory/JobCategory');
const { knex } = require('../../config/mysql/mysql-config');

class JobService {
  static async getListOfJobs() {
    try {
      const listOfJobs = await Job.query().eager('[skills, recruiters, categories]');
      return listOfJobs;
    } catch (err) {
      throw err;
    }
  }

  static async searchJobWithKeywords(listOfKeywords) {
    try {
      const [listOfJobWithCategories, listOfJobWithSkills] = await Promise.all([
        this.searchJobWithCategories(listOfKeywords), this.searchJobWithSkills(listOfKeywords)]);

      const listOfJobs = listOfJobWithCategories.concat(listOfJobWithSkills.filter((element) => {
        return !_.find(listOfJobWithCategories, { jobId: element.jobId });
      }));
      return listOfJobs;
    } catch (err) {
      throw err;
    }
  }

  static async searchJobWithCategories(listOfKeywords) {
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

      const listOfInorderedJobs = await Job.query().eager('[categories, skills]').whereIn('jobId', listOfJobIds);

      const listOfJobs = _.sortBy(listOfInorderedJobs, (item) => {
        return listOfJobIds.indexOf(item.jobId);
      });
      return listOfJobs;
    } catch (err) {
      throw err;
    }
  }

  static async searchJobWithSkills(listOfKeywords) {
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

      const listOfInorderedJobs = await Job.query().eager('[categories, skills]').whereIn('jobId', listOfJobIds);

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
