'use strict';

const fs = require('fs');
const path = require('path');

const CONTENT_UID = 'api::location.location';
const SEED_FILES = [
  'data/seeds/originux-web-app-development-location-pages-1200-1400-words.json',
];
const MEDIA_KEYS = new Set(['Image', 'image', 'img']);

function omitMedia(value) {
  if (Array.isArray(value)) {
    return value.map(omitMedia);
  }

  if (value && typeof value === 'object') {
    const out = {};
    for (const [key, nested] of Object.entries(value)) {
      if (MEDIA_KEYS.has(key)) continue;
      out[key] = omitMedia(nested);
    }
    return out;
  }

  return value;
}

async function seedFromFile(strapi, relativePath) {
  const seedPath = path.join(process.cwd(), relativePath);

  if (!fs.existsSync(seedPath)) {
    strapi.log.warn(`[seed] missing file: ${seedPath}`);
    return;
  }

  let raw;
  try {
    raw = JSON.parse(fs.readFileSync(seedPath, 'utf8'));
  } catch (err) {
    strapi.log.error(
      `[seed] invalid JSON ${relativePath}: ${err instanceof Error ? err.message : String(err)}`
    );
    return;
  }

  const pages = raw.locations || [];

  for (const entry of pages) {
    const slug = String(entry.slug || '').trim();
    if (!slug) {
      strapi.log.warn('[seed] skip entry with empty slug');
      continue;
    }

    try {
      const existing = await strapi.documents(CONTENT_UID).findMany({
        filters: { slug },
        limit: 1,
      });
      const data = omitMedia(entry);

      if (existing.length > 0) {
        const updated = await strapi.documents(CONTENT_UID).update({
          documentId: existing[0].documentId,
          data,
          status: 'published',
        });
        strapi.log.info(`[seed] updated ${slug} (${updated.documentId})`);
        continue;
      }

      const created = await strapi.documents(CONTENT_UID).create({
        data,
        status: 'published',
      });

      strapi.log.info(`[seed] created ${slug} (${created.documentId})`);
    } catch (err) {
      strapi.log.error(
        `[seed] failed ${slug}: ${err instanceof Error ? err.message : String(err)}`
      );
    }
  }
}

async function enablePublicLocationPermissions(strapi) {
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
}

module.exports = {
  register() {},

  async bootstrap({ strapi }) {
    await enablePublicLocationPermissions(strapi);

    try {
      for (const file of SEED_FILES) {
        await seedFromFile(strapi, file);
      }
    } catch (err) {
      strapi.log.error(
        `[seed] failed: ${err instanceof Error ? err.message : String(err)}`
      );
    }
  },
};
