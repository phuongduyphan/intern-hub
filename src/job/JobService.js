const { Job } = require('./Job');

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

    } catch (err) {

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
