'use strict';

angular.module('nudgeShowdownApp')
  .factory('leaderboard', ['$http', function($http) {
    return {
      get: function() {
        return $http.get('http://nudge-api.app:8000/showdown', {
          transformResponse: function(response) {
            var output = JSON.parse(response);

            _.each(output.companies, function(company) {
              var total = 0;
              _.each(company.users, function(user) {
                total += user.steps;
              });

              company.steps = (total > 0 && company.users.length > 0) ?
                Math.round(total/company.users.length) : 0;
            });

            return output;
          }
        });
      }
    };
  }]);