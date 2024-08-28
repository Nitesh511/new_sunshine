'use strict';

/**
 * blind service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::blind.blind');
