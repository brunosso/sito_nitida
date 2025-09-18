import {useTranslations} from 'next-intl';

export default function NotFoundPage() {
  const t = useTranslations('notfound');

  return (
    <section className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">{t('title')}</h1>
      <p className="max-w-[460px]">{t('description')}</p>
    </section>
  );
}