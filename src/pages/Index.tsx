import React, { useState } from 'react';
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

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const toggleForm = () => setIsFormOpen(!isFormOpen);

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
        <FAQ />
      </main>

      <Footer />

      {isFormOpen && <FormOverlay onClose={toggleForm} />}
    </div>
  );
};

export default Index;
