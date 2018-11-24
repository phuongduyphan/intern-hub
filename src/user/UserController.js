const jwt = require('jsonwebtoken');

const { UserService } = require('./UserService');
const { User } = require('./User');
const keys = require('../../config/keys');

exports.user_register_post = async (req, res) => {
  try {
    const {
      displayname,
      username,
      userpass,
      role,
    } = req.body;

    const user = {
      displayname,
      username,
      userpass,
      role,
    };

    await UserService.registerUser(user);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    
    res.sendStatus(409);
  }
};

exports.user_info_get = async (req, res) => {
  try {
    const { userId } = req.params;
    const recvUser = await UserService.getUserInfo(userId);
    res.send(recvUser);
  } catch (err) {
    throw err;
  }
};

exports.user_login_post = async (req, res) => {
  try {
    const { username, userpass } = req.body;
    const user = new User();
    user.username = username;
    user.userpass = userpass;

    const result = await UserService.authenticateUser(user);
    if (result.isMatch) {
      delete result.recvUser.userpass;
      const payload = JSON.parse(JSON.stringify(result.recvUser));

      const token = jwt.sign(payload, keys.secretOrKey, {
        expiresIn: '7d',
      });

      res.send({
        success: true,
        token,
      });
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    throw err;
  }
};
