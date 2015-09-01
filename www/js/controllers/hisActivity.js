'use strict';
/**
 * @ngdoc function
 * @name starter.controllers:HisActivityCtrl
 * @description
 * # HisActivityCtrl
 * Main Controller of the starter app
 */


angular.module('starter.controllers')


  .controller('HisActivityCtrl', function($scope
    , $log
    , $stateParams
    , HisActivity) {
    var id = $stateParams.id;
    $log.log('HisActivity Ctrl id = ' + id);

    $scope.hisActivity = HisActivity.list()[id];
  });
