const express = require('express');
const passport = require('passport');

const router = express.Router();
const UserController = require('../src/user/UserController');

router.get('/:userId/info', UserController.user_info_get);

router.get('/:userId/status', passport.authenticate('jwt', { session: false }), UserController.user_status_get);

router.put('/:userId/status', passport.authenticate('jwt', { session: false }), UserController.user_status_put);

router.post('/register', UserController.user_register_post);

router.post('/login', UserController.user_login_post);

module.exports = router;
