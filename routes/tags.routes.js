const express = require('express');
const controller = require('../controllers/tags.controller.js');
const router = express.Router();

router.get('/tags', controller.tagsGet);
router.get('/tags/:tag', controller.experienceGetByTag)

module.exports = router;