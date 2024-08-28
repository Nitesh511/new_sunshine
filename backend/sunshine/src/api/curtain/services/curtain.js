'use strict';

/**
 * curtain service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::curtain.curtain');
