var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    question: String,
    category: String,
    answers: [
        { text: String, correct: Boolean }
    ]
});

module.exports = mongoose.model('FlashCard', schema);