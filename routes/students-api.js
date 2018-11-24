const express = require('express');
const passport = require('passport');

const router = express.Router();
const StudentController = require('../src/student/StudentController');

router.get('/', StudentController.students_get);
router.post('/', StudentController.students_post);

router.post('/search', StudentController.students_search);

router.get('/:studentId/', StudentController.studentId_get);

// router.get('/:studentId/info', StudentController.studentId_info_get);
router.post('/:studentId/info', passport.authenticate('jwt', { session: false }), StudentController.studentId_info_post);

// TODO
router.get('/:studentId/skills', StudentController.studentId_skills_get);
router.post('/:studentId/skills', StudentController.studentId_skills_post);

module.exports = router;
