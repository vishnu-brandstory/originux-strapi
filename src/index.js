'use strict';

module.exports = {
  register() {},

  async bootstrap({ strapi }) {
    try {
      const publicRole = await strapi.db
        .query('plugin::users-permissions.role')
        .findOne({ where: { type: 'public' } });

      if (!publicRole) {
        return;
      }

      const actions = [
        'api::location.location.find',
        'api::location.location.findOne',
      ];

      for (const action of actions) {
        const permission = await strapi.db
          .query('plugin::users-permissions.permission')
          .findOne({ where: { action, role: publicRole.id } });

        if (permission) {
          if (!permission.enabled) {
            await strapi.db.query('plugin::users-permissions.permission').update({
              where: { id: permission.id },
              data: { enabled: true },
            });
          }
          continue;
        }

        await strapi.db.query('plugin::users-permissions.permission').create({
          data: {
            action,
            role: publicRole.id,
            enabled: true,
          },
        });
      }

      strapi.log.info('Public Location API permissions enabled');
    } catch (error) {
      strapi.log.error('Failed to enable Location public permissions', error);
    }
  },
};
