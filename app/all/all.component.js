'use strict';

angular
    .module('newsStreme.all', [])
    .component('all', {
        templateUrl: 'app/all/all.template.html',
        controller: 'allController',
        controllerAs: 'vm'
    });