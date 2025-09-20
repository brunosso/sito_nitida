'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useState } from 'react';
import LocaleSwitcher from '../components/LocaleSwitcher';

export default function Header() {
  const t = useTranslations();
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  const toggleMenu = () => {
      setShowMenuMobile(!showMenuMobile);
  };

  const closeMenuOnMobile = () => {
      if (window.innerWidth <= 1150) {
          setShowMenuMobile(false);
      }
  };

  return (
    <header className="bg-background shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0" aria-label="Logo home page">
            <Link href="/">
              <h1 className="text-2xl font-bold text-primary">
                {t('header.logo')}
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href={`/${t('lang')}/${t('servicePages.service.parentSlug')}`} className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
              {t('header.nav.services')}
            </Link>
            <Link href="/about" className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
              {t('header.nav.about')}
            </Link>
            <Link href="/partners" className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
              {t('header.nav.partners')}
            </Link>
            {/* News 
            <Link href="/news" className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
              {translations.header.nav.news}
            </Link>
            */}
            <Link href="/contact" className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
              {t('header.nav.contact')}
            </Link>
          </nav>

          {/* Right side: Language Switcher and Mobile menu button */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="hidden md:block">
              <LocaleSwitcher />
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
                <button type="button"
                    className="hover:text-primary focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center p-2"
                    onClick={toggleMenu}>
                    <span className="sr-only">Open main menu</span>
                    <svg className={`w-6 h-6 ${showMenuMobile ? 'hidden' : 'block'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path>
                    </svg>
                    <svg className={`w-6 h-6 ${showMenuMobile ? 'block' : 'hidden'}`} fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                    </svg>
                </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${showMenuMobile ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
            <Link href={`/${t('lang')}/${t('servicePages.service.parentSlug')}`} className="hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={closeMenuOnMobile}>
              {t('header.nav.services')}
            </Link>
            <Link href="/about" className="hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={closeMenuOnMobile}>
              {t('header.nav.about')}
            </Link>
            <Link href="/partners" className="hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={closeMenuOnMobile}>
              {t('header.nav.partners')}
            </Link>
            {/* News 
            <Link href="/news" className="hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={closeMenuOnMobile}>
              {translations.header.nav.news}
            </Link>
            */}
            <Link href="/contact" className="hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors" onClick={closeMenuOnMobile}>
              {t('header.nav.contact')}
            </Link>
            
            {/* Mobile Language Switcher */}
            <div className="px-3 py-2 border-t border-gray-200 mt-2">
              <LocaleSwitcher />
            </div>
          </div>
        </div>

      </div>
    </header>
  );
}
