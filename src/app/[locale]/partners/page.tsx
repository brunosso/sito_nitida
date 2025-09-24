'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Brands, WhyBrands } from '@/types';    
import Image from 'next/image';
import CtaPreFooter from '@/app/components/CtaPreFooter';



export default function PartnersPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-foreground-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-900 text-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('partners.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-foreground-100 max-w-3xl mx-auto">
              {t('partners.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('partners.brands.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('partners.brands.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.raw('partners.brands.items').map((brand: Brands, index: number) => (
              <div key={index} className=" rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center">
                  <div className="w-300 h-100 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      <Image src={brand.logo} alt={brand.name} width={300} height={100} />
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {brand.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {brand.description}
                  </p>
                  <div className="text-sm text-primary font-medium">
                    {brand.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why These Brands Section */}
      <section className=" py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('partners.whyBrands.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('partners.whyBrands.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {t.raw('partners.whyBrands.reasons').map((reason: WhyBrands, index: number) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl text-primary">
                    {reason.icon}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaPreFooter title={t('partners.cta.title')} description={t('partners.cta.description')} link1={`/${t('lang')}/${t('header.nav.servicesSlug')}`} label1={t('partners.cta.servicesButton')} link2="/contact" label2={t('partners.cta.contactButton')} />
    </div>
  );
}
