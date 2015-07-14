app.controller('MainCtrl', function($scope, FlashCardFactory) {
    // make a query
    $scope.cardsReturn = false;
    FlashCardFactory.getFlashCards()
        .then(function(cards) {
            $scope.flashCards = cards;
            $scope.cardsReturn = true;
        })
        .catch(function(e) {
            console.log('e', e);
        });

    $scope.categories = [
        'MongoDB',
        'Express',
        'Angular',
        'Node'
    ];

    $scope.activeCat = null;

    $scope.filterByCategory = function(cat) {
        $scope.activeCat = cat;
        FlashCardFactory.getFlashCards(cat)
            .then(function(cards) {
                $scope.flashCards = cards;
                 $scope.cardsReturn = true;
            });
    };
});
