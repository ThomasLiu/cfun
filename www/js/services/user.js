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
    return {
      getById: function(){
        return {
          id : 0
          , name : '黄大锤'
          , password : ''
          , mobileNum : '13422222120'
          , signature : '宅腐基全能'
          , face : 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
          , stats : [{item:'1'},{item:'1'},{item:'1'},{item:'1'},{item:'1'}]
          , captainTimes : 20
          , postType : '攻城狮'
          , area : '深圳 福田'
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
              id : 2
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
              id : 4
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
              , name : '骑马活动'
              , time : '2014-02-30'
              , area : '深圳 福田'
              , img : '1.jpg'
              , userType : '极限运动'}
            , {
              id : 1
              , name : '极限攀崖'
              , time : '2014-03-15'
              , area : '深圳 龙岗'
              , img : '2.jpg'
              , userType : '极限运动'}
            , {
              id : 2
              , name : '速度与激情8 之 卡丁车大战'
              , time : '2014-03-30'
              , area : '深圳 南山'
              , img : '3.jpg'
              , userType : '极限运动'}
          ]
        }
      }
      , list: function(){
        return [
          {
            id : 0
            , name: 'Mike Harrington'
            , face:'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
            , impressions : [{name:'高富帅',times:10}
            ,{name:'高冷',times:16}
            ,{name:'有为青年',times:6}
            ,{name:'20投',times:2}
            ,{name:'福田刘德华',times:7}]}
          , {
            id : 2
            , name: '泰坦万'
            , signature: '这活动真的太妈好玩'
            , face:'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
            , impressions : [{name:'高富帅',times:10}
              ,{name:'高冷',times:16}
              ,{name:'有为青年',times:6}
              ,{name:'20投',times:2}
              ,{name:'福田刘德华',times:7}]}
          , {
            id : 3
            , name: 'Max Lynx'
            , signature: 'THIS IS VERY FUNNY!!'
            , face:'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
            , impressions : [{name:'高富帅',times:10}
              ,{name:'高冷',times:16}
              ,{name:'有为青年',times:6}
              ,{name:'20投',times:2}
              ,{name:'福田刘德华',times:7}]}
          , {
            id : 4
            , name: 'Ben Sparrow'
            , signature: "I'm so happy"
            , face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
            , impressions : [{name:'高富帅',times:10}
              ,{name:'高冷',times:16}
              ,{name:'有为青年',times:6}
              ,{name:'20投',times:2}
              ,{name:'福田刘德华',times:7}]}

        ];
      }
    }
  });
