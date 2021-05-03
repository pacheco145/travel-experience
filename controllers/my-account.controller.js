const Experience = require('../models/Experience.model');


const myAccountGet = async(req, res) => {
    const myExperiences = await Experience.find({user: req.user._id})
    // const myExperiences = await Experience.find()
    // console.log(req.user._id)
    // console.log(myExperiences)
    res.render('my-account/my-account', {user: req.user, myExperiences})
}

const addExperienceGet = async(req, res) => {
    const countries = await Experience.schema.tree.country.enum;
    const tags = await Experience.schema.tree.tags.enum;
    // console.log(tags)
    res.render('my-account/add-experience', {countries, tags})
}

const addExperiencePost = async (req, res, next) => {
    try {

        const {location, country, description, rating, tags} = req.body;
        const user = req.user;

        const image = req.image_url;

        const newExperience = new Experience({location, country, description, rating, tags, user, image});

        const createdExperience = await newExperience.save()

        return res.redirect('/my-account')
    } catch (error) {
        return next(error);
    }
}

module.exports = {myAccountGet, addExperienceGet, addExperiencePost};