const express = require('express');

const router = express.Router();
const SkillController = require('../src/skill/SkillController');

router.get('/', SkillController.skills_get); // get list of available skills
router.post('/', SkillController.skills_post); // add new skill

router.get('/:skillId/', SkillController.skillId_get); // get skill info + students having that skill

router.get('/:skillId/info', SkillController.skillId_info_get);

router.get('/:skillId/students', SkillController.skillId_students_get);

module.exports = router;
