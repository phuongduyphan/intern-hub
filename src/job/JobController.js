const { JobService } = require('./JobService');

exports.jobs_get = async (req, res) => {
  try {
    const listOfJobs = await JobService.getListOfJobs();
    res.send(listOfJobs);
  } catch (err) {
    throw err;
  }
};

// TODO
exports.jobs_search_get = async (req, res) => {
  try {
    const { listOfCategories, listOfSkills } = req.body;
    const searchObj = { listOfCategories, listOfSkills };
    const listOfResults = await JobService.searchForJobsBy(searchObj);
    res.send(listOfResults);
  } catch (err) {
    throw err;
  }
};

exports.jobId_get = async (req, res) => {
  try {
    const { jobId } = req.params;
    const jobObj = { jobId };
    const returnObj = await JobService.getJob(jobObj);
    res.send(returnObj);
  } catch (err) {
    throw err;
  }
};

// TODO
exports.jobId_info_get = async (req, res) => {
  try {
    const { jobId } = req.params;
    const jobObj = { jobId };
    const returnObj = await JobService.getInfoByJob(jobObj);
    res.send(returnObj);
  } catch (err) {
    throw err;
  }
};

// TODO
exports.jobId_status_put = async (req, res) => {
  try {
    // TODO
    // validate user === 'admin' (else sendStatus = 401)
    // await JobService.updateStatusOfJob(jobId);
    // success: sendStatus = 200

  } catch (err) {
    throw err;
  }
};

// TODO
exports.jobId_categories_get = async (req, res) => {
  try {
    const { jobId } = req.params;
    const jobObj = { jobId };
    const listOfCategories = await JobService.getCategoriesByJob(jobObj);
    res.send(listOfCategories);
  } catch (err) {
    throw err;
  }
};
