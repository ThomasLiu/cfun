'use strict';
/**
 * @ngdoc function
 * @name starter.controllers:HisActivitysCtrl
 * @description
 * # HisActivitysCtrl
 * Main Controller of the starter app
 */


angular.module('starter.controllers')


  .controller('HisActivitysCtrl', function($scope
    , $log
    , $stateParams
    , $ionicHistory
    , $ionicNavBarDelegate
    , User) {
    var id = $stateParams.id;
    $log.log('HisActivitys Ctrl id = ' + id);

    $scope.hisActivityLists = User.list()[id].activitys;

    $ionicNavBarDelegate.showBackButton(false);
    $scope.back = function(){
      $ionicHistory.goBack(-1);
    }
  });
