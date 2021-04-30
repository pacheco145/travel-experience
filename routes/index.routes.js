const express = require('express');
const indexController = require('../controllers/index.controller')

const router = express.Router();

router.get('/', indexController.indexGet);

module.exports = router;