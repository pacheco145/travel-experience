const express = require('express');
const controller = require('../controllers/countries.controller.js');
const router = express.Router();

router.get('/countries', controller.countriesGet);
router.get('/countries/:country', controller.experienceGetByCountry)

module.exports = router;