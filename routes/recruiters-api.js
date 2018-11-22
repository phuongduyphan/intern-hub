const express = require('express');

const router = express.Router();
const RecruiterController = require('../src/recruiter/RecruiterController');

router.get('/', RecruiterController.recruiters_get);

router.get('/:recruiterId/', RecruiterController.recruiterId_get);

router.get('/:recruiterId/info', RecruiterController.recruiterId_info_get);
router.post('/:recruiterId/info', RecruiterController.recruiterId_info_post);

router.get('/:recruiterId/jobs', RecruiterController.recruiterId_jobs_get);
router.post('/:recruiterId/jobs', RecruiterController.recruiterId_jobs_post);

router.get('/:recruiterId/jobs/:jobId', RecruiterController.recruiterId_jobId_get);

router.put('/:recruiterId/jobs/:jobId/status', RecruiterController.recruiterId_jobId_status_put);

router.get('/:recruiterId/jobs/:jobId/info', RecruiterController.recruiterId_jobId_info_get);

router.get('/:recruiterId/jobs/:jobId/categories', RecruiterController.recruiterId_jobId_categories_get);

module.exports = router;
