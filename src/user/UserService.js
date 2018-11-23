const { User } = require('./User');

class UserService {
  static async getUserInfo(userId) {
    try {
      const user = new User();
      user.userId = userId;

      const listOfUsers = await User.query().where(user);
      const recvUser = listOfUsers[0];
      return recvUser;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = {
  UserService,
};
