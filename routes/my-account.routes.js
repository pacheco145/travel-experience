const express = require('express');
const controller = require('../controllers/my-account.controller');
const router = express.Router();

router.get('/', controller.myAccountGet)
router.get('/add-experience', controller.addExperienceGet)
router.post('/add-experience', controller.addExperiencePost)

module.exports = router;