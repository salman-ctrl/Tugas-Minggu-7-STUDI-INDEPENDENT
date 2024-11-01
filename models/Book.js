const mongoose = require('mongoose');
const { type } = require('os');
const { title } = require('process');

const bookSchema = new mongoose.Schema({
    title: {
        type: String, required: true, unique: true
    },
    author: {
        type: String, required: true
    },
    code: {
        type: String, required: true, unique: true
    },
    year: {
        type: Number, required: true
    },
});

module.exports = mongoose.model("Book", bookSchema);