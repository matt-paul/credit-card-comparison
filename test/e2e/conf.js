exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['cards-spec.js'],
  multiCapabilities: [{
    browserName: 'firefox'
  }, {
    browserName: 'chrome'
  }]
};
