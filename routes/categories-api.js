const express = require('express');

const router = express.Router();
const CategoryController = require('../src/category/CategoryController');

router.get('/', CategoryController.categories_get);
router.post('/', CategoryController.categories_post);

router.get('/:categoryId', CategoryController.categoryId_get);

router.get('/:categoryId/info', CategoryController.categoryId_info_get);

router.get('/:categoryId/jobs', CategoryController.categoryId_jobs_get);

module.exports = router;
