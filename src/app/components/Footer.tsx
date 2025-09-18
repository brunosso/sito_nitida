'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.company.title')}</h3>
            <p className="text-foreground mb-4">{t('footer.company.description')}</p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.contact.title')}</h3>
            <div className="space-y-2 text-foreground">
              <p>{t('footer.contact.address')}</p>
              <p>{t('footer.contact.phone')}</p>
              <p>{t('footer.contact.email')}</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('servicePages.service.title')}</h3>
            <ul className="space-y-2 text-foreground">
              {t.raw('servicePages.service.items').map((service: any, index: number) => (
                <li key={index}>
                  <Link 
                    href={`/${t('lang')}/${t('servicePages.service.parentSlug')}/${service.slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-foreground/20 mt-8 pt-8 text-center text-foreground">
          <p>{t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
