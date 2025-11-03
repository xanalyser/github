
import React, { useState, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, SlidersHorizontal, BrainCircuit } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BlogList from '@/components/BlogList';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';

const BlogPage = ({ language, toggleLanguage, t }) => {
  const { toast } = useToast();
  const [activeCategory, setActiveCategory] = useState(t.blog.categories[0]);
  const [glitch, setGlitch] = useState(true);

  const allPosts = t.blog.posts;
  const categories = t.blog.categories;

  React.useEffect(() => {
    // Reset category when language changes
    setActiveCategory(t.blog.categories[0]);
  }, [language, t.blog.categories]);

  React.useEffect(() => {
    const timer = setTimeout(() => setGlitch(false), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleCtaClick = () => {
    toast({
      title: t.toasts.analyze_title,
      description: t.toasts.analyze_desc,
    });
  };

  const filteredPosts = useMemo(() => {
    if (activeCategory === categories[0]) { // 'All' or 'Todos'
      return allPosts;
    }
    return allPosts.filter(post => post.category === activeCategory);
  }, [activeCategory, allPosts, categories]);

  return (
    <>
      <Helmet>
        <title>{t.blog.title} - X-Analyser</title>
        <meta name="description" content={t.blog.description} />
      </Helmet>
      <div className={`min-h-screen flex flex-col circuit-bg ${glitch ? 'glitch-effect' : ''}`}>
        <Header language={language} toggleLanguage={toggleLanguage} t={t} />
        <main className="flex-1 container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-[var(--neon-lime)] transition-colors mb-8">
              <ArrowLeft size={16} />
              {t.blog.back}
            </Link>
            <h1 className="text-5xl font-bold text-white mb-4 flex items-center gap-4">
              <BrainCircuit className="w-12 h-12 text-[var(--neon-lime)]" />
              {t.blog.title_deep_dives}
            </h1>
            <p className="text-xl text-gray-400 mb-12">{t.blog.description}</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-2 mb-12">
            <SlidersHorizontal className="w-5 h-5 text-gray-400 mr-2" />
            {categories.map(category => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant="ghost"
                className={`px-4 py-2 rounded-full border transition-all duration-300 ${activeCategory === category ? 'bg-[var(--neon-lime)] text-black border-[var(--neon-lime)]' : 'bg-black/20 text-gray-300 border-white/20 hover:bg-[var(--neon-lime)]/20 hover:text-white'}`}
              >
                {category}
              </Button>
            ))}
          </motion.div>

          <BlogList posts={filteredPosts} onCtaClick={handleCtaClick} t={t} language={language} />

        </main>
        <Footer t={t} />
      </div>
    </>
  );
};

export default BlogPage;
