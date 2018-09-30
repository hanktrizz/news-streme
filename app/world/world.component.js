'use strict';

angular
    .module('newsStreme.world', [])
    .component('world', {
        templateUrl: 'app/world/world.template.html',
        controller: 'worldController',
        controllerAs: 'vm'
    });