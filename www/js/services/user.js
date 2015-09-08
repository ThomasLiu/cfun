'use strict';

/**
 * @ngdoc function
 * @name starter.services:UserService
 * @description
 * # UserService
 * User Service of the starter app
 */

angular.module('starter.services')
  .factory('User', function($log, $q) {
    $log.log('User services');
    var currentUser = {};

    return {
      getCurrentUser : function(){
        return currentUser;
      }
      , getById: function(){
        return {};
      }
      , list: function(){
        return [
          {
            id : 0
            , name: 'Mike Harrington'
            , signature: '今天是……星期日？'
            , face:'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
            , stats : [{item:'1'},{item:'1'},{item:'1'},{item:'1'},{item:'1'}]
            , captainTimes : 20
            , postType : '攻城狮'
            , area : '深圳 福田'
            , mobile : 1300000000
            , interests : [{name:'极限运动'} ]
            , impressions : [{name:'高富帅',times:10}
            , {name:'高冷',times:16}
            , {name:'福田刘德华',times:7}]
            , kaCurrency : 1002
            , attentionUsers : [
            {
              id : 0
              , name: 'Mike Harrington'
              , face:'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
              , impression : [{name:'高富帅',times:10}
              ,{name:'高冷',times:16}
              ,{name:'有为青年',times:6}
              ,{name:'20投',times:2}
              ,{name:'福田刘德华',times:7}]}
            , {
              id : 2
              , name: 'Max Lynx'
              , signature: 'THIS IS VERY FUNNY!!'
              , face:'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
              , impression : [{name:'高富帅',times:10}
                ,{name:'高冷',times:16}
                ,{name:'有为青年',times:6}
                ,{name:'20投',times:2}
                ,{name:'福田刘德华',times:7}]}
            , {
              id : 3
              , name: 'Ben Sparrow'
              , signature: "I'm so happy"
              , face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
              , impression : [{name:'高富帅',times:10}
                ,{name:'高冷',times:16}
                ,{name:'有为青年',times:6}
                ,{name:'20投',times:2}
                ,{name:'福田刘德华',times:7}]}

          ]
            , activitys : [{
              id : 0
              , title : '骑马活动'
              , time : '2014-02-30'
              , img : '1.jpg'}
            , {
              id : 1
              , title : '极限攀崖'
              , time : '2014-03-15'
              , img : '2.jpg'}

          ]
          }
          , {
            id : 1
            , name: '泰坦万'
            , signature: '这活动真的太妈好玩'
            , face:'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
            , stats : [{item:'1'},{item:'1'},{item:'1'},{item:'1'},{item:'1'}]
            , captainTimes : 20
            , postType : '攻城狮'
            , area : '深圳 福田'
            , mobile : 1300000000
            , interests : [{name:'极限运动'} , {name:'智力烧脑'}]
            , impressions : [{name:'高富帅',times:10}
              , {name:'高冷',times:16}
              , {name:'有为青年',times:6}
              , {name:'20投',times:2}
              , {name:'福田刘德华',times:7}]
            , kaCurrency : 1002
            , attentionUsers : [
              {
                id : 0
                , name: 'Mike Harrington'
                , face:'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
                , impression : [{name:'高富帅',times:10}
                ,{name:'高冷',times:16}
                ,{name:'有为青年',times:6}
                ,{name:'20投',times:2}
                ,{name:'福田刘德华',times:7}]}
              , {
                id : 1
                , name: '泰坦万'
                , signature: '这活动真的太妈好玩'
                , face:'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
                , impression : [{name:'高富帅',times:10}
                  ,{name:'高冷',times:16}
                  ,{name:'有为青年',times:6}
                  ,{name:'20投',times:2}
                  ,{name:'福田刘德华',times:7}]}
              , {
                id : 3
                , name: 'Max Lynx'
                , signature: 'THIS IS VERY FUNNY!!'
                , face:'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
                , impression : [{name:'高富帅',times:10}
                  ,{name:'高冷',times:16}
                  ,{name:'有为青年',times:6}
                  ,{name:'20投',times:2}
                  ,{name:'福田刘德华',times:7}]}
              , {
                id : 3
                , name: 'Ben Sparrow'
                , signature: "I'm so happy"
                , face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
                , impression : [{name:'高富帅',times:10}
                  ,{name:'高冷',times:16}
                  ,{name:'有为青年',times:6}
                  ,{name:'20投',times:2}
                  ,{name:'福田刘德华',times:7}]}

            ]
            , activitys : [{
                id : 0
                , title : '滑翔小伞兵桑尼妹：有了翅膀，就有远方'
                , time : '2014-02-30'
                , img : '1.jpg'}
              , {
                id : 2
                , title : '速度与激情8 之 卡丁车大战'
                , time : '2014-03-30'
                , img : '3.jpg'}
            ]
          }
          , {
            id : 2
            , name: 'Max Lynx'
            , signature: 'THIS IS VERY FUNNY!!'
            , face:'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
            , captainTimes : 20
            , postType : '攻城狮'
            , area : '深圳 福田'
            , mobile : 1300000000
            , interests : [{name:'极限运动'} , {name:'人文艺术'} , {name:'智力烧脑'}]
            , impressions : [{name:'高富帅',times:10}
              , {name:'高冷',times:16}
              , {name:'有为青年',times:6}
              , {name:'20投',times:2}
              , {name:'福田刘德华',times:7}]
            , kaCurrency : 1002
            , attentionUsers : [
              {
                id : 0
                , name: 'Mike Harrington'
                , face:'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
                , impression : [{name:'高富帅',times:10}
                ,{name:'高冷',times:16}
                ,{name:'有为青年',times:6}
                ,{name:'20投',times:2}
                ,{name:'福田刘德华',times:7}]}
              , {
                id : 1
                , name: '泰坦万'
                , signature: '这活动真的太妈好玩'
                , face:'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
                , impression : [{name:'高富帅',times:10}
                  ,{name:'高冷',times:16}
                  ,{name:'有为青年',times:6}
                  ,{name:'20投',times:2}
                  ,{name:'福田刘德华',times:7}]}

              , {
                id : 3
                , name: 'Ben Sparrow'
                , signature: "I'm so happy"
                , face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
                , impression : [{name:'高富帅',times:10}
                  ,{name:'高冷',times:16}
                  ,{name:'有为青年',times:6}
                  ,{name:'20投',times:2}
                  ,{name:'福田刘德华',times:7}]}

            ]
            , activitys : [{
              id : 0
              , title : '滑翔小伞兵桑尼妹：有了翅膀，就有远方'
              , time : '2014-02-30'
              , img : '1.jpg'}
              , {
                id : 1
                , title : '自我极限的挑战'
                , time : '2014-03-15'
                , img : '2.jpg'}
              , {
                id : 2
                , title : '速度与激情8 之 卡丁车大战'
                , time : '2014-03-30'
                , img : '3.jpg'}
            ]
          }
          , {
            id : 3
            , name: 'Ben Sparrow'
            , signature: "I'm so happy"
            , face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
            , stats : [{item:'1'},{item:'1'},{item:'1'}]
            , captainTimes : 20
            , postType : '攻城狮'
            , area : '深圳 福田'
            , mobile : 1300000000
            , interests : [ {name:'智力烧脑'}]
            , impressions : [{name:'高富帅',times:10}
              , {name:'高冷',times:16}
              , {name:'有为青年',times:6}]
            , kaCurrency : 1002
            , attentionUsers : [
              {
                id : 0
                , name: 'Mike Harrington'
                , face:'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
                , impression : [{name:'高富帅',times:10}
                ,{name:'高冷',times:16}
                ,{name:'有为青年',times:6}
                ,{name:'20投',times:2}
                ,{name:'福田刘德华',times:7}]}
              , {
                id : 1
                , name: '泰坦万'
                , signature: '这活动真的太妈好玩'
                , face:'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
                , impression : [{name:'高富帅',times:10}
                  ,{name:'高冷',times:16}
                  ,{name:'有为青年',times:6}
                  ,{name:'20投',times:2}
                  ,{name:'福田刘德华',times:7}]}
              , {
                id : 2
                , name: 'Max Lynx'
                , signature: 'THIS IS VERY FUNNY!!'
                , face:'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
                , impression : [{name:'高富帅',times:10}
                  ,{name:'高冷',times:16}
                  ,{name:'有为青年',times:6}
                  ,{name:'20投',times:2}
                  ,{name:'福田刘德华',times:7}]}


            ]
            , activitys : [{
                id : 1
                , title : '极限攀崖'
                , time : '2014-03-15'
                , img : '2.jpg'}
              , {
                id : 2
                , title : '速度与激情8 之 卡丁车大战'
                , time : '2014-03-30'
                , img : '3.jpg'}
            ]
          }

        ];
      }
    }
  });
