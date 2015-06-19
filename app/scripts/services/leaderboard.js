'use strict';

angular.module('nudgeShowdownApp')
  .factory('leaderboard', ['$http', function($http) {
    return {
      get: function(startDate) {
        var url = 'http://localhost:3000/fauxapi';
        if (startDate) {
          url += '?date='+startDate;
        }

        return $http.get(url);
      }
    };
  }]);