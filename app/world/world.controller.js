'use strict';

angular
    .module('newsStreme.world')
    .controller('worldController', ['NewsApiService', 'IMG_PLACEHOLDER_URI', function (NewsApiService, IMG_PLACEHOLDER_URI) {
        var self = this;
        self.title = "Around the Globe";
        self.imgSrc = IMG_PLACEHOLDER_URI;
        self.data = null;
        self.cleanedData = {chunk1: [], chunk2: [], chunk3: [], chunk4: []};

        self.$onInit = function () {
            NewsApiService.getNews({sources: "bbc-news"}).then(function (resp) {
                self.data = resp.articles;
                //break the array into 4 chunks - better than ng-repeat in range using $index as it is expensive
                if (self.data) {
                    angular.forEach(self.data, function (v, i) {
                        if (i < 5)
                            self.cleanedData.chunk1.push(v);
                        else if (i >= 5 && i < 10)
                            self.cleanedData.chunk2.push(v);
                    })
                }

            });
            NewsApiService.getNews({sources: "associated-press"}).then(function (resp) {
                self.data = resp.articles;
                if (self.data) {
                    angular.forEach(self.data, function (v, i) {
                        if (i < 5)
                            self.cleanedData.chunk3.push(v);
                        else if (i >= 5 && i < 10)
                            self.cleanedData.chunk4.push(v);

                    })
                }

            });
        };
    }]);