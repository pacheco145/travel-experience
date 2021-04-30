const express = require('express');
const controller = require('../controllers/tags.controller.js');
const router = express.Router();

router.get('/tags', controller.tagsGet);

module.exports = router;