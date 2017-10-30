'use strict';

(function() {

  class searchMovieComponent {
    constructor($http, $scope, socket) {
      this.$http = $http;
      this.socket = socket;
      this.MovieData;
    }

    FindMovie() {
      this.$http.get('https://api.themoviedb.org/3/search/movie?api_key=c1bea299ed548d0451fd2f3fbba0794d&query=' + this.MovieName + '&year=' + this.Year).then(response => {
        console.log(response.data.results[0].id);
        var MovieID = response.data.results[0].id;
        this.$http.get('https://api.themoviedb.org/3/movie/' + MovieID + '?api_key=c1bea299ed548d0451fd2f3fbba0794d').then(movieres => {
          this.MovieData = movieres.data;
          console.log(this.MovieData);
        });
      });
    }


  }

  angular.module('yoTemplateApp')
    .component('searchMovie', {
      templateUrl: 'app/SearchMovie/SearchMovie.html',
      controller: searchMovieComponent,
      controllerAs: 'SearchMovieCtrl'
    });

})();
