'use strict';

angular.module('nudgeShowdownApp')
  .factory('leaderboard', ['$http', function($http) {
    return {
      get: function(startDate) {
        var url = 'https://api.nudgeyourself.com/showdown';
        if (startDate) {
          url += '?date='+startDate;
        }

        return $http.get(url);
      }
    };
  }]);