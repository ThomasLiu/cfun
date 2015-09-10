
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
    , $location
    , $ionicNavBarDelegate
    , User
    , Msg) {
    var type = $stateParams.type;
    $log.log('MsgList Ctrl type = ' + type);

    $ionicNavBarDelegate.showBackButton(true);

    $scope.currentUser = User.getCurrentUser();



    $scope.messagesList = Msg.getMessages()[type];


    $scope.noticeReady = function(index){
      $log.log('MsgList Ctrl noticeReady index = ' + index);
      readMsg(index,$scope.messagesList);

      Msg.sendCommentsAfterToCaptainMsg();

    };

    $scope.invitation = function(index){
      $log.log('MsgList Ctrl invitation index = ' + index);
      readMsg(index,$scope.messagesList);

      Msg.sendToCaptainForApplyFinishMsg();
      $location.path('/users/' + $scope.currentUser.id);
    };

    $scope.seeActivity = function(index, activityId){
      $log.log('MsgList Ctrl seeActivity index = ' + index + ' | activityId = ' + activityId);
      readMsg(index,$scope.messagesList);

      $location.path('/activity/' + activityId);
    };

    $scope.cantGoToThis = function(index){
      $log.log('MsgList Ctrl cantGoToThis index = ' + index);

      readMsg(index,$scope.messagesList);
    };

    $scope.applyBeCaptain = function(index){
      $log.log('MsgList Ctrl applyBeCaptain index = ' + index);

      readMsg(index,$scope.messagesList);

      Msg.sendBecomeCaptainMsg();
      Msg.sendFailToApplyCaptainMsg();
    };

    $scope.noticeCaptain = function(index){
      $log.log('MsgList Ctrl noticeCaptain index = ' + index);
      readMsg(index,$scope.messagesList);

      Msg.sendActivityAfterMsg();
      Msg.sendPhotographerAfterMsg();
      Msg.sendActivityAfterMsg();
    };

    $scope.saveComment = function(index){
      $log.log('MsgList Ctrl saveComment index = ' + index);

      $scope.messagesList.noReadMsgs.baoremove(index);
      Msg.sendAddImpressionMsg();
      Msg.sendScoreArticleMsg();
      Msg.sendScorePhotoMsg();
    };
    $scope.saveArticleComment = function(index){
      $log.log('MsgList Ctrl saveArticleComment index = ' + index);

      $scope.messagesList.noReadMsgs.baoremove(index);
    };
    $scope.savePhotoComment = function(index) {
      $log.log('MsgList Ctrl savePhotoComment index = ' + index);

      $scope.messagesList.noReadMsgs.baoremove(index);
      Msg.sendHisActivityMsg();
    };


    var readMsg = function(index, msgList){

      var msg = msgList.noReadMsgs[index];
      if(msg){
        msg.isNoReaded = true;

        msgList.readedMsgs.push(msg);
        msgList.noReadMsgs.baoremove(index);

        Msg.getMessagesCount();
      }


    };

    //if($scope.messagesList.noReadMsgs.length == 0){
    //  if(type == 'recruitMsg'){
    //    Msg.sendRecruitMsg();
    //  }else if(type == 'activityMsg'){
    //    Msg.sendBecomeCaptainMsg();
    //    Msg.sendWriterAfterMsg();
    //    Msg.sendPhotographerAfterMsg();
    //    Msg.sendReadyGoMsg();
    //    Msg.sendFailToApplyCaptainMsg();
    //    Msg.sendAttentionUserActivityMsg();
    //    Msg.sendToCaptainForApplyFinishMsg();
    //    Msg.sendInvitationMsg();
    //  }else if(type == 'sys'){
    //
    //    Msg.sendConfirmToCaptainMsg();
    //    Msg.sendCommentsAfterToCaptainMsg();
    //    Msg.sendHisActivityMsg();
    //    Msg.sendScoreFinishMsg();
    //    Msg.sendAddImpressionMsg();
    //    Msg.sendFocusOnMsg();
    //
    //  }else if(type == 'toCommentOn'){
    //    Msg.sendScoreArticleMsg();
    //    Msg.sendScorePhotoMsg();
    //    Msg.sendActivityAfterMsg();
    //  }
    //
    //}

  });

Array.prototype.baoremove = function(dx)
{
  if(isNaN(dx) || dx>this.length){return false;}
  this.splice(dx,1);
};
