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
    , Activity) {
    $log.log('Activity Ctrl');

    $scope.activityLists = Activity.list();
  });
