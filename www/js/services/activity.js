'use strict';

/**
 * @ngdoc function
 * @name starter.services:ActivityService
 * @description
 * # ActivityService
 * User Service of the starter app
 */

angular.module('starter.services')
  .factory('Activity', function($log, $q) {
    $log.log('Activity services');
    return {
      list: function(){
        return [{
          id : 0
          , name : '骑马活动'
          , time : '下周四 9:00'
          , area : '深圳 福田'
          , activityType : '极限运动'
          , value : '50'
          , img : '1.jpg'
          , maxApply : 10
          , captain : {
            name : '黄大锤'
            , face:'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
            , stats : [{item:'1'},{item:'1'},{item:'1'},{item:'1'},{item:'1'}]
            , manifesto : 'Come on，我们一起来感受一下江南Style'
          }
          , applys : [
            {face:'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'}
            , {face:'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'}
            , {face:'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'}
          ]
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
          ,{
            id : 1
            , name : '极限攀崖'
            , time : '明天 13:00'
            , area : '深圳 龙岗'
            , activityType : '极限运动'
            , value : '0'
            , img : '2.jpg'
            , maxApply : 5
            , captain : {
              name : 'Ben Sparrow'
              , face:'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
              , stats : [{item:'1'},{item:'1'}]
              , manifesto : '挑战自我，登上高峰以后一齐欣赏那令人振奋的景色吧！'
            }
            , applys : [
              {face:'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'}
              , {face:'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'}
              , {face:'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'}
            ]
            , comments : [
              {
                name: 'Max Lynx'
                , content: 'THIS IS VERY FUNNY!!'
                , face:'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'}

              , {
                name: 'Mike Harrington'
                , content: '好玩到我都五想翻屋企，下一次一定要再报这个活动，小队长Ben Sparrow超级风趣，整个旅途都非常愉快！'
                , face:'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'}
              , {
                name: '泰坦万'
                , content: '这活动真的太妈好玩'
                , face:'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'}
              , {
                name: 'Ben Sparrow'
                , content: "I'm so happy"
                , face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'}
            ]
          }
          ,{
            id : 2
            , name : '速度与激情8 之 卡丁车大战'
            , time : '9月4号 9:00'
            , area : '深圳 南山'
            , activityType : '极限运动'
            , value : '150'
            , img : '3.jpg'
            , maxApply : 20
            , captain : {
              name : 'Ben Sparrow'
              , face:'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
              , stats : [{item:'1'},{item:'1'},{item:'1'},{item:'1'}]
              , manifesto : '一起来狂漂吧！'
            }

            , applys : [
              {face:'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'}
              , {face:'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'}
              , {face:'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'}
            ]
            , comments : [
              {
                name: 'Mike Harrington'
                , content: '好玩到我都五想翻屋企'
                , face:'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'}
              , {
                name: 'Ben Sparrow'
                , content: "I'm so happy"
                , face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'}
              , {
                name: '泰坦万'
                , content: '这活动真的太妈好玩'
                , face:'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'}
              , {
                name: 'Max Lynx'
                , content: 'THIS IS VERY FUNNY!!'
                , face:'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'}

            ]
          }];
      }
    }
  });
