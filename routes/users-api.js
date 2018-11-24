const express = require('express');

const router = express.Router();
const UserController = require('../src/user/UserController');

router.get('/:userId/info', UserController.user_info_get);

router.post('/register', UserController.user_register_post);

router.post('/login', UserController.user_login_post);

module.exports = router;
