'use strict';

angular
    .module('newsStreme.aussienews', [])
    .component('aussienews', {
        templateUrl: 'app/aussienews/aussienews.template.html',
        controller: 'aussienewsController',
        controllerAs: 'vm'
    });