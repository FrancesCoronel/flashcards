app.controller('MainController', function($scope, FlashCardsFactory, ScoreFactory) {
    $scope.answerQuestion = function(answer, flashCard) {
        if (!flashCard.answered) {
            flashCard.answered = true;
            flashCard.answeredCorrectly = answer.correct;
            if (flashCard.answeredCorrectly) {
                ScoreFactory.correct++;
            } else {
                ScoreFactory.incorrect++;
            }
        }
    };
    $scope.categories = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
    ];
    $scope.getCategoryCards = function(category) {
        $scope.currentCategory = category;
        FlashCardsFactory.getFlashCards(category).then(function(data) {
            $scope.flashCards = data;
        });
    };
    $scope.resetCategories = function() {
        FlashCardsFactory.getFlashCards().then(function(data) {
            $scope.flashCards = data;
        });
    };
});
