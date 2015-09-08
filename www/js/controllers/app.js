/**
 * Created by user on 7/9/15.
 */
'use strict';
/**
 * @ngdoc function
 * @name starter.controllers:ActivityCtrl
 * @description
 * # ActivityCtrl
 * Main Controller of the starter app
 */


angular.module('starter.controllers')

  .controller('AppCtrl', function($scope
    , $log
    , $location
    , User
    , Msg) {
    $log.log('App Ctrl ');

    var currentUser = User.getCurrentUser();
    $scope.user = currentUser;

    $scope.sign = function(){
      $scope.user.id = 0;

      //test 模拟流程
      Msg.sendRecruitMsg();

      $location.path('/tab/activitys');
    };

    $scope.login = function(){
      $scope.user.id = 0;

      //test 模拟流程
      Msg.sendInvitationMsg();
      Msg.sendAttentionUserActivityMsg();


      $location.path('/tab/activitys');
    }

    $scope.activityTypes = ['极限挑战','小众运动','人文艺术','优雅魅惑','美味世界','智力烧脑','城市创业','爱心公益'];

  });
