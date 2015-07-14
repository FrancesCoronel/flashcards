var cards = [
    {
        question: 'What is Angular?',
        answers: [
            { text: 'A front-end framework for great power!', correct: true },
            { text: 'Something lame, who cares, whatever.', correct: false },
            { text: 'Some kind of fish, right?', correct: false }
        ],
        category: 'MongoDB'
    },
    {
        question: 'What is a controller?',
        answers: [
            { text: 'Something that manages my front-end routes', correct: false },
            { text: 'A function that allows me to manage a scope', correct: true },
            { text: 'An Angular template', correct: false }
        ],
        category: 'Angular'
    },
    {
        question: 'What does {{ }} do?',
        answers: [
            { text: 'It runs some Javascript', correct: false },
            { text: 'It looks for variables in HTML', correct: false },
            { text: 'It runs an Angular expression that accesses my $scope', correct: true }
        ],
        category: 'Node'
    }
];





var bluebird = require('bluebird');
var mongoose = require('mongoose');

var FlashCardModel = require('./server/models/flash-card-model');

mongoose.connect('mongodb://localhost/flash-cards');

var wipeDB = function () {

    var models = [FlashCardModel];

    models.forEach(function (model) {
        model.find({}).remove(function () {});
    });

    return bluebird.resolve();

};

var seed = function () {

    FlashCardModel.create(cards, function (err) {
        if (err) {
            console.error(err);
        }
        console.log('Database seeded!');
        process.kill(0);
    });

};

mongoose.connection.once('open', function () {
    wipeDB().then(seed);
});
