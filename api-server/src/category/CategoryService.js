const { Category } = require('./Category');

class CategoryService {
  static async getListOfCategories() {
    try {
      const listOfCategories = await Category.query();
      return listOfCategories;
    } catch (err) {
      throw err;
    }
  }

  static async addCategory(category) {
    try {
      const recvCategory = await Category.query().insertAndFetch(category);
      return recvCategory;
    } catch (err) {
      throw err;
    }
  }

  static async getCategory(category) {
    try {
      const recvCategory = await Category.query().where(category);
      return recvCategory;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = {
  CategoryService,
};
