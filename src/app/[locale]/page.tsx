'use client';


import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import StatsSection from '../components/StatsSection';

export default function Home() {
  return (
    <main className="flex-grow">
      <HeroSection />
      <ServicesSection />
      <StatsSection />
    </main>
  );
}
