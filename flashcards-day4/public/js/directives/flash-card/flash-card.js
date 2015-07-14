app.directive('flashCard', function (ScoreFactory, FlashCardsFactory) {

    return {
        restrict: 'E',
        templateUrl: 'js/directives/flash-card/flash-card.html',
        scope: {
            card: '='
        },
        link: function (scope) {

            scope.answered = false;
            scope.answeredCorrectly = null;

            scope.answerQuestion = function (answer) {

                if (scope.answered) {
                    return;
                }

                scope.answered = true;
                scope.answeredCorrectly = answer.correct;

                if (answer.correct) {
                    ScoreFactory.correct++;
                } else {
                    ScoreFactory.incorrect++;
                }
            };

            scope.editing = false;

            scope.updateCard = function() {
                scope.editing = scope.editing ? false : true;
            };

            scope.submit = function() {
                FlashCardsFactory.editCard(scope.card).then(function(card) {
                    console.log(card);
                    scope.editing = false;
                });
            };
        }

    };

});