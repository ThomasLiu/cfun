'use strict';
/**
 * @ngdoc function
 * @name starter.controllers:ActivityCtrl
 * @description
 * # ActivityCtrl
 * Main Controller of the starter app
 */


angular.module('starter.controllers')

  .controller('ActivitysCtrl', function($scope
    , $log
    , Activity) {
    $log.log('Activitys Ctrl');

    $scope.activityLists = Activity.list();
  });
