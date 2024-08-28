'use strict';

/**
 * curtain router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::curtain.curtain');
