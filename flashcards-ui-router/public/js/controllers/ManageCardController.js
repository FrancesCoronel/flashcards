app.controller("ManageCardController", function($scope, FlashCardsFactory, $stateParams) {
  $scope.card = FlashCardsFactory.cards[$stateParams.id];
  console.log($scope.card);
});