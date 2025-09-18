'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';

export default function ServicesSection() {
  const t = useTranslations();

  return (
    <section className="bg-background-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('servicePages.service.title')}
          </h2>
          <p className="text-xl max-w-2xl mx-auto">
            {t('servicePages.service.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:h-96 lg:mb-16">
          {t.raw('servicePages.service.items').map((service: any, index: number) => (
            <Link 
              key={index} 
              href={`/${t('lang')}/${t('servicePages.service.parentSlug')}/${service.slug}`}
              className="group"
            >
              <div className="bg-background rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer h-full">                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-primary group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="leading-relaxed">
                    {service.description}
                  </p>
                  <div className="mt-4 flex items-center text-primary font-semibold group-hover:text-blue-700">
                    {t('servicePages.common.learnMore')}
                    <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
