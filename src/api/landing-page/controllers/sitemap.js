'use strict';

module.exports = {
  async index(ctx) {
    const pages = await strapi.entityService.findMany(
      'api::landing-page.landing-page',
      {
        filters: {
          publishedAt: { $notNull: true }
        },
        fields: ['slug', 'updatedAt'],
        sort: { updatedAt: 'desc' }
      }
    );

    ctx.body = pages.map(page => ({
      slug: page.slug,
      updatedAt: page.updatedAt
    }));
  }
};
