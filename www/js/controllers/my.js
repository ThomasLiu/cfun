'use strict';
/**
 * @ngdoc function
 * @name starter.controllers:MyCtrl
 * @description
 * # MyCtrl
 * Main Controller of the starter app
 */


angular.module('starter.controllers')


  .controller('MyCtrl', function($scope
    , $log
    , $stateParams
    , User) {
    var id = $stateParams.id || User.getCurrentUser().id;
    $log.log('My Ctrl id = ' + id);

    $scope.currentUserId = User.getCurrentUser().id;



    $scope.user = User.list()[id];

    if(id == User.getCurrentUser().id){
      $scope.title =  '我'
    }else{
      $scope.title = $scope.user.name;
    }


  });
