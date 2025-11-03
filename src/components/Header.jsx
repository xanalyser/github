
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = ({ language, toggleLanguage, t }) => {
  return <motion.header initial={{
    opacity: 0,
    y: -20
  }} animate={{
    opacity: 1,
    y: 0
  }} transition={{
    duration: 0.6
  }} className="relative z-20 w-full py-4 px-4 border-b border-[var(--neon-lime)]/20 backdrop-blur-sm bg-black/30">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <motion.div whileHover={{
          scale: 1.05,
          filter: 'drop-shadow(0 0 8px var(--neon-lime))'
        }} transition={{
          duration: 0.3
        }}>
            <img src="https://horizons-cdn.hostinger.com/2663d96d-52b1-4a2a-bed7-bcc7469e5af5/design-sem-nome---2025-11-03t142102.060-dc1Le.png" alt="X-Analyser Logo" className="h-12 w-auto" />
          </motion.div>
        </Link>
        
        <nav className="flex items-center gap-2 md:gap-6">
          <Link to="/blog" className="text-gray-300 hover:text-[var(--neon-lime)] transition-colors font-medium">
            {t.header.blog}
          </Link>

          {/* Language Toggle for Desktop */}
          <Button variant="ghost" size="sm" className="hidden md:flex items-center gap-2 text-gray-300 hover:bg-white/10 hover:text-[var(--neon-lime)]" onClick={toggleLanguage}>
            <Globe className="w-4 h-4" />
            {language === 'pt' ? 'EN' : 'PT'}
          </Button>

          {/* Language Toggle for Mobile */}
          <Button variant="ghost" size="icon" className="md:hidden flex items-center justify-center text-gray-300 hover:bg-white/10 hover:text-[var(--neon-lime)]" onClick={toggleLanguage}>
            <Globe className="w-5 h-5" />
          </Button>

          {/* X icon for mobile */}
           <motion.a whileHover={{
            scale: 1.1,
            filter: 'drop-shadow(0 0 5px #FFFFFF)'
          }} whileTap={{
            scale: 0.95
          }} href="https://x.com" target="_blank" rel="noopener noreferrer" className="md:hidden w-10 h-10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all">
              <img src="https://horizons-cdn.hostinger.com/2663d96d-52b1-4a2a-bed7-bcc7469e5af5/4979a80c9cb37e4a2241dfa9c4150b48.jpg" alt="X Logo" className="w-5 h-5 object-contain" />
            </motion.a>
          
          {/* Social Icons for Desktop */}
          <div className="hidden md:flex items-center gap-3 ml-4 pl-4 border-l border-white/10">
            <motion.a whileHover={{
            scale: 1.1,
            filter: 'drop-shadow(0 0 5px var(--neon-fuchsia))'
          }} whileTap={{
            scale: 0.95
          }} href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg border border-[var(--neon-fuchsia)]/50 flex items-center justify-center hover:bg-[var(--neon-fuchsia)]/10 transition-all">
              <Instagram className="w-5 h-5 text-[var(--neon-fuchsia)]" />
            </motion.a>
            
            <motion.a whileHover={{
            scale: 1.1,
            filter: 'drop-shadow(0 0 5px #FFFFFF)'
          }} whileTap={{
            scale: 0.95
          }} href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg border border-white/50 flex items-center justify-center hover:bg-white/10 transition-all">
              <img src="https://horizons-cdn.hostinger.com/2663d96d-52b1-4a2a-bed7-bcc7469e5af5/4979a80c9cb37e4a2241dfa9c4150b48.jpg" alt="X Logo" className="w-5 h-5 object-contain" />
            </motion.a>
          </div>
        </nav>
      </div>
    </motion.header>;
};
export default Header;
