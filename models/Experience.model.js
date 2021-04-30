const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const experienceSchema = new Schema(
    {
        location: {type: String, required: true},
        country: {type: String, required: true, enum: ['Spain', 'Canada', 'France', 'Norway', 'Denmark', 'Netherlands', 'Portugal']},
        description: {type: String, required: true},
        rating: {type: Number, required: true},
        tags: {type: [String], required: true, enum: ['nature', 'landscape', 'culture', 'roadtrip', 'big city']},
        user: {type: mongoose.Types.ObjectId, ref: 'Users'},
        // image: {type: String, required: true}
    },
    { timestramp: true }
);

const Experience = mongoose.model('Experiences', experienceSchema);

module.exports = Experience;