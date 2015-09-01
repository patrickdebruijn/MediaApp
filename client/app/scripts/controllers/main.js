'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
    .controller('MainCtrl', function ($scope, $http) {
        $scope.movies = ["Lord of the Rings",
            "Drive",
            "Science of Sleep",
            "Back to the Future",
            "Oldboy"];

        // gives another movie array on change
        $scope.updateMovies = function (typed) {
            // MovieRetriever could be some service returning a promise
            console.log(typed);
            var request = $http.post('/search', {data: typed});
            request.success(function (data) {
                console.log(data);
            });
        };


        $scope.doSomethingElse = function (suggestion) {
            console.log("Suggestion selected: " + suggestion);
        };

    });