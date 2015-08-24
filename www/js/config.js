"use strict";

angular.module("starter.config", [])

.constant("$ionicLoadingConfig", {
  "template": "请求中..."
})

.constant("ENV", {
  "version": "0.0.1",
  "name": "production",
  "debug": false,
  "api": "https://cnodejs.org/api/v1"
})

;
