'use strict';

angular.module('nudgeShowdownApp')
  .factory('leaderboard', ['$http', function($http) {
    return {
      get: function() {
        return $http.get('http://nudge-api.app:8000/showdown');
      }
    }
  }]);