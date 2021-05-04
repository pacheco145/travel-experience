const mongoose = require('mongoose');
const Experience = require('../models/Experience.model')

const countriesGet = async(req, res) => {
    const experiences = await Experience.find();
    // const countryImg;

    const countries = [];
    // console.log(experiences)
    experiences.forEach(experience=>{
        // console.log(experience.country)
        const hasCountry = countries.some(countryOfArray => {
            // console.log('Pais ya en el array', countryOfArray.countryName)
            console.log('Pais de model', experience.country)
            // countryOfArray.countryName.includes(experience.country)
            return countryOfArray.countryName === experience.country
        })
        console.log(hasCountry)
        if (!hasCountry){

            // console.log(experience.country)
            // console.log(experience.image)
            countries.push({countryName:experience.country, countryImg:experience.image})
        }
        console.log('Array', countries)
        // for (let country of countries) {
        // }
    })
    res.render('countries/countries', {experiences, countries, user: req.user})
}

const experienceGetByCountry = async(req, res) => {
    const {country} = req.params;
    // console.log(req.params)
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