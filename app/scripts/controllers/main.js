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
        $scope.now = Math.floor(Date.now()/1000) < $scope.endDate;
      });
    };

    getData();

    $scope.changeDate = function(goBack) {
      if (goBack || !$scope.now) {
        var newDate = (goBack) ? $scope.startDate - 604800 : $scope.startDate + 604800;
        getData(newDate);
      }
    };
  }]);
