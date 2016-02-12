describe('MainCtrl', function() {

  var httpBackend;
  var ctrl;

  beforeEach(module('app'));

  describe('Main Controller', function() {

    beforeEach(inject(function($controller, $injector, $httpBackend) {
      ctrl = $controller('MainCtrl');
      httpBackend = $httpBackend;
      httpBackend.expectGET('cards.json').respond(mockCards);
    }));

    it('should pull the cards in from the factory', function() {
      httpBackend.flush();
      expect(ctrl.cardList).toEqual(mockCards);
    });

  });
});
