'use strict';

/**
 * shutter service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::shutter.shutter');
