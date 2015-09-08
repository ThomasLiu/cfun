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
    , $ionicModal
    , Activity
    , Msg) {
    var id = $stateParams.id;
    $log.log('Activity Ctrl id = ' + id);

    $ionicNavBarDelegate.showBackButton(false);
    $scope.back = function(){
      $ionicHistory.goBack(-1);
    }

    $scope.item = Activity.list()[id];

    $scope.bug = {
      itemNum: 1
      , itemValue: $scope.item.package[0].value
    };

    $ionicModal.fromTemplateUrl('templates/activity/buy.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
      $scope.toPay = function(){
        $scope.modal.hide();

        Msg.sendReadyGoMsg();
      }
    });

    $scope.closeBuyModal = function() {
      $scope.modal.hide();
    };
    $scope.openBuyModal = function(){
      $scope.bug = {
        itemNum: 1
        , itemValue: $scope.item.package[0].value
      };

      $scope.modal.show();
    }


  });
