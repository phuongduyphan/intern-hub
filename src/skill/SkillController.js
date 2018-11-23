const SkillService = require('./SkillService');

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

    const skillId = await SkillService.addSkill(skillObj);
    const returnObj = { skillId };
    res.send(returnObj);
  } catch (err) {
    throw err;
  }
}

exports.skillId_get = async (req, res) => {
  try {
    const { skillId } = req.params;
    const returnObj = await SkillService.getSkillById(skillId);
    res.send(returnObj);
  } catch (err) {
    throw err;
  }
}

exports.skillId_info_get = async (req, res) => {
  try {
    const { skillId } = req.params;
    const returnObj = await SkillService.getInfoBySkillId(skillId);
    res.send(returnObj);
  } catch (err) {
    throw err;
  }
}

exports.skillId_students_get = async (req, res) => {
  try {
    const { skillId } = req.params;
    const returnObj = await SkillService.getStudentsBySkillId(skillId);
    res.send(returnObj);
  } catch (err) {
    throw err;
  }
}