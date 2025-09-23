"use client"
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { POST } from "@/email/actions";
import { useTranslations } from 'next-intl';
import { ContactFormData, Service } from "@/types";


export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>()
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const t = useTranslations('contact.form');
  const tService = useTranslations('servicePages.service');

  const onSubmit: SubmitHandler<ContactFormData> = async ({ email, firstName, lastName, phoneNumber, company, service, description }) => {
    setLoading(true);
    try {
      const result = await POST({ firstName: firstName, lastName: lastName, email: email, phoneNumber: phoneNumber, company: company, service: service, description: description });
      if(result.success) {
        setSent(true);
      } else {
        setError(true);
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-background-50">
                      {t('firstName') + "*"}
                    </label>
                    <input
                      {...register("firstName", { required: true })}
                      type="text"
                      id="firstName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                      placeholder={t('firstNamePlaceholder')}
                    />
                    {errors.firstName && <span className="text-red-500">{t('fieldRequired')}</span>}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-background-50">
                      {t('lastName') + "*"}
                    </label>
                    <input
                      {...register("lastName", { required: true })}
                      type="text"
                      id="lastName"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                      placeholder={t('lastNamePlaceholder')}
                    />
                    {errors.lastName && <span className="text-red-500">{t('fieldRequired')}</span>}
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-background-50">
                    {t('email') + "*"}
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                    placeholder={t('emailPlaceholder')}
                  />
                  {errors.email && <span className="text-red-500">{t('fieldRequired')}</span>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-background-50">
                    {t('phone') + "*"}
                  </label>
                  <input
                    {...register("phoneNumber", { required: true })}
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                    placeholder={t('phonePlaceholder')+"*"}
                  />
                  {errors.phoneNumber && <span className="text-red-500">{t('fieldRequired')}</span>}
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2 text-background-50">
                    {t('company')}
                  </label>
                  <input
                    {...register("company")}
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                    placeholder={t('companyPlaceholder')}
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2 text-background-50">
                    {t('service') + "*"}
                  </label>
                  <select
                    {...register("service", { required: true })}
                    id="service"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                  >
                    <option value="">
                      {t('selectService')}
                    </option>
                    {tService.raw('items').map((service: Service) => (
                    <option key={service.serviceId} value={service.serviceId}>
                      {service.title}
                    </option>
                    ))}
                    <option value="other">
                      {t('other')}
                    </option>
                  </select>
                  {errors.service && <span className="text-red-500">{t('fieldRequired')}</span>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-background-50">
                    {t('message') + "*"}
                  </label>
                  <textarea
                    id="message"
                    {...register("description", { required: true })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
                    placeholder={t('messagePlaceholder')}
                  ></textarea>
                  {errors.description && <span className="text-red-500">{t('fieldRequired')}</span>}
                  </div>

                <button
                  disabled={loading || sent || error}
                  type="submit"
                  className={`w-full bg-primary text-white py-3 px-6 rounded-lg font-semibold transition-colors ${loading || sent || error ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-secondary-700'}`}
                >
                  {t('submitButton')}
                </button>
                {sent && <div className="text-green-500">{t('sendOk')}</div>}
                {loading && <div className="text-yellow-500">{t('sending')}</div>}
                {error && <div className="text-red-500">{ t('sendError') }</div>}
              </form>
);

}