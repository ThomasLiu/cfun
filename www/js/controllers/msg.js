
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

    //Msg.sendRecruitMsg();
    //
    //Msg.sendBecomeCaptainMsg();
    //Msg.sendReadyGoMsg();
    //Msg.sendWriterAfterMsg();
    //Msg.sendPhotographerAfterMsg();
    //Msg.sendFailToApplyCaptainMsg();
    //Msg.sendToCaptainForApplyFinishMsg();
    //Msg.sendInvitationMsg();
    //Msg.sendAttentionUserActivityMsg();
    //
    //Msg.sendScoreArticleMsg();
    //Msg.sendScorePhotoMsg();
    //Msg.sendActivityAfterMsg();
    //
    //Msg.sendConfirmToCaptainMsg();
    //Msg.sendCommentsAfterToCaptainMsg();
    //Msg.sendHisActivityMsg();
    //Msg.sendScoreFinishMsg();
    //Msg.sendAddImpressionMsg();
    //Msg.sendFocusOnMsg();

    $scope.messages = Msg.getMessages();


  });
