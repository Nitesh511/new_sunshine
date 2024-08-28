'use strict';

/**
 * blind router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::blind.blind');
