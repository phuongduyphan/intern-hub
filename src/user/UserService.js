const bcrypt = require('bcryptjs');
const _ = require('lodash');

const { User } = require('./User');

function hashing(userpass) {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(userpass, salt, (errHash, hash) => {
        if (errHash) return reject(errHash);
        return resolve(hash);
      });
    });
  });
}

function comparing(candidatePassword, hash) {
  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
      if (err) return reject(err);
      return resolve(isMatch);
    });
  });
}

class UserService {
  static async registerUser(user) {
    try {
      user.userpass = await hashing(user.userpass);
      const recvUser = await User.query().insertAndFetch(user);
      return recvUser;
    } catch (err) {
      throw err;
    }
  }

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

  static async authenticateUser(user) {
    try {
      const listOfUsers = await User.query().where({ username: user.username });
      if (_.isEmpty(listOfUsers)) {
        return {
          isMatch: undefined,
        };
      }
      const recvUser = listOfUsers[0];
      const isMatch = await comparing(user.userpass, recvUser.userpass);
      return { isMatch, recvUser };
    } catch (err) {
      throw err;
    }
  }
}

module.exports = {
  UserService,
};
