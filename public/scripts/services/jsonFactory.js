angular.module('app').factory('cardList', function($http) {
  return $http.get('scripts/cards.json');
});
