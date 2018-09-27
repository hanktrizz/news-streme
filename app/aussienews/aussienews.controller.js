'use strict';

angular
    .module('newsStreme.aussienews')
    .controller('aussienewsController', ['NewsApiService', function (NewsApiService) {
        var self = this;
        self.title = "Australia News";

        
    }]);