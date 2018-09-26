/*********************************************************
 * Lumping all the constants here for now as the app is
 * still relatively small-scale.
 ********************************************************/

'use strict';
angular
    .module('newsStreme')
    .constant('NEWS_API_URL', 'https://newsapi.org/v2/')
    .constant('API_KEY', config.API_KEY)
    .constant('ENDPOINTS', {
        HEADLINES: "top-headlines",
        EVERYTHING: "everything",
        SOURCES: "sources"
    })
    .constant('IMG_PLACEHOLDER_URI', '../assets/images/placeholder-600x400.png');