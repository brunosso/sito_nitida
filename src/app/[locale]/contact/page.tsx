'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

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
                <img 
                  src="/img/managers/technical-manager.svg" 
                  alt={t('contact.managers.technicalManagerName')}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) {
                      fallback.style.display = 'flex';
                    }
                  }}
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
                <img 
                  src="/img/managers/sales-manager.svg" 
                  alt={t('contact.managers.salesManagerName')}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement;
                    if (fallback) {
                      fallback.style.display = 'flex';
                    }
                  }}
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
            <div className="p-8">
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
                      {t('footer.contact.address')}
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
                  <div className="aspect-w-16 aspect-h-9 rounded-lg bg-gray-200 flex items-center justify-center">
                    <div className="text-center">
                      <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <p className="text-gray-600">
                        {t('contact.location.mapPlaceholder')}
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        {t('footer.contact.address')}
                      </p>
                    </div>
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
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-background-50">
                      {t('contact.form.firstName')}
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={t('contact.form.firstNamePlaceholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-background-50">
                      {t('contact.form.lastName')}
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={t('contact.form.lastNamePlaceholder')}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-background-50">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-background-50">
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={t('contact.form.phonePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2 text-background-50">
                    {t('contact.form.company')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={t('contact.form.companyPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2 text-background-50">
                    {t('contact.form.service')}
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">
                      {t('contact.form.selectService')}
                    </option>
                    <option value="surveillance">
                      {t('contact.form.surveillance')}
                    </option>
                    <option value="iot">
                      {t('contact.form.iot')}
                    </option>
                    <option value="access">
                      {t('contact.form.access')}
                    </option>
                    <option value="electrical">
                      {t('contact.form.electrical')}
                    </option>
                    <option value="other">
                      {t('contact.form.other')}
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={t('contact.form.messagePlaceholder')}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  {t('contact.form.submitButton')}
                </button>
              </form>
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
          <div className="space-x-4">
            <Link href="/services" className="inline-block bg-primary text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-100 transition-colors">
              {t('contact.cta.servicesButton')}
            </Link>
            <a href={`tel:${t('footer.contact.phone')}`} className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover: hover:text-primary transition-colors">
              {t('contact.cta.callButton')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
