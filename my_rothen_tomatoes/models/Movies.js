const mongoose = require('mongoose');

const MoviesSchema = new mongoose.Schema({
    adult: {
        type: Boolean,
        required: [false],
        unique: false,
    },
    backdrop_path: {
        type: String,
        required: [false],
        unique: false,
    },
    commentaries: {
        type: Array,
        required: [false],
        unique: true
    },
    genre_ids: {
        type: Array,
        required: [false],
        unique: false
    },
    id: {
        type: Number,
        required: [false],
        unique: false
    },
    original_language: {
        type: String,
        required: [false],
        unique: false
    },
    original_title: {
        type: String,
        required: [false],
        unique: false
    },
    overview: {
        type: String,
        required: [false],
        unique: false
    },
    popularity: {
        type: Number,
        required: [false],
        unique: false
    },
    poster_path: {
        type: String,
        required: [false],
        unique: false
    },
    release_date: {
        type: String,
        required: [false],
        unique: false
    },
    title: {
        type: String,
        required: [true, "Please add a title"],
        unique: false
    },
    video: {
        type: Boolean,
        required: [false]
    },
    vote_average: {
        type: Number,
        required: [false],
        unique: false
    },
    vote_count: {
        type: Number,
        required: [false],
        unique: false
    }
})

module.exports = mongoose.models.Movies || mongoose.model('Movies', MoviesSchema);
