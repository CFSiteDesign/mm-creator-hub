import React, { useState, useEffect } from 'react';
import testimonialsBg from '@/assets/testimonials-bg.jpg';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { HowItWorks } from '@/components/HowItWorks';
import { Monetization } from '@/components/Monetization';
import { ContentShowcase } from '@/components/ContentShowcase';
import { CTASection } from '@/components/CTASection';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Footer } from '@/components/Footer';
import { FormOverlay } from '@/components/FormOverlay';
import { Takeover } from '@/components/Takeover';
import { TakeoverFormOverlay } from '@/components/TakeoverFormOverlay';

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isTakeoverFormOpen, setIsTakeoverFormOpen] = useState(false);
  const toggleForm = () => setIsFormOpen(!isFormOpen);
  const toggleTakeoverForm = () => setIsTakeoverFormOpen(!isTakeoverFormOpen);
  const handleApply = () => window.open('https://mm-influencer-hub.vercel.app', '_blank');

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.slice(1);
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header onApply={toggleForm} />

      <main>
        <Hero onApply={toggleForm} />
        <Features />
        <HowItWorks />
        <Monetization onApply={toggleForm} />
        <ContentShowcase />
        <div
          style={{
            backgroundImage: `url(${testimonialsBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <CTASection onApply={toggleForm} />
          <Testimonials onApply={toggleForm} />
        </div>
        <Takeover onApply={toggleTakeoverForm} />
        <FAQ />
      </main>

      <Footer />

      {isFormOpen && <FormOverlay onClose={toggleForm} />}
      {isTakeoverFormOpen && <TakeoverFormOverlay onClose={toggleTakeoverForm} />}
    </div>
  );
};

export default Index;
