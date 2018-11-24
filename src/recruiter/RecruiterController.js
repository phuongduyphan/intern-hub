const { RecruiterService } = require('./RecruiterService');

exports.recruiters_get = async (req, res) => {
  try {
    const listOfRecruiters = await RecruiterService.getListOfRecruiters();
    res.send(listOfRecruiters);
  } catch (err) {
    throw err;
  }
};

exports.recruiterId_get = async (req, res) => {
  try {
    const { recruiterId } = req.params;
    const recruiterObj = { recruiterId };
    const returnObj = await RecruiterService.getRecruiter(recruiterObj);
    res.send(returnObj);
  } catch (err) {
    throw err;
  }
};

exports.recruiterId_info_get = async (req, res) => {
  try {
    const { recruiterId } = req.params;
    const recruiterObj = { recruiterId };
    const returnObj = await RecruiterService.getRecruiterInfo(recruiterObj);
    res.send(returnObj);
  } catch (err) {
    throw err;
  }
};

exports.recruiterId_info_put = async (req, res) => {
  try {
    const { userId } = req.user;
    const {
      displayName,
      email,
      phoneNumber,
      recruiterAddress,
      company,
      recruiterDesc,
    } = req.body;

    const user = {
      userId,
      displayName,
      email,
      phoneNumber,
      recruiters: {
        recruiterAddress,
        company,
        recruiterDesc,
      },
    };

    await RecruiterService.updateRecruiterInfo(user);
    res.sendStatus(200);
  } catch (err) {
    throw err;
  }
};

exports.recruiterId_jobs_get = async (req, res) => {
  try {
    const { recruiterId } = req.params;
    const recruiterObj = { recruiterId };
    const returnObj = await RecruiterService.getRecruiterJob(recruiterObj);
    res.send(returnObj);
  } catch (err) {
    throw err;
  }
};


exports.recruiterId_jobs_post = async (req, res) => {
  try {
    const recruiterId = req.user.userId;
    const {
      jobTitle,
      jobDesc,
      location,
      listOfSkillIds,
      listOfCategoryIds,
    } = req.body;

    const jobObj = {
      recruiterId,
      jobTitle,
      jobDesc,
      location,
      jobSkills: listOfSkillIds,
      jobCategories: listOfCategoryIds,
    };
    const returnObj = await RecruiterService.createRecruiterJob(jobObj);
    res.send(returnObj);
  } catch (err) {
    throw err;
  }
};
