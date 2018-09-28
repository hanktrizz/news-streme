'use strict';

angular
    .module('newsStreme.aussienews')
    .controller('aussienewsController', ['NewsApiService', '$filter', function (NewsApiService, $filter) {
        var self = this;
        self.title = "Australia News";
        self.data = null;

        self.$onInit = function () {
            NewsApiService.getNews({country: "au", category: "business"}).then(function (resp) {
                self.data = resp.articles;
                //TODO: break the array into 4 chunks - better than ngrepeat in range as it is expensive
            });
        };
    }]);