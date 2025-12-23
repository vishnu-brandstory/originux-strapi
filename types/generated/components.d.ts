import type { Schema, Struct } from '@strapi/strapi';

export interface SectionCoreServiceItem extends Struct.ComponentSchema {
  collectionName: 'components_section_core_service_items';
  info: {
    displayName: 'core-service-item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionEmpowerItem extends Struct.ComponentSchema {
  collectionName: 'components_section_empower_items';
  info: {
    displayName: 'empower-item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'section.core-service-item': SectionCoreServiceItem;
      'section.empower-item': SectionEmpowerItem;
    }
  }
}
