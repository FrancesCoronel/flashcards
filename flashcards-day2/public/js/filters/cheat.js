app.filter('cheat', function() {
  return function (collection) {
    return collection.filter(function(elem) {
      return elem.correct;
    });
  };
});