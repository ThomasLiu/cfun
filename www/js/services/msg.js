'use strict';

/**
 * @ngdoc function
 * @name starter.services:MsgService
 * @description
 * # MsgService
 * User Service of the starter app
 */

angular.module('starter.services')
  .factory('Msg', function($log, $q, User) {
    $log.log('Msg services');

    var messagesCount = 0;
    var messages = {
      recruitMsg: {
        noReadMsgs: []
        , readedMsgs: []
      }
      , activityMsg: {
        noReadMsgs: []
        , readedMsgs: []
      }
    };
    var recruitMsgs = [];
    return {
      currentMessageCount: function() {

        return messages.recruitMsg.noReadMsgs.length
          + messages.activityMsg.noReadMsgs.length;
      }
      , getMessages: function() {
        $log.debug('get messages');
        var currentUser = User.getCurrentUser();
        return messages;
      }
      , markAll: function() {
        $log.debug('mark all as read');
        var currentUser = User.getCurrentUser();
        //TODO
      }

      , sendRecruitMsg: function(userIds, activity) {
        messages.recruitMsg.noReadMsgs.push({
          id : 0
          , activity : {
            id : 0
            , name : '一场咖啡和奶泡的爱恋'
            , time : '9月4日周五 18:00-21:00'
            , area : '深圳南山区益田假日广场B1层埃克斯咖啡'
            , activityType : '极限运动'
            , img : '1.jpg'
            , maxApply : 10
            , value : 200
            , info : '队长要求：—负责线下活动，较强的人际关系和沟通力 /n—活动前一天，统计活动名单和人数 /n—活动当天，提前30分钟到场和活动主办方接洽整体活动流程，安全指引参加活动的咖豆抵达活动现场 /n—配合主办方给大家介绍活动流程 /n—活动中照顾好豆豆们~ /n—活动结束后，组织大家合影留念，叮嘱豆豆们安全回家~'
            , endTime : '8月30日'
          }
          , showMore : false
          , type : 'recruitMsg'
        });
      }
      , sendToCaptainForApplyFinishMsg: function(){
        messages.activityMsg.noReadMsgs.push({
          id : 0
          , activity : {
            id : 0
            , name : '一场咖啡和奶泡的爱恋'
            , time : '9月4日周五 18:00-21:00'
            , area : '深圳南山区益田假日广场B1层埃克斯咖啡'
            , activityType : '极限运动'
            , img : '1.jpg'
            , maxApply : 10
            , value : 200
            , info : '队长要求：—负责线下活动，较强的人际关系和沟通力 /n—活动前一天，统计活动名单和人数 /n—活动当天，提前30分钟到场和活动主办方接洽整体活动流程，安全指引参加活动的咖豆抵达活动现场 /n—配合主办方给大家介绍活动流程 /n—活动中照顾好豆豆们~ /n—活动结束后，组织大家合影留念，叮嘱豆豆们安全回家~'
            , applys : [
              {
                id: 0
                , name: 'Mike Harrington'
                , face:'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
                , mobile : 1300000000
                , isReceived: false
              }
              , {
                id: 1
                , name: '泰坦万'
                , face:'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
                , mobile : 1300000000
                , isReceived: false
              }
              , {
                id: 2
                , name: 'Max Lynx'
                , face:'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
                , mobile : 1300000000
                , isReceived: false
              }
              , {
                id: 3
                , name: 'Ben Sparrow'
                , face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
                , mobile : 1300000000
                , isReceived: true
              }
            ]
            , applyPhotoMaker : [{
              id: 0
              , name: 'Mike Harrington'
              , face:'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
              , mobile : 1300000000
            }
              , {
                id: 1
                , name: '泰坦万'
                , face:'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
                , mobile : 1300000000
              }
            ]
            , applyArticleMaker : [{
              id: 2
              , name: 'Max Lynx'
              , face:'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
              , mobile : 1300000000
            }
              , {
                id: 3
                , name: 'Ben Sparrow'
                , face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
                , mobile : 1300000000
              }
            ]
          }
          , showMore : false
          , type : 'toCaptainForApplyFinishMsg'

        });
      }
      , sendAttentionUserActivityMsg: function() {
        messages.activityMsg.noReadMsgs.push({
          id : 0
          , activity: {
            id : 0
            , name : '一场咖啡和奶泡的爱恋'
            , time : '9月4日周五 18:00-21:00'
            , area : '深圳南山区益田假日广场B1层埃克斯咖啡'
            , activityType : '极限运动'
            , img : '1.jpg'
            , maxApply : 10
            , value : 200
            , info : '队长要求：—负责线下活动，较强的人际关系和沟通力 /n—活动前一天，统计活动名单和人数 /n—活动当天，提前30分钟到场和活动主办方接洽整体活动流程，安全指引参加活动的咖豆抵达活动现场 /n—配合主办方给大家介绍活动流程 /n—活动中照顾好豆豆们~ /n—活动结束后，组织大家合影留念，叮嘱豆豆们安全回家~'
            , applyEndTime : '9月3日'
          }
          , attentionUser : {
            id: 2
            , name: 'Max Lynx'
            , face:'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
          }
          , type : 'attentionUserActivityMsg'
        });

      }
      , sendFailToApplyCaptainMsg: function(){
        messages.activityMsg.noReadMsgs.push({
          id : 0
          , activity: {
            id : 0
            , name : '一场咖啡和奶泡的爱恋'
            , time : '9月4日周五 18:00-21:00'
            , area : '深圳南山区益田假日广场B1层埃克斯咖啡'
            , activityType : '极限运动'
            , img : '1.jpg'
            , maxApply : 10
            , value : 200
            , info : '队长要求：—负责线下活动，较强的人际关系和沟通力 /n—活动前一天，统计活动名单和人数 /n—活动当天，提前30分钟到场和活动主办方接洽整体活动流程，安全指引参加活动的咖豆抵达活动现场 /n—配合主办方给大家介绍活动流程 /n—活动中照顾好豆豆们~ /n—活动结束后，组织大家合影留念，叮嘱豆豆们安全回家~'
            , applyEndTime : '9月3日'
          }
          , type : 'failToApplyCaptainMsg'
        });

      }
      , sendReadyGoMsg: function() {
        messages.activityMsg.noReadMsgs.push({
          id : 0
          , activity: {
            id : 0
            , name : '一场咖啡和奶泡的爱恋'
            , time : '9月4日周五 18:00-21:00'
            , area : '深圳南山区益田假日广场B1层埃克斯咖啡'
            , activityType : '极限运动'
            , img : '1.jpg'
            , maxApply : 10
            , value : 200
            , info : '队长要求：—负责线下活动，较强的人际关系和沟通力 /n—活动前一天，统计活动名单和人数 /n—活动当天，提前30分钟到场和活动主办方接洽整体活动流程，安全指引参加活动的咖豆抵达活动现场 /n—配合主办方给大家介绍活动流程 /n—活动中照顾好豆豆们~ /n—活动结束后，组织大家合影留念，叮嘱豆豆们安全回家~'
            , captain : {
              id: 3
              , name : 'Ben Sparrow'
              , face:'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
              , mobile : 1300000000
              , remark : '我们17:30可是签到，这次活动时间比较紧希望都不要迟到呢！有问题就电话我吧！'
            }
            , applys : [
              {id: 0,face:'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'}
              , {id: 3,face:'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'}
              , {id: 2,face:'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'}
            ]
            , photoFor : {
              id: 1
              , name: '泰坦万'
              , face:'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
            }
            , articleFor : {
              id: 2
              , name: 'Max Lynx'
              , face:'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
            }
          }
          , type : 'readyGoMsg'
        });

      }
      , sendBecomeCaptainMsg: function(){
        messages.activityMsg.noReadMsgs.push({
          id : 0
          , activity: {
            id : 0
            , name : '一场咖啡和奶泡的爱恋'
            , time : '9月4日周五 18:00-21:00'
            , area : '深圳南山区益田假日广场B1层埃克斯咖啡'
            , activityType : '极限运动'
            , img : '1.jpg'
            , maxApply : 10
            , value : 200
            , applyEndTime : '9月3日'
          }
          , type : 'becomeCaptainMsg'
        });
      }
      , sendWriterAfterMsg: function(){
        messages.activityMsg.noReadMsgs.push({
          id : 0
          , activity: {
            id : 0
            , name : '一场咖啡和奶泡的爱恋'
            , time : '9月4日周五 18:00-21:00'
            , activityType : '极限运动'
          }
          , taskEndTime : '9月3日'
          , type : 'writerAfterMsg'
        });
      }
      , sendPhotographerAfterMsg: function () {
        messages.activityMsg.noReadMsgs.push({
          id : 0
          , activity: {
            id : 0
            , name : '一场咖啡和奶泡的爱恋'
            , time : '9月4日周五 18:00-21:00'
            , activityType : '极限运动'
          }
          , taskEndTime : '9月3日'
          , type : 'photographerAfterMsg'
        });
      }
      , sendInvitationMsg: function(userIds, activity) {
        messages.activityMsg.noReadMsgs.push({
          id : 0
          , activity: {
            id : 0
            , name : '一场咖啡和奶泡的爱恋'
            , time : '9月4日周五 18:00-21:00'
            , area : '深圳南山区益田假日广场B1层埃克斯咖啡'
            , activityType : '极限运动'
            , img : '1.jpg'
            , maxApply : 10
            , value : 200
            , info : '队长要求：—负责线下活动，较强的人际关系和沟通力 /n—活动前一天，统计活动名单和人数 /n—活动当天，提前30分钟到场和活动主办方接洽整体活动流程，安全指引参加活动的咖豆抵达活动现场 /n—配合主办方给大家介绍活动流程 /n—活动中照顾好豆豆们~ /n—活动结束后，组织大家合影留念，叮嘱豆豆们安全回家~'
            , applyEndTime : '9月3日'
          }
          , invitator : {
            id: 2
            , name: 'Max Lynx'
            , face:'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
          }
          , type : 'invitationMsg'
        });
      }
    }
  });
