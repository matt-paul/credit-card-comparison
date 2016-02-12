angular.module('app').factory('cardList', function($http) {
  return $http.get('cards.json');
});
