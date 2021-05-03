// const mongoose = require('mongoose');
const Experience = require('../models/Experience.model')


const tagsGet = async(req, res) => {
    const experiences = await Experience.find()
    const tags = [];
    // console.log(experiences)
    experiences.map(experience=>{
        // console.log(experience.tags)
        for (let tag of experience.tags) {
            const hasTag = tags.includes(tag)
            if (!hasTag){
                tags.push(tag)
            }
        }
        // console.log(tags)
    })
    res.render('tags/tags', {tags, user: req.user})
}

const experienceGetByTag = async(req, res) => {
    const {tag} = req.params;
    // console.log(tag)
    try {

        const experiences = await Experience.find({tags: tag});
        // const experiencesByCountry = await Experience.map()
        // console.log(experiences);

        res.render('experiences', {tag, experiences, user: req.user})
        // return res.status(200).json(experiencesByCountry);
    } catch (error) {
        console.log('error', error);
        error.status = 418;
        return next(error)
    }
}


module.exports = {tagsGet, experienceGetByTag}