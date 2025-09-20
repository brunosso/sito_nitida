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

export type NewsPageProps = {
  params: Promise<{
    id: string;
  }>;
  messages: Messages;
  now: number;
};

// Re-export service types
export * from './service';
