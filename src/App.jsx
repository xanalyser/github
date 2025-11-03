
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import HomePage from '@/pages/HomePage';
import BlogPage from '@/pages/BlogPage';
import { translations } from '@/lib/translations';

function App() {
  const [language, setLanguage] = useState('pt');
  
  const toggleLanguage = () => {
    setLanguage(prev => prev === 'pt' ? 'en' : 'pt');
  };
  
  const t = translations[language];

  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage language={language} toggleLanguage={toggleLanguage} t={t} />} />
          <Route path="/blog" element={<BlogPage language={language} toggleLanguage={toggleLanguage} t={t} />} />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
