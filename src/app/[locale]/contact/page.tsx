'use client';

import ContactForm from '@/app/components/ContactForm';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function ContactPage() {
  const t = useTranslations();

  return (
    <div className="min-h-screen bg-foreground-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary-900 text-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('contact.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl text-foreground-50 max-w-3xl mx-auto">
              {t('contact.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Managers Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {t('contact.managers.title')}
            </h2>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Technical Manager */}
            <div className=" rounded-lg p-8 shadow-sm text-center bg-background-50">
              <div className="w-24 h-24 mx-auto mb-6 bg-background-50 rounded-full flex items-center justify-center overflow-hidden">
                <Image 
                  width={96}
                  height={96}
                  src="/img/managers/technical-manager.svg" 
                  alt={t('contact.managers.technicalManagerName')}
                  className="w-full h-full object-cover"
                />
                <div className="w-full h-full bg-blue-100 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t('contact.managers.technicalManagerName')}
              </h3>
              <p className="text-primary font-medium mb-4">
                {t('contact.managers.technicalManagerTitle')}
              </p>
              <div className="space-y-2">
                <a href={`tel:${t('contact.managers.technicalManagerPhone')}`} className="block hover:text-primary transition-colors">
                {t('contact.managers.technicalManagerPhone')}
                </a>
                <a href={`mailto:${t('contact.managers.technicalManagerEmail')}`} className="block hover:text-primary transition-colors">
                  {t('contact.managers.technicalManagerEmail')}
                </a>
              </div>
            </div>

            {/* Sales Manager */}
            <div className="rounded-lg p-8 shadow-sm text-center bg-background-50">
              <div className="w-24 h-24 mx-auto mb-6 bg-background-50 rounded-full flex items-center justify-center overflow-hidden">
                <Image 
                  width={96}
                  height={96}
                  src="/img/managers/sales-manager.svg" 
                  alt={t('contact.managers.salesManagerName')}
                  className="w-full h-full object-cover"
                />
                <div className="w-full h-full bg-blue-100 rounded-full flex items-center justify-center" style={{display: 'none'}}>
                  <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t('contact.managers.salesManagerName')}
              </h3>
              <p className="text-primary font-medium mb-4">
                {t('contact.managers.salesManagerTitle')}
              </p>
              <div className="space-y-2">
                <a href={`tel:${t('contact.managers.salesManagerPhone')}`} className="block hover:text-primary transition-colors">
                  {t('contact.managers.salesManagerPhone')}
                </a>
                <a href={`mailto:${t('contact.managers.salesManagerEmail')}`} className="block hover:text-primary transition-colors">
                  {t('contact.managers.salesManagerEmail')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Location & Contact Details */}
            <div className="md:p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4">
                  {t('contact.location.title')}
                </h2>
              </div>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">
                      {t('contact.location.addressLabel')}
                    </h3>
                    <p>
                      {t('contact.location.address')}
                    </p>
                  </div>
                </div>

                {/* Business Hours */}
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-1">
                      {t('contact.location.hoursLabel')}
                    </h3>
                    <p>
                      {t('contact.location.hours')}
                    </p>
                    <p>
                      {t('contact.location.emergency')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="mt-8">
                <div className="bg-foreground-50 rounded-lg p-8 shadow-sm">
                  <div className="flex items-center justify-center">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.974137474042!2d14.687045411233138!3d36.890966962462215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1311982766952977%3A0xf8cd83f31e1a6c3f!2sViale%2015%2C%20n%C2%B0%206%2C%2097100%20Ragusa%20RG!5e0!3m2!1sit!2sit!4v1758555789977!5m2!1sit!2sit" 
                        width="100%" height="300" 
                        style={{border:0}} 
                        allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                      </iframe>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-foreground-50 rounded-lg p-8">
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-background-50">
                  {t('contact.form.title')}
                </h2>
              </div>
              <ContactForm/>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            {t('contact.cta.title')}
          </h2>
          <p className="text-xl text-foreground-50 mb-8 max-w-2xl mx-auto">
            {t('contact.cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`/${t('lang')}/${t('header.nav.servicesSlug')}`} className="inline-block bg-secondary-600 text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-secondary-500 transition-colors">
              {t('contact.cta.servicesButton')}
            </Link>
            <Link href={`tel:${t('contact.managers.salesManagerPhone')}`} className="border-2 border-foreground text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-foreground hover:text-background transition-colors">
              {t('contact.cta.callButton')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
