const express = require('express');

const router = express.Router();
const RecruiterController = require('../src/recruiter/RecruiterController');

router.get('/', RecruiterController.recruiters_get);

router.get('/:recruiterId/', RecruiterController.recruiterId_get);

router.get('/:recruiterId/info', RecruiterController.recruiterId_info_get);
router.post('/:recruiterId/info', RecruiterController.recruiterId_info_post);

router.get('/:recruiterId/jobs', RecruiterController.recruiterId_jobs_get);
router.post('/:recruiterId/jobs', RecruiterController.recruiterId_jobs_post);

module.exports = router;
