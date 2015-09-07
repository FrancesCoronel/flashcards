app.controller("EditCardController", function($scope, FlashCardsFactory, $state) {
    $scope.editCard = function(card) {
        FlashCardsFactory.editCard(card).then(function(data) {
            FlashCardsFactory.editedCard = true;
            $state.go('home');
        });
    };
});
