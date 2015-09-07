// var app = angular.module('FlashCards', []);
var app = angular.module('FlashCards', ['ui.router']);

app.config(function($stateProvider) {
    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'templates/home.html',
        controller: 'MainController'
    });

    $stateProvider.state('addCard', {
        url: '/addCard',
        templateUrl: 'templates/addCard.html',
        controller: 'NewCardController'
    });

    $stateProvider.state('manageCard', {
        url: 'manageCard/:id',
        templateUrl: 'templates/manageCard.html',
        controller: 'ManageCardController'
    });

    $stateProvider.state('manageCard.editCard', { // nested child state
        url: '/editCard',
        templateUrl: 'templates/editCard.html',
        controller: 'EditCardController'
    });

    $stateProvider.state('manageCard.deleteCard', { // nested child state
        url: '/deleteCard',
        templateUrl: 'templates/deleteCard.html',
        controller: 'DeleteCardController'
    });
});