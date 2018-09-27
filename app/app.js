'use strict';

angular
    .module('newsStreme', ['ngRoute', 'newsStreme.landing', 'newsStreme.aussienews'])
    .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider
            .when("/", {
                template: "<landing></landing>"
            })
            .when("/aussienews", {
                template: "<aussienews></aussienews>"
            })
            .otherwise({});
    }]);