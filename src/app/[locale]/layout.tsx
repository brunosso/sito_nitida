import {hasLocale, NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {routing} from '../../i18n/routing';

type Props = {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
};

export default async function LocaleLayout({children, params}: Props) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
        notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
            <div className="min-h-screen flex flex-col">
              <Header />
              {children}
              <Footer />
            </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}