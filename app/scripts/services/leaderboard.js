'use strict';

angular.module('nudgeShowdownApp')
  .factory('leaderboard', ['$http', function($http) {
    return {
      get: function() {
        return $http.get('https://api.nudgeyourself.com/showdown');
      }
    };
  }]);