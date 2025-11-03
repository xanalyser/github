
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, Info, FileText } from 'lucide-react'; // Removed X import
import { useToast } from '@/components/ui/use-toast';

const Footer = ({ t }) => {
  const { toast } = useToast();
  
  const handleLinkClick = () => {
    toast({
      title: t.toasts.page_title,
      description: t.toasts.page_desc,
    });
  };

  return <footer className="relative z-20 w-full py-8 px-4 border-t border-[var(--neon-lime)]/20 backdrop-blur-sm bg-black/30 mt-auto">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 items-center text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start">
            <img src="https://horizons-cdn.hostinger.com/2663d96d-52b1-4a2a-bed7-bcc7469e5af5/design-sem-nome---2025-11-03t142102.060-wwo4C.png" alt="X-Analyser Logo" className="h-10 w-auto" />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-gray-400">
             <div onClick={handleLinkClick} className="cursor-pointer flex items-center gap-2 hover:text-[var(--neon-lime)] transition-colors"><Info className="w-4 h-4" />{t.footer.about}</div>
             <div onClick={handleLinkClick} className="cursor-pointer flex items-center gap-2 hover:text-[var(--neon-lime)] transition-colors"><Mail className="w-4 h-4" />{t.footer.contact}</div>
             <div onClick={handleLinkClick} className="cursor-pointer flex items-center gap-2 hover:text-[var(--neon-lime)] transition-colors"><FileText className="w-4 h-4" />{t.footer.privacy}</div>
          </div>
          
          <div className="flex items-center justify-center md:justify-end gap-3">
            <motion.a whileHover={{
            scale: 1.1,
            filter: 'drop-shadow(0 0 5px var(--neon-fuchsia))'
          }} href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-[var(--neon-fuchsia)]/50 flex items-center justify-center hover:bg-[var(--neon-fuchsia)]/10 transition-all">
              <Instagram className="w-4 h-4 text-[var(--neon-fuchsia)]" />
            </motion.a>
            
            <motion.a whileHover={{
            scale: 1.1,
            filter: 'drop-shadow(0 0 5px #FFFFFF)'
          }} href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg border border-white/50 flex items-center justify-center hover:bg-white/10 transition-all">
              <img src="https://horizons-cdn.hostinger.com/2663d96d-52b1-4a2a-bed7-bcc7469e5af5/4979a80c9cb37e4a2241dfa9c4150b48.jpg" alt="X Logo" className="w-4 h-4 object-contain" /> {/* Replaced X icon with image */}
            </motion.a>
          </div>
        </div>
        <p className="text-gray-500 text-xs text-center mt-8">
          {t.footer.rights}
        </p>
      </div>
    </footer>;
};
export default Footer;
