'use strict';

angular.module('newsStreme')
    .directive('featuredArticles', ['$document', function ($document) {
        return {
            restrict: 'E',
            templateUrl: 'app/widgets/featured_articles/featured.template.html',
            link: function (scope, element, attrs) {
                scope.$watch('$ctrl.headlines', function (datastream, datastale) {
                    if (datastream) {
                        var articles = datastream.articles;
                        if (articles) {
                            //first handle LHS featured article
                            var divLHS = angular.element(document.querySelector('#divFeaturedLHS'));
                            if (divLHS && divLHS.text() === '') {
                                console.log(articles[0]);
                                console.log(divLHS);
                                divLHS.html(articles[0].title);
                            }
                        }
                    }
                });
            }
            //currently not creating an isolate scope as the directive is used only at the app landing page
            // scope: {
            //     dataSrc: '='
            // },
        };
    }]);