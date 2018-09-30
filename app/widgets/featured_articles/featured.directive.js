'use strict';

angular.module('newsStreme')
    .directive('featuredArticles', ['IMG_PLACEHOLDER_URI', function (IMG_PLACEHOLDER_URI) {

        var miniArticleTemplateHtml = function (title, description, imageUrl, isSpotlightArticle) {
            var descHtml = description ? ("<p>" + description + "</p>") : "";
            var selector = isSpotlightArticle ? "lhsLargeBox" : "rhsMiniBox";
            return "\
            <div class='" + selector + "'>\
                            <img src='" + (imageUrl ? imageUrl : IMG_PLACEHOLDER_URI) + "'/>\
                            <div class='caption'>\
                                <p>" + title + "</p>"
                + descHtml +
                "</div>\
            </div>";
        };

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
                                divLHS.html(miniArticleTemplateHtml(articles[0].title, articles[0].description, articles[0].urlToImage, true));
                            }
                            //next handle all other RHS featured article boxes --> 4 of them
                            var divOtherFeaturedGroups = angular.element(document.querySelectorAll('.divMiniFeaturedBox'));
                            var index = 1;
                            angular.forEach(divOtherFeaturedGroups, function (elem) {
                                angular.element(elem).html(miniArticleTemplateHtml(articles[index].title, articles[index].description, articles[index++].urlToImage));
                            });
                        }
                    }
                });
            }
            //currently not creating an isolate scope as the directive is used only at the app landing page
            // scope: { }
        };
    }]);