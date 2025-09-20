'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { use } from 'react';
import { useTranslations } from 'next-intl';
import { PageProps, ServiceFeature, Service } from '@/types';


export default function ServicePage({ params }: PageProps) {
  const { slug } = use(params);
  const t = useTranslations();
  const serviceIndex = t.raw('servicePages.service.items').findIndex((item: Service) => item.serviceId === slug);

  if (serviceIndex === -1) {
    notFound();
  }

  const service = t.raw('servicePages.service.items')[serviceIndex];

  return (
    <div className="min-h-screen bg-foreground-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">{service.title}</h1>
            <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-foreground-500">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  {t('servicePages.breadcrumb.home')}
                </Link>
              </li>
              <li><span className="mx-2">/</span></li>
              <li>
                <Link href={`/${t('lang')}/${t('servicePages.service.parentSlug')}`} className="hover:text-primary transition-colors">
                  {t('servicePages.breadcrumb.services')}
                </Link>
              </li>
              <li><span className="mx-2">/</span></li>
              <li className="text-foreground-900 font-medium">{service.title}</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {service.features.map((feature: ServiceFeature, index: number) => (
            <div key={index} className="bg-foreground-100 rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-4">
                <div className="bg-primary-100 flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground-900 mb-3">{feature.title}</h3>
                  <p className="text-foreground-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-foreground-100 rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-foreground-900 mb-8 text-center">{t('servicePages.common.keyBenefits')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.benefits.map((benefit: string, index: number) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="bg-primary-100 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-foreground-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary to-primary-600 text-foreground rounded-2xl p-12">
            <h2 className="text-3xl font-bold mb-4">{service.cta.title}</h2>
            <p className="text-xl mb-8 opacity-90">{service.cta.description}</p>
            <Link 
              href="/contact"
              className="bg-background-900 hover:bg-background-800 text-foreground px-8 py-4 rounded-full font-semibold transition-colors inline-block">
              {t('servicePages.common.getStartedToday')}
            </Link>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
}
