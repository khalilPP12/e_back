'use strict';

/**
 * commande-client service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::commande-client.commande-client');
