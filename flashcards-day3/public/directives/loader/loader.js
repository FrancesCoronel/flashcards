app.directive('loader', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/loader/loader.html',
    };
});

app.directive('flashCard', function() {
    return {
        restrict: 'E',
        link: function($scope, ScoreFactory) {
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
        },
        templateUrl: 'directives/loader/flashCard.html',
        scope: {
          card: '='
        }
    };
});

app.directive('elementHover', function() {
    return {
      restrict: 'A',
      link: function($scope, element) {
        element.on("mouseenter", function() {
          console.log("anything");
          element.toggleClass("hoverClass");
        });
      }
    };
});