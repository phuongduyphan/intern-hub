const { transaction } = require('objection');

const { User } = require('../user/User');
const { Recruiter } = require('./Recruiter');
const { Job } = require('../job/Job');

class RecruiterService {
  static async getListOfRecruiters() {
    try {
      const listOfRecruiters = await Recruiter.query();
      return listOfRecruiters;
    } catch (err) {
      throw err;
    }
  }

  static async getRecruiter(recruiter) {
    try {
      const listOfRecruiters = await Recruiter.query().where(recruiter);
      const recvRecruiter = listOfRecruiters[0];
      await recvRecruiter.$relatedQuery('jobs');

      return recvRecruiter;
    } catch (err) {
      throw err;
    }
  }

  static async getRecruiterInfo(recruiter) {
    try {
      const listOfRecruiters = await Recruiter.query().where(recruiter);
      const recvRecruiter = listOfRecruiters[0];
      return recvRecruiter;
    } catch (err) {
      throw err;
    }
  }

  static async updateRecruiterInfo(user) {
    try {
      let recvUser;
      await transaction(User.knex(), async (trx) => {
        recvUser = await User
          .query(trx)
          .upsertGraphAndFetch(user);
      });
      return recvUser;
    } catch (err) {
      throw err;
    }
  }

  static async getRecruiterJob(recruiter) {
    try {
      const recruiterInstance = await this.getRecruiter(recruiter);
      const listOfRecruiterJobs = await recruiterInstance.$relatedQuery('jobs');
      return listOfRecruiterJobs;
    } catch (err) {
      throw err;
    }
  }

  static async createRecruiterJob(job) {
    try {
      let recvJob;
      await transaction(Job.knex(), async (trx) => {
        recvJob = await Job
          .query(trx)
          .insertGraphAndFetch(job);
      });

      return recvJob;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = {
  RecruiterService,
};
