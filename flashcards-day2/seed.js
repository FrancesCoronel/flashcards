var cards = [
    {
        question: 'What is another word for "asking the database for information"?',
        answers: [
            { text: 'Query', correct: true },
            { text: 'Find', correct: false },
            { text: 'Search', correct: false }
        ],
        category: 'MongoDB'
    },
    {
        question: 'What is a schema?',
        answers: [
            { text: 'A MongoDB table', correct: false },
            { text: 'A way to execute a query with Mongoose', correct: false },
            { text: 'A description of a document in MongoDB', correct: true }
        ],
        category: 'MongoDB'
    },
    {
        question: 'Which of the following is NOT a valid Mongoose schema type?',
        answers: [
            { text: 'String', correct: false },
            { text: 'Collection', correct: true },
            { text: 'Date', correct: false }
        ],
        category: 'MongoDB'
    },
    {
        question: 'A Mongoose model must be created with . . .',
        answers: [
            { text: 'a schema', correct: true },
            { text: 'a document', correct: false },
            { text: 'another model', correct: false }
        ],
        category: 'MongoDB'
    },
    {
        question: 'Express is . . .',
        answers: [
            { text: 'a tool for handling HTTP requests', correct: true },
            { text: 'a tool for accessing a MongoDB database', correct: false },
            { text: 'a tool for generating HTML based on data', correct: false }
        ],
        category: 'Express'
    },
    {
        question: 'Which of these is NOT an HTTP verb?',
        answers: [
            { text: 'GET', correct: false },
            { text: 'POST', correct: false },
            { text: 'PULL', correct: true }
        ],
        category: 'Express'
    },
    {
        question: 'What is a router?',
        answers: [
            { text: 'A component that maps a URL to a handler function', correct: true },
            { text: 'Middleware that attaches helpful data to a request object', correct: false },
            { text: 'A component that parses out important data given in the request', correct: false }
        ],
        category: 'Express'
    },
    {
        question: 'You can access the query parameters of a GET request by using . . .',
        answers: [
            { text: 'req.body', correct: false },
            { text: 'req.params', correct: false },
            { text: 'req.query', correct: true }
        ],
        category: 'Express'
    },
    {
        question: 'Angular is a front-end framework, which means it is for programs . . .',
        answers: [
            { text: 'on a server', correct: false },
            { text: 'in a browser', correct: true },
            { text: 'both', correct: false }
        ],
        category: 'Angular'
    },
    {
        question: 'The fancy word for Angular template curly braces {{ }} is . . .',
        answers: [
            { text: 'transclusion', correct: false },
            { text: 'interpolation', correct: true },
            { text: 'emulation', correct: false }
        ],
        category: 'Angular'
    },
    {
        question: 'Modules in Angular can be built using . . .',
        answers: [
            { text: 'factories', correct: true },
            { text: 'templates', correct: false },
            { text: 'controllers', correct: false }
        ],
        category: 'Angular'
    },
    {
        question: 'In Angular, $scope is a . . .',
        answers: [
            { text: 'mysterious being', correct: false },
            { text: 'relic of transcendance', correct: false },
            { text: 'plain old Javascript object', correct: true }
        ],
        category: 'Angular'
    },
    {
        question: 'Node is a great tool for writing Javascript to build . . .',
        answers: [
            { text: 'servers', correct: false },
            { text: 'machine processes', correct: false },
            { text: 'both', correct: true }
        ],
        category: 'Node'
    },
    {
        question: '.then makes you think of . . .',
        answers: [
            { text: 'promises', correct: true },
            { text: 'callbacks', correct: false },
            { text: 'modules', correct: false }
        ],
        category: 'Node'
    },
    {
        question: 'What is the name of Node\'s default module system?',
        answers: [
            { text: 'AMD', correct: false },
            { text: 'CommonJS', correct: true },
            { text: 'SystemJS', correct: false }
        ],
        category: 'Node'
    },
    {
        question: 'What keyword is used to grab a module in Node?',
        answers: [
            { text: 'module', correct: false },
            { text: 'exports', correct: false },
            { text: 'require', correct: true }
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
