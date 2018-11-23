const { Recruiter } = require('./Recruiter');

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

  static async createRecruiterInfo(recruiter) {
    try {
      const recvRecruiter = await Recruiter.query().insert(recruiter);
      return recvRecruiter;
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

  static async createRecruiterJob(recruiter, job) {
    try {
      const recruiterInstance = await this.getRecruiter(recruiter);
      const recvJob = await recruiterInstance.$relatedQuery('jobs').insertAndFetch(job);
      return recvJob;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = {
  RecruiterService,
};
