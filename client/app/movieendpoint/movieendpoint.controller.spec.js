'use strict';

describe('Component: MovieendpointComponent', function () {

  // load the controller's module
  beforeEach(module('yoTemplateApp'));

  var MovieendpointComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    MovieendpointComponent = $componentController('movieendpoint', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
