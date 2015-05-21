'use strict';

angular.module('nudgeShowdownApp')
  .factory('leaderboard', ['$http', function($http) {
    return {
      get: function(startDate) {
        var url = 'http://nudge-api.app:8000/showdown';
        if (startDate) {
          url += '?date='+startDate.format('YY-MM-DD');
        }

        return $http.get(url);
      }
    };
  }]);