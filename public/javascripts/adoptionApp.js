/**
 * Created by codeforcoffee on 11/15/16.
 */
var AdoptionApp = angular.module('AdoptionApp', ['ngRoute']);

/**
 * This is where we can submit new dogs!
 */
AdoptionApp.controller('DogsListForAdoptionCtrl', function($scope, $http) {

  $scope.url = 'http://localhost:9292/api/dogs/';

  $scope.create = function(name, note, image) {
    $http({
      url: $scope.url,
      params: { name: name, note: note, image: image},
      method: 'POST'
    }).success(function(data){
      alert('Your puppy has been added. Please refresh to see!');
    });
  };
});

/**
 * This is my controller for fetching from /api/dogs/
 */
AdoptionApp.controller('DogsAdoptionListCtrl', function($scope, $http) {

  $scope.url = 'http://localhost:9292/api/dogs/';
  $scope.dogs = [];

  $scope.fetch = function() {
    $http.get($scope.url).success(function(data) {
      $scope.dogs = data;
    });
  };

  $scope.delete = function() {

  };

  // upon controller instantition
  // new Controller();
  // we fetch() our model data from an API
  $scope.fetch();
});