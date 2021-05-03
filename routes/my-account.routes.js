const express = require('express');
const controller = require('../controllers/my-account.controller');
const {upload, uploadToCloudinary} = require('../middlewares/file.middleware')
const router = express.Router();

router.get('/', controller.myAccountGet)
router.get('/add-experience', controller.addExperienceGet)
router.post('/add-experience', [upload.single('image'), uploadToCloudinary], controller.addExperiencePost)

module.exports = router;