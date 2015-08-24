'use strict';
/**
 * @ngdoc function
 * @name starter.controllers:ActivityCtrl
 * @description
 * # ActivityCtrl
 * Main Controller of the starter app
 */


angular.module('starter.controllers')

  .controller('ActivityCtrl', function($scope
    , $log
    , $stateParams
    , Activity) {
    var id = $stateParams.id;
    $log.log('Activity Ctrl id = ' + id);



    $scope.item = Activity.list()[id];
  });
