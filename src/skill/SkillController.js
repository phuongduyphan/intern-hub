const { SkillService } = require('./SkillService');

exports.skills_get = async (req, res) => {
  try {
    const listOfSkills = await SkillService.getListOfSkills();
    res.send(listOfSkills);
  } catch (err) {
    throw err;
  }
};

exports.skills_post = async (req, res) => {
  try {
    const { skillName } = req.body;
    const skillObj = { skillName };

    const returnObj = await SkillService.createSkill(skillObj);
    res.send(returnObj);
  } catch (err) {
    throw err;
  }
};

// TODO
exports.skillId_get = async (req, res) => {
  try {
    const { skillId } = req.params;
    const skillObj = { skillId };
    const returnObj = await SkillService.getSkill(skillObj);
    res.send(returnObj);
  } catch (err) {
    throw err;
  }
};

// TODO
exports.skillId_info_get = async (req, res) => {
  try {
    const { skillId } = req.params;
    const skillObj = { skillId };
    const returnObj = await SkillService.getInfoBySkill(skillObj);
    res.send(returnObj);
  } catch (err) {
    throw err;
  }
};

// TODO
exports.skillId_students_get = async (req, res) => {
  try {
    const { skillId } = req.params;
    const skillObj = { skillId };
    const listOfStudents = await SkillService.getStudentsBySkill(skillObj);
    res.send(listOfStudents);
  } catch (err) {
    throw err;
  }
};
