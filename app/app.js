'use strict';

angular
    .module('newsStreme', ['ngRoute'])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider
        .when("/", {
            templateURL: "../index.html"
        })
        .otherwise({

        });
    }]);