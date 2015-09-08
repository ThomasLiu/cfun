'use strict';

/**
 * @ngdoc function
 * @name starter.services:MsgService
 * @description
 * # MsgService
 * User Service of the starter app
 */

angular.module('starter.services')
  .factory('Msg', function($log, $q, $rootScope, User) {
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
      , toCommentOn: {
        noReadMsgs: []
        , readedMsgs: []
      }
      , sys: {
        noReadMsgs: []
        , readedMsgs: []
      }
    };

    var getMessagesCount = function(){
      messagesCount = messages.recruitMsg.noReadMsgs.length
        + messages.activityMsg.noReadMsgs.length
        + messages.toCommentOn.noReadMsgs.length
        + messages.sys.noReadMsgs.length;
      $rootScope.messagesCount = messagesCount;
    }

    return {
      getMessagesCount: getMessagesCount
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
        getMessagesCount();
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
        getMessagesCount();
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
        getMessagesCount();
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
        getMessagesCount();
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
        getMessagesCount();
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
        getMessagesCount();
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
        getMessagesCount();
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
        getMessagesCount();
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
        getMessagesCount();
      }
      , sendScoreArticleMsg: function(){
        messages.toCommentOn.noReadMsgs.push({
          id : 0
          , activity: {
            id : 0
            , name : '一场咖啡和奶泡的爱恋'
            , time : '9月4日周五 18:00-21:00'
            , area : '深圳南山区益田假日广场B1层埃克斯咖啡'
            , activityType : '极限运动'
            , img : '1.jpg'
            , articleFor : {
              id: 2
              , name: 'Max Lynx'
              , face:'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
            }
          }
          , article : '2015就这样悄悄地来了，不知不觉就迎来了生命的第25个年头，想想这25年来自己做过哪些令自己骄傲难忘的事情，好像几个手指头就能数完。我们总习惯把儿时的梦想慢慢在现实的打磨下遗忘。就像很多人总觉以为自己还有很长的生命，可以继续虚耗在自己不喜欢的事情上面，想把人生中终极的梦想推迟到退休以后才一一去完成，但其实浪费的是自己最宝贵的青春年华与巅峰的体力。所以在2015新年的第一天，我就选择了去尝试滑翔伞来迎接我的二十五岁。第一次听闻滑翔伞是在去往西藏的火车上，我们在火车上遇到了一帮来自福建的大学生跟我们一样是打算去西藏毕业旅行的，但是他们的行程里多了一项就是去尼泊尔飞滑翔伞。当时听到这个词的时候，我非常心动，只可惜那时候没有带护照所以就没有能去成。回来后的日子，跟小伙伴在回忆旅程的时候还问到他们这段难忘的经历的时候，还记得他说当从山顶飞下来漂浮在湖面上的时候感觉自己是自由的。可能正是这种飞翔的自由一直吸引着我。终于在时隔两年后的惠州我也有机会亲自体验这种飞翔的滋味。可能太容易得到的东西，人都会没有那么珍惜。所以我第一次尝试滑翔伞也没有那么顺利。元旦第一天，去到飞翔伞的场地，风向不太好，从上午等到下午，只有四个人成功的尝试了动力的滑翔伞，还没有轮到我的时候，教练就跟我们说今天天上的风不太稳定，不安全就不能飞了。我也只能失望地回深圳了，但心里却很不甘心。还是希望能在2015年完成梦想清单上的这一项。于是第二天，一大早我又跟着来到了滑翔伞的基地。可能有时候，很多东西都是上天安排好的。这天上午到达基地，教练说今天的风很好，可以上午就飞。于是我就和朋友按捺住内心的激动一同和教练爬上起飞的山坡。在爬山时候，因为这里没有人工的登山的梯道，所以我的每一步不是踏在石头上，就是踏在树枝上，没有一步的感觉是一样的，我的身体也从“惯性”调到了“弹性”。正因为没走的一部地面都是不同的，旁边的支持物也不同，所以我必须全神贯注，全心全意一步步专心走路，每一步都与大地连接，为的就是等待那心中的一飞。▏在漫长的等待中，我终于等到了那一阵风。当教练说风可以了，可以起飞的时候。我内心无比激动，但又开始忐忑起来。教练在起飞前在培训我该如何奔跑如何在空中保护自己，我的耳朵似乎开启了左耳进右耳出的模式，只有两个字留在了我的心里，那就是起飞。就这样我被不知不觉的换上了飞翔的装备，带上了安全帽，教练开始把他和我的安全带锁在了一起，突然就说三二一跑。这时候还没有缓过神来的我，撒腿就开始在原地跳了起来，不知道哪来的力量突然把我悬浮在空中，我刚刚练了许久的起跑动作还没有运用上就把我给飞了起来。不到两秒钟之后，我就受到地心引力的影响狠狠的摔倒在前方的小树丛中。教练把我扶起来，跟我说起跑的速度不够快要再试一次。结果在连续失败三次后，第三次我终于和教练一起逃离了地心引力，飞上了蔚蓝的天空.感谢上天没有让我那么容易体验飞翔的自由，而是在经历了等待，奔跑，摔跤到最后才体会到这种一飞冲天的感觉。这不就像人生吗？总会经历失败，磨难，挫折才会得到成长。当我越离开地面，我看到的风景就越多，当我飞翔到和山顶一样高的高度的时候，我才发现原来我们所处的山坡是一个鹰嘴的形状，在鹰嘴的旁边是宝蓝宝蓝闪闪发光的大海，海面上有渔船游过，激起一道道雪白的浪花，好像谱写着一首生命之歌——我突然顿悟到：在广大的天空中没有国界，鸟儿想去哪儿就去哪儿，不必办签证或者买飞机票，所以不需要拥有自己的房子车子，因为整个天空就是它的，只要它想飞到哪里，哪里就是它的家；但人类很可怜，想去哪里都要被审核，不能自由进出每一块土地，想要自由就得花时间，花钱去买机票，办签证，人不如鸟自由。这时候，只能把自己当成一片刻的鸟儿，在空中自由的飞翔，享受着被风拍打着翅膀的美好，如果我有一个懂飞滑翔伞的男友，我们能一起飞遍全世界所有的山脉，那该有多好？在天空的时光总是那么短暂，当双脚再一次踏到土地的时候，我感觉刚刚的那帮个小时比过去的一个月还长，因为在天上的每一分钟都像是浓缩了的Espresso，回想起来真是恍如隔世一般，美好得太不真实。经历过这一次的大胆试验，我更相信自己拥有强大的梦想执行力。所以在2015年的我宛如脱胎换骨般，更加勇敢的去冒险——有了翅膀的我，视野已经从毛毛虫的2D蜕变成蝴蝶的3D的了。有人说过：“如果梦想不去行动，那么永远是空想。”现在的我有了隐形的翅膀，让我有更强大的信心飞翔到远方，你的翅膀找到了吗？'
          , taskEndTime : '9月3日'
          , type : 'scoreArticleMsg'
        });
        getMessagesCount();
      }
      , sendScorePhotoMsg: function(){
        messages.toCommentOn.noReadMsgs.push({
          id : 0
          , activity: {
            id : 0
            , name : '一场咖啡和奶泡的爱恋'
            , time : '9月4日周五 18:00-21:00'
            , area : '深圳南山区益田假日广场B1层埃克斯咖啡'
            , activityType : '极限运动'
            , img : '1.jpg'
            , photoFor : {
              id: 1
              , name: '泰坦万'
              , face:'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
            }
          }
          , imgs : [{url:'0.jpeg'},{url:'1.jpeg'},{url:'2.jpeg'},{url:'3.jpeg'},{url:'4.jpeg'}]
          , taskEndTime : '9月3日'
          , type : 'scorePhotoMsg'
        });
        getMessagesCount();
      }
      , sendActivityAfterMsg: function(){
        messages.toCommentOn.noReadMsgs.push({
          id : 0
          , activity: {
            id : 0
            , name : '一场咖啡和奶泡的爱恋'
            , time : '9月4日周五 18:00-21:00'
            , area : '深圳南山区益田假日广场B1层埃克斯咖啡'
            , activityType : '极限运动'
            , img : '1.jpg'
            , captain : {
              id: 3
              , name : 'Ben Sparrow'
              , face:'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
            }
            , applys : [
              {
                id: 0
                , name: 'Mike Harrington'
                , face:'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
              }
              , {
                id: 1
                , name: '泰坦万'
                , face:'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
              }
              , {
                id: 2
                , name: 'Max Lynx'
                , face:'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
              }
              , {
                id: 3
                , name: 'Ben Sparrow'
                , face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
              }
            ]
          }
          , taskEndTime : '9月3日'
          , type : 'activityAfterMsg'
        });
        getMessagesCount();
      }
      , sendAddImpressionMsg: function(){
        messages.sys.noReadMsgs.push({
          id : 0
          , fromUser : {
            id: 2
            , name: 'Max Lynx'
          }
          , content : '对你添加了‘高富帅’的印象'
          , type : 'userMsg'
        });
        getMessagesCount();
      }
      , sendFocusOnMsg: function(){
        messages.sys.noReadMsgs.push({
          id : 0
          , fromUser : {
            id: 2
            , name: 'Max Lynx'
          }
          , content : '关注了你'
          , type : 'userMsg'
        });
        getMessagesCount();
      }
      , sendConfirmToCaptainMsg: function(){
        messages.sys.noReadMsgs.push({
          id : 0
          , activity: {
            id : 0
            , name : '一场咖啡和奶泡的爱恋'
            , time : '9月4日周五 18:00-21:00'
          }
          , fromUser : {
            id: 2
            , name: 'Max Lynx'
          }
          , type : 'confirmToCaptainMsg'
        });
        getMessagesCount();
      }
      , sendScoreFinishMsg: function(){
        messages.sys.noReadMsgs.push({
          id : 0
          , activity: {
            id : 0
            , name : '一场咖啡和奶泡的爱恋'
            , time : '9月4日周五 18:00-21:00'
          }
          , avgScore : 87
          , kaCurrency : 87
          , type : 'scoreFinishMsg'
        });
        getMessagesCount();
      }
      , sendHisActivityMsg: function(){
        messages.sys.noReadMsgs.push({
          id : 0
          , activity: {
            id : 0
            , name : '一场咖啡和奶泡的爱恋'
            , time : '9月4日周五 18:00-21:00'
          }
          , type : 'hisActivityMsg'
        });
        getMessagesCount();
      }
      , sendCommentsAfterToCaptainMsg: function(){
        messages.sys.noReadMsgs.push({
          id : 0
          , activity: {
            id : 0
            , name : '一场咖啡和奶泡的爱恋'
            , time : '9月4日周五 18:00-21:00'
            , comments : [
              {
                name: 'Mike Harrington'
                , content: '好玩到我都五想翻屋企'
                , face:'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'}
              , {
                name: '泰坦万'
                , content: '这活动真的太妈好玩'
                , face:'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'}
              , {
                name: 'Max Lynx'
                , content: 'THIS IS VERY FUNNY!!'
                , face:'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'}
              , {
                name: 'Ben Sparrow'
                , content: "I'm so happy"
                , face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'}
            ]
          }
          , avgScore : 87
          , kaCurrency : 87
          , type : 'commentsAfterToCaptainMsg'
        });
        getMessagesCount();
      }
    }
  });
