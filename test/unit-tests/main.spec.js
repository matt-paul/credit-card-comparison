describe('MainCtrl', function() {
  beforeEach(module('ctmApp'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('MainCtrl');
    }));


    it('initialises some stuff somewhere', function() {
      expect(ctrl.data).toEqual([]);
    })
});
