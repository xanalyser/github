
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';

const HomePage = ({ language, toggleLanguage, t }) => {
  return (
    <>
      <Helmet>
        <title>{t.hero.title1} X-Analyser - {t.hero.title3}</title>
        <meta name="description" content={t.hero.subtitle} />
      </Helmet>
      
      <div className="min-h-screen flex flex-col circuit-bg">
        <Header language={language} toggleLanguage={toggleLanguage} t={t} />
        <main className="flex-1">
          <Hero t={t} />
        </main>
        <Footer t={t} />
      </div>
    </>
  );
};

export default HomePage;
