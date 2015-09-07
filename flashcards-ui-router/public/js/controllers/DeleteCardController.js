app.controller("DeleteCardController", function($scope, FlashCardsFactory, $state) {
    $scope.deleteCard = function(card) {
        FlashCardsFactory.removeCard($scope.card).then(function(data) {
            FlashCardsFactory.deletedCard = true;
            $state.go('home');
        });
    };
    if (confirm("Are you sure you want to delete this card?")) {
        console.log($scope.card);
        $scope.deleteCard($scope.card);
    } else {
        return;
    }
});
