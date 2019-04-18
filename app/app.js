'use strict';

angular
    .module('newsStreme', ['ngMaterial', 'ngMessages', 'ngRoute', 'newsStreme.landing', 'newsStreme.world', 'newsStreme.aussienews', 'newsStreme.victoria', 'newsStreme.all'])
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