
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Bot, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CryptoIcon = ({ crypto }) => {
  const icons = {
    BTC: 'digital gold coin with circuit patterns',
    ETH: 'glowing purple ethereum crystal',
    SOL: 'high-speed abstract purple and green light trails',
    AI: 'robotic brain with glowing nodes',
    REG: 'stylized gavel with digital elements',
    GEN: 'interconnected network of nodes',
  };
  return <img alt={`${crypto} icon`} src="https://images.unsplash.com/photo-1638913972776-873fc7af3fdf" />;
};

const BlogList = ({ posts, onCtaClick, t, language }) => {
  const dateLocale = language === 'pt' ? 'pt-BR' : 'en-US';

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative flex flex-col p-6 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-sm transition-all duration-300 card-hover-pulse overflow-hidden"
          >
            <div className="h-40 mb-4 rounded-lg overflow-hidden relative">
               <div className="absolute inset-0 bg-slate-900">
                  <CryptoIcon crypto={post.crypto} />
               </div>
            </div>

            <span className="px-3 py-1 mb-3 rounded-full bg-[var(--neon-fuchsia)]/10 border border-[var(--neon-fuchsia)]/30 text-sm font-medium text-[var(--neon-fuchsia)] self-start">
              {post.category}
            </span>
            
            <h2 className="text-xl font-bold mb-2 text-white group-hover:text-[var(--neon-lime)] transition-colors">
              {post.title}
            </h2>
            
            <p className="text-gray-400 mb-4 flex-grow line-clamp-2">
              {post.excerpt}
            </p>
            
            <div className="flex items-center justify-between text-sm text-gray-500 border-t border-white/10 pt-4 mt-auto">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString(dateLocale, {
                  month: 'short',
                  day: '2-digit',
                  year: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-green-500/10 text-green-400">
                <Bot className="w-3.5 h-3.5" />
                <span className="text-xs font-semibold">{t.blog.powered_by}</span>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-16 text-center"
      >
        <Button 
          onClick={onCtaClick} 
          className="group text-lg font-bold px-8 py-6 bg-transparent border-2 border-[var(--neon-lime)] text-[var(--neon-lime)] rounded-lg shadow-[0_0_15px_rgba(57,255,20,0.5)] hover:bg-[var(--neon-lime)] hover:text-black hover:shadow-[0_0_25px_rgba(57,255,20,0.8)] transition-all duration-300"
        >
          {t.blog.cta_button}
          <ChevronRight className="w-6 h-6 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </motion.div>
    </>
  );
};

export default BlogList;
