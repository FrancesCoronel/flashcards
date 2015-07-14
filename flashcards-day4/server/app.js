var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
module.exports = app;

var publicPath = path.join(__dirname, '../public');
var indexHtmlPath = path.join(__dirname, '../index.html');

var FlashCardModel = require('./models/flash-card-model');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(publicPath));

app.get('/', function (req, res) {
    res.sendFile(indexHtmlPath);
});


app.get('/cards', function (req, res) {

    var modelParams = req.query.category ? { category: req.query.category } : {};

    FlashCardModel.find(modelParams, function (err, cards) {
        setTimeout(function () {
            res.send(cards);
        }, Math.random() * 1000);
    });

});

app.post('/cards', function(req, res, next) {
	FlashCardModel.create(req.body, function(err, card) {
		if (err) return console.log(err);
		res.send(card);
	});
});

app.put('/cards/:cardId', function(req, res, next) {
    var id = req.params.cardId;

    FlashCardModel.findByIdAndUpdate(id, req.body, function(err, card) {
        if (err) return console.log(err);

        res.send(card);
    });
});