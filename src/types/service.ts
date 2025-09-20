/**
 * Service-related type definitions for the BMS application
 */

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceCTA {
  title: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
  image: string;
  serviceId: string;
  slug: string;
  badge: string;
  features: ServiceFeature[];
  benefits: string[];
  cta: ServiceCTA;
}

export interface ServicePageData {
  title: string;
  subtitle: string;
  parentSlug: string;
  items: Service[];
}

export interface ServiceCommon {
  learnMore: string;
  keyBenefits: string;
  getStartedToday: string;
  viewDetails: string;
}

export interface ServicePages {
  breadcrumb: {
    home: string;
    services: string;
  };
  common: ServiceCommon;
  service: ServicePageData;
}

export type Stat = {
    number: string;
    label: string;
    description: string;
}
