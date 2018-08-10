'use strict';

angular
    .module('newsStreme', ['ngRoute', 'newsStreme.landing'])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider
            .when("/", {
                template: "<landing></landing>"
            })
            .otherwise({

            });
    }]);