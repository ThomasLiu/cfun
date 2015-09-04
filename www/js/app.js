// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic'
  , 'starter.controllers'
  , 'starter.services'
  , 'starter.config'])

.run(function($ionicPlatform
    , Push
    , User) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }

    var currentUser = User.getCurrentUser();
    if (currentUser.id) {
      Push.setAlias(currentUser.id);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

    // activity start ---------------------------------------
    .state('tab.activitys', {
      url: '/activitys',
      views: {
        'tab-activity': {
          templateUrl: 'templates/activity/index.html',
          controller: 'ActivitysCtrl'
        }
      }
    })
    .state('tab.activity', {
      url: '/activity/:id',
      views: {
        'tab-activity': {
          templateUrl: 'templates/activity/view.html',
          controller: 'ActivityCtrl'
        }
      }
    })

    // activity end ---------------------------------------


    // msg start ---------------------------------------

    .state('tab.msg', {
      url: '/msg',
      views: {
        'tab-msg': {
          templateUrl: 'templates/msg/index.html',
          controller: 'MsgCtrl'
        }
      }
    })
      .state('tab.msgList', {
        url: '/msgList/:type',
        views: {
          'tab-msg': {
            templateUrl: 'templates/msg/list.html',
            controller: 'MsgListCtrl'
          }
        }
      })


    // msg end ---------------------------------------

    // my start ---------------------------------------
    .state('tab.my', {
      url: '/my/:id',
      views: {
        'tab-my': {
          templateUrl: 'templates/my/index.html',
          controller: 'MyCtrl'
        }
      }
    })
    .state('tab.edit', {
      url: '/edit',
      views: {
        'tab-my': {
          templateUrl: 'templates/my/edit.html',
          controller: 'EditCtrl'
        }
      }
    })
    .state('tab.users', {
      url: '/users/:id',
      views: {
        'tab-my': {
          templateUrl: 'templates/my/list.html',
          controller: 'UsersCtrl'
        }
      }
    })
    .state('tab.hisActivitys', {
      url: '/hisActivitys/:id',
      views: {
        'tab-my': {
          templateUrl: 'templates/his_activity/list.html',
          controller: 'HisActivitysCtrl'
        }
      }
    })
    .state('tab.hisActivity', {
      url: '/hisActivity/:id',
      views: {
        'tab-my': {
          templateUrl: 'templates/his_activity/view.html',
          controller: 'HisActivityCtrl'
        }
      }
    })
    // my end ---------------------------------------




  ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/activitys');

});

angular.module('starter.controllers', ['starter.services']);

angular.module('starter.services', ['starter.config']);



