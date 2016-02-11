describe('credit card comparison list', function() {

  beforeEach(function() {
    browser.get('http://localhost:8080');
  });

  it('has a title', function() {
    expect(browser.getTitle()).toEqual('Credit Cards - Compare The Market');
    });

  it('should contain 4 cards', function() {
    var cards = element.all(by.repeater('card in ctrl.cardList'));
    expect(cards.count()).toEqual(4);
  });
});
