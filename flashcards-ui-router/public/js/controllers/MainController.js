app.controller('MainController', function ($scope, FlashCardsFactory) {

    $scope.flashCards = FlashCardsFactory.cards;

    $scope.cardsLoading = true;
    $scope.editedCard = FlashCardsFactory.editedCard;
    $scope.deletedCard = FlashCardsFactory.deletedCard;

    $scope.categories = FlashCardsFactory.categories;

    $scope.chosenCategory = 'All';

    $scope.getAllCards = function () {
        $scope.chosenCategory = 'All';
        $scope.cardsLoading = true;
        FlashCardsFactory.getFlashCards().then(function (cards) {
            $scope.cardsLoading = false;
            $scope.flashCards = cards;
            FlashCardsFactory.cards = cards;
            $scope.categories = cards.reduce(function(returnArray, card) {
                if (returnArray.indexOf(card.category) === -1) {
                    returnArray.push(card.category);
                }
                return returnArray;
            }, []);
        });
    };

    $scope.getCategoryCards = function (category) {
        $scope.chosenCategory = category;
        $scope.cardsLoading = true;
        FlashCardsFactory.getFlashCards(category).then(function (cards) {
             FlashCardsFactory.cards = cards;
            $scope.cardsLoading = false;
            $scope.flashCards = cards;
        });
    };

    $scope.getAllCards();

    $scope.$on('updateCards', function(event, data) {
        console.log(data);
        $scope.flashCards.push(data.card);
        if ($scope.categories.indexOf(data.card.category) === -1) {
            $scope.categories.push(data.card.category);
        }
    });

});