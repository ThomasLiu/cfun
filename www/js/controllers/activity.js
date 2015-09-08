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
    , $ionicHistory
    , $ionicNavBarDelegate
    , Activity) {
    var id = $stateParams.id;
    $log.log('Activity Ctrl id = ' + id);

    $ionicNavBarDelegate.showBackButton(false);
    $scope.back = function(){
      $ionicHistory.goBack(-1);
    }

    $scope.item = Activity.list()[id];
  });
