'use strict';

angular
    .module('newsStreme')
    .factory('QuoteApiService', ['$http', 'QUOTE_API_URL', function ($http, QUOTE_API_URL) {
        return {
            getDailyQuote: function () {
                return $http.get(QUOTE_API_URL);
            }
        }
    }]);