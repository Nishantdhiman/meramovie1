'use strict';

(function(){

class MovieendpointComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('yoTemplateApp')
  .component('movieendpoint', {
    templateUrl: 'app/movieendpoint/movieendpoint.html',
    controller: MovieendpointComponent,
    controllerAs: 'movieendpointCtrl'
  });

})();
