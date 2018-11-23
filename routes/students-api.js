const express = require('express');

const router = express.Router();
const StudentController = require('../src/student/StudentController');

router.get('/', StudentController.students_get);

router.post('/search', StudentController.students_search);

router.get('/:studentId/', StudentController.studentId_get);

router.get('/:studentId/info', StudentController.studentId_info_get);
router.post('/:studentId/info', StudentController.studentId_info_post);

router.get('/:studentId/skills', StudentController.studentId_skills_get);
router.post('/:studentId/skills', StudentController.studentId_skills_post);

module.exports = router;
