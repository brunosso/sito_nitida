'use client';

import { useTranslations } from 'next-intl';
import { Stat } from '@/types';

export default function StatsSection() {
  const t = useTranslations();

  return (
    <section className="py-20 bg-primary text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('stats.title')}
          </h2>
          <p className="text-xl text-foreground-50 max-w-2xl mx-auto">
            {t('stats.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t.raw('stats.items').map((stat: Stat, index: number) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-foreground-50">
                {stat.number}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {stat.label}
              </h3>
              <p className="text-foreground-50">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
