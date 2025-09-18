'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations();

  return (
    <section className="bg-gradient-to-r from-primary to-primary-900 text-foreground py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-foreground max-w-3xl mx-auto">
          {t('hero.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={t('hero.ctaLink')} className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            {t('hero.cta')}
          </Link>
          <Link href={t('hero.learnMoreLink')} className="border-2 border-foreground text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-foreground hover:text-background transition-colors">
            {t('hero.learnMore')}
          </Link>
        </div>
      </div>
    </section>
  );
}
