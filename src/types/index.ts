import { Messages } from 'next-intl';

export type PageProps = {
  messages: Messages;
  now: number;
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
