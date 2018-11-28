const { Skill } = require('./Skill');

class SkillService {
  static async getListOfSkills() {
    try {
      const listOfSkills = await Skill.query();
      return listOfSkills;
    } catch (err) {
      throw err;
    }
  }

  static async createSkill(skill) {
    try {
      const recvSkill = await Skill.query().insertAndFetch(skill);
      return recvSkill;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = {
  SkillService,
};
