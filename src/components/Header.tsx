
import React from "react";
import HostsyButton from "./HostsyButton";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white/70 backdrop-blur-xl py-4 px-4 border-b border-gray-100/50 sticky top-0 z-50 shadow-sm"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img 
            src="/lovable-uploads/457e2d55-ad73-4e2b-889e-6c0c5e952ff6.png" 
            alt="Hostsys Logo" 
            className="h-8 mr-2"
          />
        </motion.div>
        
        <div className="hidden md:block">
          <a href="https://calendly.com/hostsys" target="_blank" rel="noopener noreferrer">
            <HostsyButton variant="outline" size="sm" className="flex items-center gap-2 border border-coral/50 backdrop-blur-sm">
              <Calendar size={16} />
              <span>Agendar Entrevista</span>
            </HostsyButton>
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
