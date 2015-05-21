'use strict';

/**
 * @ngdoc function
 * @name nudgeShowdownApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nudgeShowdownApp
 */
angular.module('nudgeShowdownApp')
  .controller('MainCtrl', ['$scope', 'leaderboard',
              function ($scope, leaderboard) {
    $scope.now = true;

    var getData = function(startDate) {
      leaderboard.get(startDate).then(function(response) {
        $scope.startDate = response.data.start_date;
        $scope.endDate = response.data.end_date;
        $scope.companies = response.data.companies;
        $scope.now = parseInt(moment().format('X'), 10) < $scope.endDate;
      });
    };

    getData();

    $scope.changeDate = function(goBack) {
      if (goBack || !$scope.now) {
        var newDate = moment($scope.startDate*1000);
        if (goBack) {
          newDate = newDate.subtract(7, 'days');
        } else {
          newDate = newDate.add(7, 'days');
        }

        getData(newDate);
      }
    };
  }]);
