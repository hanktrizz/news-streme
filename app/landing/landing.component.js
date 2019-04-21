'use strict';

angular
    .module('newsStreme.landing', ['ngMaterial'])
    .component('landing', {
        templateUrl: 'app/landing/landing.template.html',
        controller: 'landingController'
    });