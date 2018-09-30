'use strict';

angular
    .module('newsStreme.victoria')
    .controller('victoriaController', ['NewsApiService', 'IMG_PLACEHOLDER_URI', function (NewsApiService, IMG_PLACEHOLDER_URI) {
        var self = this;
        self.title = "Victorian News";
        self.imgSrc = IMG_PLACEHOLDER_URI;
        self.data = null;
        self.cleanedData = {chunk1: [], chunk2: [], chunk3: [], chunk4: []};

        self.$onInit = function () {
            NewsApiService.getNews({q: "victoria"}).then(function (resp) {
                self.data = resp.articles;
                if (self.data) {
                    angular.forEach(self.data, function (v, i) {
                        if (i < 5)
                            self.cleanedData.chunk1.push(v);
                        else if (i >= 5 && i < 10)
                            self.cleanedData.chunk2.push(v);
                    })
                }
            });
        };
    }]);