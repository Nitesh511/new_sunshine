'use strict';

/**
 * leed service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::leed.leed');
