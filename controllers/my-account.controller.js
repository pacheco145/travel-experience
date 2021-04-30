const Experience = require('../models/Experience.model')

const myAccountGet = (req, res) => {
    res.render('my-account/my-account')
}

const addExperienceGet = (req, res) => {
    res.render('my-account/add-experience',)
}

const addExperiencePost = async (req, res, next) => {
    try {
        console.log(req.body)
        const {location, country, description, rating, tags} = req.body;

        const newExperience = new Experience({location, country, description, rating, tags});

        const createdExperience = await newExperience.save()

        return res.render('my-account/add-experience', {createdExperience})
    } catch (error) {
        return next(error);
    }
}

module.exports = {myAccountGet, addExperienceGet, addExperiencePost};