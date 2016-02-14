(function () {
  'use strict';

  angular
    .module('app',[])
    .controller('MainCtrl', [ 'cardList', function (cardList) {

      var self = this;

      var top;

      self.getCards = (function() {

        cardList.then(function(response) {
          self.cardList = response.data;
        });
      })();

      self.toggleObject ={item: -1};

      self.viewDetails = function(card) {
        self.currentCard = card;
      }

      //where will the filter go ?
      //
      self.bestRate = function () {
        for (var i = 0; i < cardList.length; i++) {
          top = Math.max(cardList[i]);
        }
        return top;
      }

      }]);
}());
