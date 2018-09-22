'use strict';

angular
    .module('newsStreme')
    .factory('NewsApiService', ['$http', '$q', 'NEWS_API_URL', 'API_KEY', 'ENDPOINTS', function ($http, $q, NEWS_API_URL, API_KEY, ENDPOINTS) {

        //local function to format params obj into query string
        function getQueryStringFromParams(parameters) {
            var query = "?";
            for (var key in parameters) {
                if (parameters.hasOwnProperty(key))
                    query += key.toString().trim() + "=" + parameters[key].toString().trim() + "&";
            }
            query = query.substr(0, query.length - 1);
            return query;
        }

        return {
            getNews: function (params) {
                return $q(function (resolve, reject) {
                    if (params && !angular.equals(params, {})) {
                        // Make a GET request to the api based on supplied parameters
                        return $http.get(NEWS_API_URL + ENDPOINTS.HEADLINES + getQueryStringFromParams(params), {
                            headers: {'X-Api-Key': API_KEY}
                        }).then(function (response) {
                            console.log('Fetching news data from API...');
                            resolve(response.data);
                        }, function (response) {
                            reject('Error @ getNews(): no data fetched from api');
                        });
                    } else {
                        reject('Error @ getNews() : params object does not have valid parameters for GET request');
                    }
                });
            },
            getArticlesWithImageURL: function (jsonDataArray) {
                var filteredData = [];
                if (jsonDataArray && jsonDataArray.articles && jsonDataArray.articles.length) {
                    filteredData = jsonDataArray.articles.filter(function (t) {
                        return t.urlToImage != null;
                    });
                    console.log(filteredData);
                } //TODO: Polyfill for older IE versions if time permits
                return filteredData;
            }
        }
    }]);