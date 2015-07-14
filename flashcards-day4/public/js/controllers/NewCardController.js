app.controller('NewCardController', function($scope, FlashCardsFactory) {

    function resetNewCard() {
        $scope.newCard = {
            question: null,
            category: null,
            answers: [{
                text: null,
                correct: false
            }, {
                text: null,
                correct: false
            }, {
                text: null,
                correct: false
            }]
        };
    }

    $scope.clearOthers = function(index) {
        $scope.newCard.answers.forEach(function(answer, i) {
            if (i !== index) answer.correct = false;
        });
    };

    $scope.submit = function(newCard) {
        FlashCardsFactory.submitNewCard(newCard)
            .then(function(card) {
                FlashCardsFactory.cards.push(card);
                if (FlashCardsFactory.categories.indexOf(card.category) === -1) {
                    FlashCardsFactory.categories.push(card.category);
                }

                resetNewCard();

                $scope.newCardForm.$submitted = false;
            });
    };

    resetNewCard();
});
