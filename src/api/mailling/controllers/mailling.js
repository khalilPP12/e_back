'use strict';

/**
 * A set of functions called "actions" for `mailling`
 */

module.exports = {
  async create(ctx) {
    return await strapi
      .service("api::maailling.maailling")
      .create(ctx.request.body);
  },
};
