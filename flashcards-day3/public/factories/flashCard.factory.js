app.factory('FlashCardFactory', function($http) {
    return {
        getFlashCards: function(cat) {
            var config = {};
            if (cat) config.params = {
                category: cat
            };
            return $http.get('/cards', config)
                .then(function(res) {
                    return res.data;
                });
        }
    };
});
