
import React from "react";
import HostsyButton from "./HostsyButton";
import { Calendar, MessageSquare, Mail, Home } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const messageIcons = [
    { icon: <MessageSquare className="w-5 h-5" />, label: "WhatsApp" },
    { icon: <Mail className="w-5 h-5" />, label: "Email" },
    { icon: <Home className="w-5 h-5" />, label: "Airbnb/Booking" },
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-white to-gray-50 py-24 px-4 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-24 -top-24 w-64 h-64 rounded-full bg-coral/5 blur-3xl"></div>
        <div className="absolute -left-24 top-36 w-72 h-72 rounded-full bg-blue-100/20 blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
        >
          Cansado do{" "}
          <span className="bg-gradient-to-r from-coral to-coral-light bg-clip-text text-transparent relative">
            Caos
            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 138 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 5.26751C48.3333 -0.732487 114.667 -0.732471 137 5.26751" stroke="#FF5C38" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </span>{" "}
          na Comunicação com Hóspedes?
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl mb-10 text-gray-600 max-w-2xl mx-auto leading-relaxed"
        >
          Gerir mensagens do Airbnb, Booking, WhatsApp e Email ao mesmo tempo é um desafio. 
          Estamos a desenvolver uma solução <span className="font-semibold text-coral">específica</span> para gestores de AL em Portugal como você.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mb-12"
        >
          <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
            <HostsyButton 
              size="lg"
              className="shadow-xl shadow-coral/20 flex items-center gap-2 relative z-10"
            >
              <Calendar className="w-5 h-5" />
              Quero Partilhar a Minha Experiência (30 min)
            </HostsyButton>
          </a>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-10 glass-card rounded-2xl p-6"
        >
          <div className="grid grid-cols-3 gap-6">
            {messageIcons.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex flex-col items-center p-3"
              >
                <div className="coral-gradient mb-3 p-3 rounded-full text-white">
                  {item.icon}
                </div>
                <p className="text-sm font-medium text-gray-700">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
