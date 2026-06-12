import type { Schema, Struct } from '@strapi/strapi';

export interface SectionAdvantageItem extends Struct.ComponentSchema {
  collectionName: 'components_section_advantage_items';
  info: {
    displayName: 'advantage_item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionApproach extends Struct.ComponentSchema {
  collectionName: 'components_section_approaches';
  info: {
    displayName: 'approach';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SectionBanner extends Struct.ComponentSchema {
  collectionName: 'components_section_banners';
  info: {
    displayName: 'banner';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionBenefits extends Struct.ComponentSchema {
  collectionName: 'components_section_benefits';
  info: {
    displayName: 'Benefits';
  };
  attributes: {
    benefits_cards: Schema.Attribute.Component<'section.benefits-cards', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionBenefitsCards extends Struct.ComponentSchema {
  collectionName: 'components_section_benefits_cards';
  info: {
    displayName: 'benefits cards';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SectionCards extends Struct.ComponentSchema {
  collectionName: 'components_section_cards';
  info: {
    displayName: 'cards';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

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

export interface SectionCoreServiceItemsNew extends Struct.ComponentSchema {
  collectionName: 'components_section_core_service_items_news';
  info: {
    displayName: 'core_service_items_new';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface SectionCta extends Struct.ComponentSchema {
  collectionName: 'components_section_cta_s';
  info: {
    displayName: 'cta ';
  };
  attributes: {
    button_text: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    paragraph: Schema.Attribute.Blocks;
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

export interface SectionExperienceStudioItem extends Struct.ComponentSchema {
  collectionName: 'components_section_experience_studio_items';
  info: {
    displayName: 'experience_studio_item';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionFaq extends Struct.ComponentSchema {
  collectionName: 'components_section_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {};
}

export interface SectionFaqContent extends Struct.ComponentSchema {
  collectionName: 'components_section_faq_contents';
  info: {
    displayName: 'faq content';
  };
  attributes: {
    active: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    answer: Schema.Attribute.Blocks;
    question: Schema.Attribute.String;
  };
}

export interface SectionFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_section_faq_items';
  info: {
    displayName: 'faq_item';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    open_by_default: Schema.Attribute.Boolean;
    question: Schema.Attribute.String;
  };
}

export interface SectionFaqsItems extends Struct.ComponentSchema {
  collectionName: 'components_section_faqs_items';
  info: {
    displayName: 'faqs items';
  };
  attributes: {
    faq_content: Schema.Attribute.Component<'section.faq-content', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionFaqsTems extends Struct.ComponentSchema {
  collectionName: 'components_section_faqs_tems';
  info: {
    displayName: 'faqs-tems';
  };
  attributes: {};
}

export interface SectionFrequentlyAskedQuestions
  extends Struct.ComponentSchema {
  collectionName: 'components_section_frequently_asked_questions';
  info: {
    displayName: 'Frequently Asked Questions';
  };
  attributes: {
    faqs_items: Schema.Attribute.Component<'section.faqs-tems', false>;
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

export interface SectionOurApproach extends Struct.ComponentSchema {
  collectionName: 'components_section_our_approaches';
  info: {
    displayName: 'our-approach';
  };
  attributes: {
    approach: Schema.Attribute.Component<'section.approach', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionSeo extends Struct.ComponentSchema {
  collectionName: 'components_section_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    seo_description: Schema.Attribute.String;
    seo_title: Schema.Attribute.String;
    slug: Schema.Attribute.String;
  };
}

export interface SectionServices extends Struct.ComponentSchema {
  collectionName: 'components_section_services';
  info: {
    displayName: 'Services';
  };
  attributes: {
    cards: Schema.Attribute.Component<'section.cards', true>;
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
    num_img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionSolutionDetailsNew extends Struct.ComponentSchema {
  collectionName: 'components_section_solution_details_news';
  info: {
    displayName: 'solution_details_new';
  };
  attributes: {};
}

export interface SectionSolutionDetailsTest extends Struct.ComponentSchema {
  collectionName: 'components_section_solution_details_test_s';
  info: {
    displayName: 'solution_details_test ';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    num_img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionToolkitItems extends Struct.ComponentSchema {
  collectionName: 'components_section_toolkit_items';
  info: {
    displayName: 'toolkit_items';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    toolkit_icons: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    url: Schema.Attribute.String;
  };
}

export interface SectionWhy extends Struct.ComponentSchema {
  collectionName: 'components_section_whies';
  info: {
    displayName: 'Why';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionWhyContent extends Struct.ComponentSchema {
  collectionName: 'components_section_why_contents';
  info: {
    displayName: 'Why content';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'section.advantage-item': SectionAdvantageItem;
      'section.approach': SectionApproach;
      'section.banner': SectionBanner;
      'section.benefits': SectionBenefits;
      'section.benefits-cards': SectionBenefitsCards;
      'section.cards': SectionCards;
      'section.core-service-item': SectionCoreServiceItem;
      'section.core-service-items-new': SectionCoreServiceItemsNew;
      'section.cta': SectionCta;
      'section.empower-item': SectionEmpowerItem;
      'section.experience-studio-item': SectionExperienceStudioItem;
      'section.faq': SectionFaq;
      'section.faq-content': SectionFaqContent;
      'section.faq-item': SectionFaqItem;
      'section.faqs-items': SectionFaqsItems;
      'section.faqs-tems': SectionFaqsTems;
      'section.frequently-asked-questions': SectionFrequentlyAskedQuestions;
      'section.journey-items': SectionJourneyItems;
      'section.our-approach': SectionOurApproach;
      'section.seo': SectionSeo;
      'section.services': SectionServices;
      'section.solution-details': SectionSolutionDetails;
      'section.solution-details-new': SectionSolutionDetailsNew;
      'section.solution-details-test': SectionSolutionDetailsTest;
      'section.toolkit-items': SectionToolkitItems;
      'section.why': SectionWhy;
      'section.why-content': SectionWhyContent;
    }
  }
}
