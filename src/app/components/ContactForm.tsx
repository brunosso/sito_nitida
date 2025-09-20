"use client"
import { useState } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { POST } from "@/email/actions";
import { useTranslations } from 'next-intl';

export type Inputs = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  description: string;
  eventName: string;
};

export default function ContactForm() {
  const methods = useForm<Inputs>();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const t = useTranslations('contact.form');
  const onSubmit: SubmitHandler<Inputs> = async ({ email, firstName, lastName, phoneNumber, description, eventName }) => {
    setLoading(true);
    await POST({ email, firstName, lastName, phoneNumber, description, eventName });
    setLoading(false);
    setSent(true);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-background-50">
                      {t('firstName')}
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={t('firstNamePlaceholder')}
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-background-50">
                      {t('lastName')}
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder={t('lastNamePlaceholder')}
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-background-50">
                    {t('email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={t('emailPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-background-50">
                    {t('phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={t('phonePlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2 text-background-50">
                    {t('company')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={t('companyPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2 text-background-50">
                    {t('service')}
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">
                      {t('selectService')}
                    </option>
                    <option value="surveillance">
                      {t('surveillance')}
                    </option>
                    <option value="iot">
                      {t('iot')}
                    </option>
                    <option value="access">
                      {t('access')}
                    </option>
                    <option value="electrical">
                      {t('electrical')}
                    </option>
                    <option value="other">
                      {t('other')}
                    </option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t('message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder={t('messagePlaceholder')}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  {t('submitButton')}
                </button>
                {sent && <div>Messaggio ricevuto, a presto!</div>}
                {loading && <div>Invio in corso...</div>}
              </form>
    </FormProvider>
  );

}