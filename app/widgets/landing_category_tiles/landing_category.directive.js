'use strict';

angular.module('newsStreme')
    .directive('categoryBoard', [function () {
        return {
            restrict: 'E',
            templateUrl: 'app/widgets/landing_category_tiles/landing_category.template.html',
            link: function (scope, element, attrs) {

            },
            scope: {
                cat: '=',
                imageUrl: '='
            }
        };
    }]);