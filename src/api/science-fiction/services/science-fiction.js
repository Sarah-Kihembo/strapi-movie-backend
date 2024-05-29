'use strict';

/**
 * science-fiction service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::science-fiction.science-fiction');
