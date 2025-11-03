
import React from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Hero = ({ t }) => {
  const { toast } = useToast();

  const handleAnalyze = () => {
    toast({
      title: t.toasts.analyze_title,
      description: t.toasts.analyze_desc,
    });
  };

  return (
    <section className="relative z-10 container mx-auto px-4 py-20 md:py-32">
      <motion.div 
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[var(--neon-purple)] rounded-full opacity-20 blur-3xl"
          style={{ animation: 'ai-pulse 8s infinite alternate' }}
        />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/4 -translate-y-1/4 w-80 h-80 bg-[var(--neon-lime)] rounded-full opacity-10 blur-3xl"
          style={{ animation: 'ai-pulse 6s infinite alternate-reverse' }}
        />
      </motion.div>
      <style>{`
        @keyframes ai-pulse {
          from { transform: scale(0.8) rotate(0deg); }
          to { transform: scale(1.2) rotate(15deg); }
        }
      `}</style>
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white"
        >
          {t.hero.title1}{' '}
          <span className="relative inline-block">
            {t.hero.title2}
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-1 bg-[var(--neon-lime)]"
              style={{ filter: 'drop-shadow(0 0 8px var(--neon-lime))' }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            />
          </span>
          <br />
          {t.hero.title3}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            onClick={handleAnalyze}
            size="lg"
            className="group relative bg-transparent hover:bg-transparent text-white px-8 py-6 text-lg font-semibold rounded-xl transition-all border-2 border-[var(--neon-lime)]"
            style={{ 
              boxShadow: '0 0 10px var(--neon-lime), inset 0 0 10px var(--neon-lime), 0 0 30px var(--neon-lime)',
              textShadow: '0 0 5px var(--neon-lime)',
            }}
          >
             <motion.span
                className="absolute inset-0 border-2 border-[var(--neon-lime)] rounded-xl"
                animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 1, 0.5],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "loop",
                }}
            />
            <span className="relative z-10 flex items-center gap-2">
              <BrainCircuit className="w-6 h-6" />
              {t.hero.button}
            </span>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
