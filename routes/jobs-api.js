const express = require('express');

const router = express.Router();
const JobController = require('../src/job/JobController');

router.get('/', JobController.jobs_get);

router.get('/search', JobController.jobs_search_get);

module.exports = router;
