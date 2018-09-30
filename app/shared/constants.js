/*********************************************************
 * Lumping all the constants here for now as the app is
 * still relatively small-scale.
 ********************************************************/

'use strict';
angular
    .module('newsStreme')
    .constant('NEWS_API_URL', 'https://newsapi.org/v2/')
    .constant('QUOTE_API_URL', 'http://quotes.rest/qod.json')
    .constant('API_KEY', config.API_KEY)
    .constant('ENDPOINTS', {
        HEADLINES: "top-headlines",
        EVERYTHING: "everything",
        SOURCES: "sources"
    })
    .constant('CATEGORIES', {
        BUSINESS: ["business", "../../assets/images/business-image.png"],
        ENTERTAINMENT: ["entertainment", "../../assets/images/entertainment-image.png"],
        HEALTH: ["health", "../../assets/images/health-image.png"],
        SCIENCE: ["science", "../../assets/images/science-image.png"],
        SPORT: ["sports", "../../assets/images/sports-image.png"],
        TECHNOLOGY: ["technology", "../../assets/images/tech-image.png"]
    })
    .constant('IMG_PLACEHOLDER_URI', '../assets/images/placeholder-600x400.png');