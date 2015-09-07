app.factory('FlashCardsFactory', function($http, $rootScope) {

    return {

        getFlashCards: function(category) {

            var queryParams = {};

            if (category) {
                queryParams.category = category;
            }

            return $http.get('/cards', {
                params: queryParams
            }).then(function(response) {
                return response.data;
            });

        },

        submitNewCard: function(newCard) {
            return $http.post('/cards', newCard)
                .then(function(response) {
                    $rootScope.$broadcast('updateCards', {
                        card: response.data
                    });
                    return response.data;
                });
        },

        editCard: function(card) {
            return $http.put('/cards/' + card._id, card)
                .then(function(response) {
                    $rootScope.$broadcast('updateCards', {
                        card: response.data
                    });
                    return response.data;
                });
        },

        removeCard: function(card) {
            return $http.delete('/cards/' + card._id, card)
                .then(function(data) {})
                .then(null, function(err){
                    console.log(err);
                });
        },

        categories: [],

        cards: [],

        editedCard: false,
        deletedCard: false

    };

});
