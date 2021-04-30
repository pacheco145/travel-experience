const express = require('express');
const controller = require('../controllers/locations.controller.js');
const router = express.Router();

router.get('/locations', controller.locationsGet);

module.exports = router;