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

export interface SectionBusinessCards extends Struct.ComponentSchema {
  collectionName: 'components_section_business_cards';
  info: {
    displayName: 'business-cards';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionBusinessTypes extends Struct.ComponentSchema {
  collectionName: 'components_section_business_types';
  info: {
    displayName: 'Business Types';
  };
  attributes: {
    business_cards: Schema.Attribute.Component<'section.business-cards', true>;
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

export interface SectionCtaSection extends Struct.ComponentSchema {
  collectionName: 'components_section_cta_sections';
  info: {
    displayName: 'CTA Section';
  };
  attributes: {
    button_text: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    sub_heading: Schema.Attribute.String;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
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

export interface SectionFaqsCards extends Struct.ComponentSchema {
  collectionName: 'components_section_faqs_cards';
  info: {
    displayName: 'Faqs cards';
  };
  attributes: {
    answer: Schema.Attribute.Blocks;
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

export interface SectionFooterCta extends Struct.ComponentSchema {
  collectionName: 'components_section_footer_ctas';
  info: {
    displayName: 'Footer Cta';
  };
  attributes: {
    button_text: Schema.Attribute.String;
    button_url: Schema.Attribute.String;
    description: Schema.Attribute.Blocks;
    sub_heading: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
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

export interface SectionHero extends Struct.ComponentSchema {
  collectionName: 'components_section_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionIndustries extends Struct.ComponentSchema {
  collectionName: 'components_section_industries';
  info: {
    displayName: 'Industries';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    Heading: Schema.Attribute.String;
    industries_cards: Schema.Attribute.Component<
      'section.industries-cards',
      true
    >;
  };
}

export interface SectionIndustriesCards extends Struct.ComponentSchema {
  collectionName: 'components_section_industries_cards';
  info: {
    displayName: 'industries-cards';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
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

export interface SectionKeyBenefits extends Struct.ComponentSchema {
  collectionName: 'components_section_key_benefits';
  info: {
    displayName: 'key Benefits';
  };
  attributes: {
    benefits_cards: Schema.Attribute.Component<
      'section.key-benefits-cards',
      true
    >;
    title: Schema.Attribute.String;
  };
}

export interface SectionKeyBenefitsCards extends Struct.ComponentSchema {
  collectionName: 'components_section_key_benefits_cards';
  info: {
    displayName: 'key_benefits_cards';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    title: Schema.Attribute.String;
  };
}

export interface SectionLocationFaqs extends Struct.ComponentSchema {
  collectionName: 'components_section_location_faqs';
  info: {
    displayName: 'Location Faq';
  };
  attributes: {
    faqs_items: Schema.Attribute.Component<'section.faqs-cards', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionOfferCards extends Struct.ComponentSchema {
  collectionName: 'components_section_offer_cards';
  info: {
    displayName: 'offer-cards';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    number: Schema.Attribute.String;
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

export interface SectionOurApproachs extends Struct.ComponentSchema {
  collectionName: 'components_section_our_approachs';
  info: {
    displayName: 'our_approachs';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    sub_heading: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionOurProcess extends Struct.ComponentSchema {
  collectionName: 'components_section_our_processes';
  info: {
    displayName: 'Our Process';
  };
  attributes: {
    process_cards: Schema.Attribute.Component<'section.process-cards', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionOurResults extends Struct.ComponentSchema {
  collectionName: 'components_section_our_results';
  info: {
    displayName: 'Our Results';
  };
  attributes: {
    Suffix: Schema.Attribute.String;
    Title: Schema.Attribute.String;
    value: Schema.Attribute.Integer;
  };
}

export interface SectionProcessCards extends Struct.ComponentSchema {
  collectionName: 'components_section_process_cards';
  info: {
    displayName: 'process_cards';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SectionResult extends Struct.ComponentSchema {
  collectionName: 'components_section_results';
  info: {
    displayName: 'Result';
  };
  attributes: {
    our_results: Schema.Attribute.Component<'section.our-results', true>;
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

export interface SectionServicesCards extends Struct.ComponentSchema {
  collectionName: 'components_section_services_cards';
  info: {
    displayName: 'services_cards';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    title: Schema.Attribute.String;
  };
}

export interface SectionServicesSection extends Struct.ComponentSchema {
  collectionName: 'components_section_services_sections';
  info: {
    displayName: 'services_section';
  };
  attributes: {
    description: Schema.Attribute.Blocks;
    services_cards: Schema.Attribute.Component<'section.services-cards', true>;
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

export interface SectionWeOffer extends Struct.ComponentSchema {
  collectionName: 'components_section_we_offers';
  info: {
    displayName: 'We Offer';
  };
  attributes: {
    offer_cards: Schema.Attribute.Component<'section.offer-cards', true>;
    title: Schema.Attribute.String;
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
      'section.business-cards': SectionBusinessCards;
      'section.business-types': SectionBusinessTypes;
      'section.cards': SectionCards;
      'section.core-service-item': SectionCoreServiceItem;
      'section.core-service-items-new': SectionCoreServiceItemsNew;
      'section.cta': SectionCta;
      'section.cta-section': SectionCtaSection;
      'section.empower-item': SectionEmpowerItem;
      'section.experience-studio-item': SectionExperienceStudioItem;
      'section.faq': SectionFaq;
      'section.faq-content': SectionFaqContent;
      'section.faq-item': SectionFaqItem;
      'section.faqs-cards': SectionFaqsCards;
      'section.faqs-items': SectionFaqsItems;
      'section.faqs-tems': SectionFaqsTems;
      'section.footer-cta': SectionFooterCta;
      'section.frequently-asked-questions': SectionFrequentlyAskedQuestions;
      'section.hero': SectionHero;
      'section.industries': SectionIndustries;
      'section.industries-cards': SectionIndustriesCards;
      'section.journey-items': SectionJourneyItems;
      'section.key-benefits': SectionKeyBenefits;
      'section.key-benefits-cards': SectionKeyBenefitsCards;
      'section.location-faqs': SectionLocationFaqs;
      'section.offer-cards': SectionOfferCards;
      'section.our-approach': SectionOurApproach;
      'section.our-approachs': SectionOurApproachs;
      'section.our-process': SectionOurProcess;
      'section.our-results': SectionOurResults;
      'section.process-cards': SectionProcessCards;
      'section.result': SectionResult;
      'section.seo': SectionSeo;
      'section.services': SectionServices;
      'section.services-cards': SectionServicesCards;
      'section.services-section': SectionServicesSection;
      'section.solution-details': SectionSolutionDetails;
      'section.solution-details-new': SectionSolutionDetailsNew;
      'section.solution-details-test': SectionSolutionDetailsTest;
      'section.toolkit-items': SectionToolkitItems;
      'section.we-offer': SectionWeOffer;
      'section.why': SectionWhy;
      'section.why-content': SectionWhyContent;
    }
  }
}
