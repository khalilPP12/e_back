'use strict';

/**
 * A set of functions called "actions" for `product`
 */

module.exports = {
  async create(ctx) {
    return await strapi
      .service("api::prooduct.prooduct")
      .create(ctx.request.body);
  },
};
