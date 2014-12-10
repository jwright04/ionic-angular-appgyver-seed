angular.module('starter.controllers')

// A simple controller that shows a tapped item's data to
.controller('PetDetailCtrl', function($scope, $stateParams, PetService) {
  // "Pets" is a service returning mock data (services.js) testing
  $scope.pet = PetService.get($stateParams.petId);
});