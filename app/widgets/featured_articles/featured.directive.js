'use strict';

angular.module('newsStreme')
    .directive('featuredArticles', ['IMG_PLACEHOLDER_URI', function (IMG_PLACEHOLDER_URI) {

        var miniArticleTemplateHtml = function (title, description, imageUrl, isSpotlightArticle) {
            var descHtml = description ? ("<p class='pDesc'>" + titleOrDescriptionOnly(title, description, 100, true) + "</p>") : "";
            var selector = isSpotlightArticle ? "lhsLargeBox" : "rhsMiniBox";
            if (isSpotlightArticle) {
                return "<div class='" + selector + "'><img src='" + (imageUrl ? imageUrl : IMG_PLACEHOLDER_URI) + "'/>" +
                    "<p class='eyecatchingtext'><span>" + titleOrDescriptionOnly(title, description) + "</span></p></div>";
            }
            return "\
            <div class='" + selector + "'>\
                            <img src='" + (imageUrl ? imageUrl : IMG_PLACEHOLDER_URI) + "'/>\
                            <div class='caption'>\
                                <p>" + title + "</p>"
                + descHtml +
                "</div>\
            </div>";
        };

        var titleOrDescriptionOnly = function (title, desc, lim, truncDescriptionOnly) {
            if (!lim)
                lim = 100;
            if (title && title.toString().length >= lim && !truncDescriptionOnly) {
                return title.toString().substring(0, lim) + "...[read]";
            } else if (desc && truncDescriptionOnly) {
                if (desc.toString().length <= lim)
                    return desc;
                else {
                    return desc.toString().substring(0, lim) + "...[read]";
                }
            }
            return title;
        };

        return {
            restrict: 'E',
            templateUrl: 'app/widgets/featured_articles/featured.template.html',
            link: function (scope, element, attrs) {
                // scope.$watch('$ctrl.headlines', function (datastream, datastale) {
                //     if (datastream) {
                //         var articles = datastream.articles;
                //         if (articles) {
                //             //first handle LHS featured article
                //             var divLHS = angular.element(document.querySelector('#divFeaturedLHS'));
                //             if (divLHS && divLHS.text() === '') {
                //                 divLHS.html(miniArticleTemplateHtml(articles[0].title, articles[0].description, articles[0].urlToImage, true));
                //             }
                //             //next handle all other RHS featured article boxes --> 4 of them
                //             var divOtherFeaturedGroups = angular.element(document.querySelectorAll('.divMiniFeaturedBox'));
                //             var index = 1;
                //             angular.forEach(divOtherFeaturedGroups, function (elem) {
                //                 angular.element(elem).html(miniArticleTemplateHtml(articles[index].title, articles[index].description, articles[index++].urlToImage));
                //             });
                //         }
                //     }
                // });

                scope.$watch('$ctrl.headlines_comprehensive', function (datastream, datastale) {
                    if (datastream) {
                        var articles = datastream;
                        if (articles) {
                            //first handle LHS featured article
                            var divLHS = angular.element(document.querySelector('#divFeaturedLHS'));
                            if (divLHS && divLHS.text() === '') {
                                console.log('before busted');
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
            },

            // scope: { }
        };
    }]);