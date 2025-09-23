import { Messages } from 'next-intl';

export type PageProps = {
  params: Promise<{
    slug: string;
  }>;
}

export type Brands = {
  logo: string;
  name: string;
  description: string;
  category: string;
};

export type Certifications = {
  name: string;
  issuer: string;
  description: string;
};

export type WhyBrands = {
  icon: string;
  title: string;
  description: string;
};

// You can also add other common types here
export type LocalePageProps = {
  params: Promise<{
    locale: string;
  }>;
  messages: Messages;
  now: number;
};

export type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
  messages: Messages;
  now: number;
};

export type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  company: string;
  service: string;
  description: string;
};

// Re-export service types
export * from './service';
