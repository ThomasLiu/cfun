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
    , $ionicModal
    , $location
    , Activity
    , User) {
    $log.log('Activitys Ctrl');


    var currentUser = User.getCurrentUser();
    $log.log('Activitys Ctrl currentUser.id = ' + currentUser.id + ' | currentUser.id !== undefined ' + (currentUser.id !== undefined));

    if(currentUser.id === undefined){
      $location.path('/login');
    }

    $scope.activityLists = Activity.list();
  });
