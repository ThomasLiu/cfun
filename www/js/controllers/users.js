'use strict';
/**
 * @ngdoc function
 * @name starter.controllers:UsersCtrl
 * @description
 * # UsersCtrl
 * Main Controller of the starter app
 */


angular.module('starter.controllers')


  .controller('UsersCtrl', function($scope
    , $log
    , $stateParams
    , $ionicHistory
    , $ionicNavBarDelegate
    , User) {
    var id = $stateParams.id;
    $log.log('Users Ctrl id = ' + id);

    $scope.users = User.list()[id].attentionUsers;

    $ionicNavBarDelegate.showBackButton(false);
    $scope.back = function(){
      $ionicHistory.goBack(-1);
    }
  });
