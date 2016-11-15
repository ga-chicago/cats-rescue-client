console.log('There and back again: a hobbit\'s tale');

var CatsApp = angular.module('CatsApp', ['ngRoute']);




CatsApp.controller('PlaygroundCtrl', function($scope, $http) {
  $scope.url = 'http://www.omdbapi.com/?t=empire+strikes&y=&plot=short&r=json';
  $scope.movie = undefined;
  $scope.fetch = function() {
    $http.get($scope.url).success(function(data) {
      console.log(data);
      $scope.movie = data;
    });
  }

  $scope.changeMovie = function() {
    $scope.url = 'http://www.omdbapi.com/?t=frozen&y=&plot=short&r=json';
    $scope.fetch();
  }

  $scope.fetch();
});

CatsApp.controller('CatsCtrl', function($scope, $http) {
  $scope.cats = [];
  $scope.urlHost = 'http://localhost:9292';
  $scope.message = '';

  $scope.addCat = function(name, note) {
    // var cat = {name: name, note: note};
    // $scope.cats.push(cat);
    // console.log($scope.cats);
    $http({
      url: $scope.urlHost + '/api/cats',
      method: 'post',
      params: { name: name, note: note }
    }).success(function(data) {
      console.log(data);
      $scope.populateList();
    });
  };

  $scope.populateList = function() {
    $http.get($scope.urlHost + '/api/cats').success(function(data) {
      console.log(data);
      $scope.cats = data;
    });
  };

  $scope.adoptCat = function(event) {
    console.log(event.cat);
    $http.delete($scope.urlHost + '/api/cats/' + event.cat.id).success(function(data) {
      console.log('Your cat is adopted :)');
      $scope.message = data.message;
      $scope.populateList();
    });
  }

  // run code now that everything is defined :)
  $scope.populateList();

});

CatsApp.directive('cat-item-view', function() {
  return {
    templateUrl: '/ng-views/cat.html'
  };
});