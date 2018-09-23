'use strict';

angular.module('newsStreme')
    .directive('featuredArticles', [function () {
        return {
            restrict: 'E',
            link: function (scope, element, attrs) {
                scope.$watch('$ctrl.headlines', function (newVal, oldVal) {
                    if (newVal) {

                    }
                });
                console.log(element.html());
            },
            //currently not creating an isolate scope as the directive will be used at one place for now
            // scope: {
            //     dataSrc: '='
            // },
            templateUrl: 'app/widgets/featured_articles/featured.template.html'
        };
    }]);