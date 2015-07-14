app.controller('FlashCardCtrl', function($scope, ScoreFactory) {
    $scope.answered = false;
    $scope.answeredCorrectly = null;

    $scope.answerQuestion = function(answer) {
        if ($scope.answered) {
            return;
        }
        $scope.answered = true;
        if (answer.correct) {
            ScoreFactory.correct++;
            $scope.feedback = "Correct!";
            $scope.answeredCorrectly = true;
        } else {
            ScoreFactory.incorrect++;
            $scope.feedback = "Nice try";
        }
    };
});
