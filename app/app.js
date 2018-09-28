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
            .when("/world", {
                template: "<world></world>"
            })
            .when("/victoria", {
                template: "<victoria></victoria>"
            })
            .when("/all", {
                template: "<all></all>"
            })
            .when("/article", {
                template: "<articleviewview></articleviewview>"
            })
            .otherwise({
                templateUrl: 'app/pagenotfound/pagenotfound.template.html'
            });
    }]);