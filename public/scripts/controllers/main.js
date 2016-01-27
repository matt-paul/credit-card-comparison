(function () {
  'use strict';

  angular
    .module('app',[])
    .controller('MainCtrl', [ 'cardList', function (cardList) {

      var self = this;

      self.getCards = (function() {
        cardList.then(function(response) {
          self.cardList = response.data;
        });
      })();


      }]);
}());
