
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-white py-8 px-4 border-t border-gray-100/50 relative">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 md:mb-0"
        >
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/457e2d55-ad73-4e2b-889e-6c0c5e952ff6.png" 
              alt="Hostsys Logo" 
              className="h-12 w-auto"
            />
            <div className="text-xl font-bold tracking-tight">
              <span className="text-gray-900">Host</span>
              <span className="text-coral">sys</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-sm text-gray-500"
        >
          © {new Date().getFullYear()} Hostsy. Todos os direitos reservados.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
