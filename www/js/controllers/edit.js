'use strict';
/**
 * @ngdoc function
 * @name starter.controllers:MyCtrl
 * @description
 * # MyCtrl
 * Main Controller of the starter app
 */


angular.module('starter.controllers')


  .controller('EditCtrl', function($scope
    , $log
    , User) {
    $log.log('Edit Ctrl');


    $scope.user = User.getById();

  });
