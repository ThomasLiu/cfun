
'use strict';
/**
 * @ngdoc function
 * @name starter.controllers:MsgListCtrl
 * @description
 * # MsgListCtrl
 * Main Controller of the starter app
 */

angular.module('starter.controllers')


  .controller('MsgListCtrl', function($scope
    , $stateParams
    , $log
    , User
    , Msg) {
    var type = $stateParams.type;
    $log.log('MsgList Ctrl type = ' + type);

    // before enter view event
    $scope.$on('$ionicView.beforeEnter', function() {
      // track view
      if (window.analytics) {
        window.analytics.trackView('messages view');
      }

      // load messages
    });

    $scope.currentUser = User.getCurrentUser();



    $scope.messagesList = Msg.getMessages()[type];
    if($scope.messagesList.noReadMsgs.length == 0){
      if(type == 'recruitMsg'){
        Msg.sendRecruitMsg();
      }else if(type == 'activityMsg'){
        Msg.sendBecomeCaptainMsg();
        Msg.sendWriterAfterMsg();
        Msg.sendPhotographerAfterMsg();
        Msg.sendReadyGoMsg();
        Msg.sendFailToApplyCaptainMsg();
        Msg.sendAttentionUserActivityMsg();
        Msg.sendToCaptainForApplyFinishMsg();
        Msg.sendInvitationMsg();
      }

    }

  });
