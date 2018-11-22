const express = require('express');

const router = express.Router();
const JobController = require('../src/job/JobController');

router.get('/', JobController.jobs_get);

router.get('/search', JobController.jobs_search_get);

router.get('/:jobId', JobController.jobId_get);

router.get('/:jobId/info', JobController.jobId_info_get);

router.put('/:jobId/status', JobController.jobId_status_put);

router.get('/:jobId/categories', JobController.jobId_categories_get);

module.exports = router;
