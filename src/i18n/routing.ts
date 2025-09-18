import {defineRouting} from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'it'],
  defaultLocale: 'it',
  pathnames: {
    '/': '/',
    '/about': {
      it: '/chi-siamo'
    },
    '/services': {
      it: '/servizi'
    },
    '/services/automation-and-thermoregulation': {
      it: '/servizi/automazione-e-termoregolazione'
    },
    '/services/energy-monitoring': {
      it: '/servizi/monitoraggio-energetico'
    },
    '/services/smoke-detection': {
      it: '/servizi/rilevazione-fumi'
    },
    '/services/consulting-maintenance-and-support': {
      it: '/servizi/consulenza-manutenzione-e-assistenza'
    },
    '/news': {
      it: '/notizie'
    },
    '/partners': {
      it: '/partner'
    },
    '/contact': {
      it: '/contatti'
    },
    '/privacy-policy': {
      it: '/privacy-policy'
    },
    '/terms-of-service': {
      it: '/terms-of-service'
    },
    '/cookie-policy': {
      it: '/cookie-policy'
    },  
    '/sitemap': {
      it: '/sitemap'
    },
    '/robots.txt': {
      it: '/robots.txt'
    },
    '/404': {
      it: '/404'
    }
  }
});