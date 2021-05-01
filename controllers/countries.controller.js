const mongoose = require('mongoose');
const Experience = require('../models/Experience.model')

const countriesGet = async(req, res) => {
    const experiences = await Experience.find();
    res.render('countries/countries', {experiences})
}

const experienceGetByCountry = async(req, res) => {
    const {country} = req.params;
    console.log(req.params)
    try {
        const experiences = await Experience.find({country: country });
        // const experiencesByCountry = await Experience.map()
        // console.log(experiencesByCountry);

        res.render('experiences', {country, experiences})
        // return res.status(200).json(experiencesByCountry);
    } catch (error) {
        console.log('error', error);
        error.status = 418;
        return next(error)
    }
}

module.exports = {countriesGet, experienceGetByCountry}