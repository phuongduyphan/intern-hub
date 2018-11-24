const express = require('express');
const passport = require('passport');

const router = express.Router();
const RecruiterController = require('../src/recruiter/RecruiterController');

router.get('/', RecruiterController.recruiters_get);

router.post('/jobs', passport.authenticate('jwt', { session: false }),
  RecruiterController.recruiterId_jobs_post);

router.get('/:recruiterId/', RecruiterController.recruiterId_get);

router.get('/:recruiterId/info', RecruiterController.recruiterId_info_get);
router.post('/:recruiterId/info', passport.authenticate('jwt', { session: false }),
  RecruiterController.recruiterId_info_post);

router.get('/:recruiterId/jobs', RecruiterController.recruiterId_jobs_get);

module.exports = router;
