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

export interface SectionJourneyItems extends Struct.ComponentSchema {
  collectionName: 'components_section_journey_items';
  info: {
    displayName: 'journey_items';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionSolutionDetails extends Struct.ComponentSchema {
  collectionName: 'components_section_solution_details';
  info: {
    displayName: 'solution_details';
  };
  attributes: {
    description: Schema.Attribute.Text;
    number_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'section.core-service-item': SectionCoreServiceItem;
      'section.empower-item': SectionEmpowerItem;
      'section.journey-items': SectionJourneyItems;
      'section.solution-details': SectionSolutionDetails;
    }
  }
}
