'use strict';


angular.module('newsStreme')
    .directive('pageLabel', [function () {
        return {
            restrict: 'E',
            link: function (scope, element, attrs) {

            },
            scope: {
                currentPage:'='
            },
            template: "<div class='wPageLabel'>{{currentPage}}</div>"
        }
    }]);