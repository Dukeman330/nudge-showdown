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
    leaderboard.get().then(function(response) {
      $scope.startDate = response.data.start_date;
      $scope.endDate = response.data.end_date;
      $scope.companies = response.data.companies;
    });
  }]);
