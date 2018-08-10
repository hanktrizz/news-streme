'use strict';

angular
    .module('newsStreme')
    .constant('NEWS_API_URL', 'https://newsapi.org/v2/')
    .constant('API_KEY', config.API_KEY)
    .constant('ENDPOINTS', {
        HEADLINES: "top-headlines",
        EVERYTHING: "everything",
        SOURCES: "sources"
    });