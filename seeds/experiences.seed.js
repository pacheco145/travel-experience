const mongoose = require('mongoose');
const {DB_URL, DB_CONFIG} = require('../db');
const Experience = require('../models/Experience.model');

const experiencesArray = [
    {
        location: 'Montreal',
        country: 'Canada',
        description: 'The perfect combination of buildings and nature, big city but huge opened spaces',
        rating: 8,
        tags: ['big city'],
        // user: 'Pablo P',
        // image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Rough_Collie_600.jpg'
    },
    {
        location: 'Nostra Senhora da Rocha',
        country: 'Portugal',
        description: 'Paradise beach at the end of Europe',
        rating: 7,
        tags: ['landscape', 'nature'],
        // user: 'Pedro',
        // image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Rough_Collie_600.jpg'
    },
    {
        location: 'Martini Tower of Groningen',
        country: 'Netherlands',
        description: 'Perfect landscape view of this small northern city',
        rating: 7,
        tags: ['landscape'],
        // user: 'Paparapa',
        // image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Rough_Collie_600.jpg'
    },
    {
        location: 'Atlantic route',
        country: 'Norway',
        description: 'Long road crossing through the norwegian fjords, perfect views',
        rating: 9,
        tags: ['landscape', 'nature', 'roadtrip'],
        // user: 'Pafgs',
        // image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Rough_Collie_600.jpg'
    },
    {
        location: 'Cabo Peñas',
        country: 'Spain',
        description: 'Nice view from this cape in the northern coast of Spain',
        rating: 8,
        tags: ['big city'],
        // user: 'Pablo P',
        // image: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Rough_Collie_600.jpg'
    }
]

mongoose.connect(DB_URL, DB_CONFIG)
    .then(async () => {
        console.log('Ejecutando seed');

        await Experience.insertMany(experiencesArray);
        console.log('Añadidas experiences a DB'); 
    })
    .catch(error => {console.log('Hay error', error)})
    .finally(() => mongoose.disconnect())