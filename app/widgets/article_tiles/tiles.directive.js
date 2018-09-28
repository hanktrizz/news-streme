'use strict';

angular.module('newsStreme')
    .directive('articleTile', [function () {
        return {
            restrict: 'E',
            templateUrl: 'app/widgets/article_tiles/tiles.template.html',
            scope: {
                selector: '=',
                imageUrl: '=',
                title: '=',
                descriptionHtml: '='
            }

        }
    }]);