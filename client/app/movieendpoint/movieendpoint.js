'use strict';

angular.module('yoTemplateApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/movieendpoint', {
        template: '<movieendpoint></movieendpoint>'
      });
  });
