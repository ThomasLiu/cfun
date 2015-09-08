
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
    , User
    , Msg) {
    var type = $stateParams.type;
    $log.log('MsgList Ctrl type = ' + type);



    $scope.currentUser = User.getCurrentUser();



    $scope.messagesList = Msg.getMessages()[type];

    $scope.seeActivity = function(index, activityId){
      $log.log('MsgList Ctrl seeActivity index = ' + index + ' | activityId = ' + activityId);
      readMsg(index,$scope.messagesList);

      $location.path('/activity/' + activityId);
    }

    $scope.cantGoToThis = function(index){
      $log.log('MsgList Ctrl cantGoToThis index = ' + index);

      readMsg(index,$scope.messagesList);
    }


    var readMsg = function(index, msgList){

      var msg = msgList.noReadMsgs[index];
      if(msg){
        msg.isNoReaded = true;

        msgList.readedMsgs.push(msg);
        msgList.noReadMsgs.baoremove(index);

        Msg.getMessagesCount();
      }
      
    }

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
}
