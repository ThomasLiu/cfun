
'use strict';
/**
 * @ngdoc function
 * @name starter.controllers:MsgCtrl
 * @description
 * # MsgCtrl
 * Main Controller of the starter app
 */

angular.module('starter.controllers')


  .controller('MsgCtrl', function($scope
    , $log
    , Msg) {
    $log.log('Msg Ctrl');

    // before enter view event
    $scope.$on('$ionicView.beforeEnter', function() {
      // track view
      if (window.analytics) {
        window.analytics.trackView('messages view');
      }

      // load messages
    });

    Msg.sendRecruitMsg();

    Msg.sendBecomeCaptainMsg();
    Msg.sendReadyGoMsg();
    Msg.sendWriterAfterMsg();
    Msg.sendPhotographerAfterMsg();
    Msg.sendFailToApplyCaptainMsg();
    Msg.sendToCaptainForApplyFinishMsg();
    Msg.sendInvitationMsg();
    Msg.sendAttentionUserActivityMsg();


    $scope.messages = Msg.getMessages();


  });
