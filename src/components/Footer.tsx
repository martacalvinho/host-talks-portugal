
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
          <p className="flex items-center font-medium">
            <span className="text-coral text-xl mr-2 animate-pulse-light">●</span> 
            <span className="bg-gradient-to-r from-coral to-coral-light bg-clip-text text-transparent font-bold">Hostsy</span>
          </p>
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
