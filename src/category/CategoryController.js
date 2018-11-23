const { CategoryService } = require('./CategoryService')

exports.categories_get = async (req, res) => {
  try {
    const listOfCategories = await CategoryService.getListOfCategories();
    res.send(listOfCategories);
  } catch (err) {
    throw err;
  }
};

exports.categories_post = async (req, res) => {
  try {
    const { categoryName } = req.body;
    const categoryObj = { categoryName };

    const categoryId = await CategoryService.addCategory(categoryObj);
    const returnObj = { categoryId };
    res.send(returnObj);
  } catch (err) {
    throw err;
  }
};

exports.categoryId_get = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const categoryObj = { categoryId };
    const returnObj = await CategoryService.getCategory(categoryObj);
    res.send(returnObj);
  } catch (err) {
    throw err;
  }
};

//TODO
exports.categoryId_info_get = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const returnObj = await CategoryService.getInfoByCategoryId(categoryId);
    res.send(returnObj);
  } catch (err) {
    throw err;
  }
};

//TODO
exports.categoryId_jobs_get = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const listOfJobs = await CategoryService.getJobsByCategoryId(categoryId);
    res.send(listOfJobs);
  } catch (err) {
    throw err;
  }
};
