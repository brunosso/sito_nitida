'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Service } from '@/types';

export default function Footer() {
  const t = useTranslations();

  return (
    <footer className="bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">{t('footer.company.title')}</h3>
            <p className="text-foreground mb-4">{t('footer.company.description')}</p>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">{t('servicePages.service.title')}</h3>
            <ul className="space-y-2 text-foreground">
              {t.raw('servicePages.service.items').map((service: Service, index: number) => (
                <li key={index}>
                  <Link 
                    href={`/${t('lang')}/${t('header.nav.servicesSlug')}/${service.slug}`}
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
