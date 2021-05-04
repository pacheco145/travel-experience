const express = require('express');
const controller = require('../controllers/my-account.controller');
const {upload, uploadToCloudinary} = require('../middlewares/file.middleware')
const {isAdmin} = require('../middlewares/auth.middleware')
const router = express.Router();

router.get('/', controller.myAccountGet)
router.get('/add-experience', controller.addExperienceGet)
router.post('/add-experience', [upload.single('image'), uploadToCloudinary], controller.addExperiencePost)
router.get('/remove-experiences', isAdmin, controller.removeExperiencesGet)
router.post('/remove-experiences/:id', isAdmin, controller.removeExperiencesDelete)

module.exports = router;