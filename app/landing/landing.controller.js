'use strict';

angular
    .module('newsStreme.landing')
    .controller('landingController', ['NewsApiService', 'QuoteApiService', 'CATEGORIES', function (NewsApiService, QuoteApiService, CATEGORIES) {
        var self = this;
        self.title = "Trending";
        self.cats = CATEGORIES;

        //data variables
        self.headlines = null;
        self.quote = null;

        var promise = NewsApiService.getNews({country: "au", category: "business"});
        promise.then(function (data) {
            self.headlines = data;
            if (data) {

            }
        }, function (reason) {
            alert('Failed: ' + reason);
        });

        QuoteApiService.getDailyQuote().then(function (response) {
            self.quote = response.data.contents.quotes;
            if (self.quote)
                self.quote = self.quote[0];
        });

    }]);