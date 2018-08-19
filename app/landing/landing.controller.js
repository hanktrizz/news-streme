'use strict';

angular
    .module('newsStreme.landing')
    .controller('landingController', ['NewsApiService', function (NewsApiService) {
        var self = this;

        self.headlines = null;

        // var promise = NewsApiService.getNews({ country: "au", category: "business" });
        // promise.then(function (data) {
        //     self.headlines = data;
        // }, function (reason) {
        //     alert('Failed: ' + reason);
        // });
    }]);