import React, { useState, useEffect } from "react";
import HostsyButton from "./HostsyButton";
import { Calendar, Menu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import WaitlistModal from "./WaitlistModal";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [waitlistOpen, setWaitlistOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed w-full py-4 px-4 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-gray-100/50 shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/457e2d55-ad73-4e2b-889e-6c0c5e952ff6.png" 
              alt="Hostsys Logo" 
              className="h-16 w-auto"
            />
            <div className="text-2xl font-bold tracking-tight">
              <span className="text-gray-900">Host</span>
              <span className="text-coral">sys</span>
            </div>
          </div>
        </motion.div>
        
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6">
            <motion.a 
              href="#sneak-peek"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Sneak-peek
            </motion.a>
            <motion.a 
              href="#porque"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Porque?
            </motion.a>
            <motion.a 
              href="#sobre"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              Sobre
            </motion.a>
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href="https://calendly.com/hostsys" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <HostsyButton 
                variant="outline" 
                size="lg"
                className="flex items-center gap-2 border-2 border-coral/50 hover:border-coral/80 backdrop-blur-sm"
              >
                <Calendar className="w-5 h-5" />
                <span>Agendar Entrevista</span>
              </HostsyButton>
            </a>
            <button 
              className="inline-block"
              type="button"
              onClick={() => setWaitlistOpen(true)}
            >
              <HostsyButton 
                variant="ghost" 
                size="lg"
                className="flex items-center gap-2 text-coral hover:text-coral-dark hover:bg-coral/5"
              >
                <span>Lista de Espera</span>
              </HostsyButton>
            </button>
          </div>

          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100/50 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-gray-100/50 shadow-lg py-4 px-4 md:hidden"
          >
            <nav className="flex flex-col gap-4">
              <a href="#sneak-peek" className="text-gray-600 hover:text-gray-900 transition-colors">
                Sneak-peek
              </a>
              <a href="#porque" className="text-gray-600 hover:text-gray-900 transition-colors">
                Porque?
              </a>
              <a href="#sobre" className="text-gray-600 hover:text-gray-900 transition-colors">
                Sobre
              </a>
              <a 
                href="https://calendly.com/hostsys" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block"
              >
                <HostsyButton 
                  variant="outline" 
                  size="sm" 
                  className="w-full flex items-center justify-center gap-2 border-coral/50"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Agendar Entrevista</span>
                </HostsyButton>
              </a>
              <button
                type="button"
                className="inline-block"
                onClick={() => setWaitlistOpen(true)}
              >
                <HostsyButton 
                  variant="ghost"
                  size="sm"
                  className="w-full flex items-center gap-2 text-coral hover:text-coral-dark hover:bg-coral/5"
                >
                  <span>Lista de Espera</span>
                </HostsyButton>
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      <WaitlistModal open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </motion.header>
  );
};

export default Header;
