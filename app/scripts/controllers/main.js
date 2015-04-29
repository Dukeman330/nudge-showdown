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
      $scope.start_date = response.data.start_date;
      $scope.end_date = response.data.end_date;
      $scope.companies = response.data.companies;
    });
  }]);
