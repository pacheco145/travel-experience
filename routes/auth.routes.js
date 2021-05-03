const express = require('express');
const controller = require('../controllers/auth.controller.js');
const router = express.Router();

router.get('/login', controller.loginGet);
router.post('/login', controller.loginPost);

router.get('/register', controller.registerGet);
router.post('/register', controller.registerPost);

router.post('/logout', controller.logoutPost);

module.exports = router;