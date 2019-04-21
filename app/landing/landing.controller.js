"use strict";

angular.module("newsStreme.landing").controller("landingController", [
  "NewsApiService",
  "QuoteApiService",
  "CATEGORIES",
  function(NewsApiService, QuoteApiService, CATEGORIES) {
    var self = this;

    //data variables
    self.headlines = null;
    self.headlines_comprehensive = null;
    self.quote = null;
    self.main_article = null;
    self.main_article_2 = null;
    self.mini_articles = [];

    var promise = NewsApiService.getNews({ country: "au" });
    promise.then(
      function(data) {
        // self.headlines = data;
        if (data) {
          self.headlines_comprehensive = NewsApiService.getArticlesWithImageURL(
            data
          );
          self.main_article = self.headlines_comprehensive[0];
          self.main_article_2 = self.headlines_comprehensive[1];
          for (var i = 0; i < 4; i++) {
            var index = -1;
            do {
              index = Math.floor(
                Math.random() * self.headlines_comprehensive.length
              );
              console.log(index);
              if (index != 0 || index != 1) break;
            } while (true);
            if (self.headlines_comprehensive[index])
              self.mini_articles.push(self.headlines_comprehensive[index]);
          }
        }
      },
      function(reason) {
        alert("Failed: " + reason);
      }
    );

    // QuoteApiService.getDailyQuote().then(function (response) {
    //     self.quote = response.data.contents.quotes;
    //     if (self.quote)
    //         self.quote = self.quote[0];
    // });
  }
]);