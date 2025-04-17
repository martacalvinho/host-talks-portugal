
import React from "react";
import HostsyButton from "./HostsyButton";
import { Calendar, MessageSquare, Mail, Home } from "lucide-react";
import { motion } from "framer-motion";
import ImageComponent from "./ImageComponent";

const HeroSection = () => {
  const messageIcons = [
    { icon: <MessageSquare className="w-5 h-5" />, label: "WhatsApp" },
    { icon: <Mail className="w-5 h-5" />, label: "Email" },
    { icon: <Home className="w-5 h-5" />, label: "Airbnb/Booking" },
  ];

  return (
    <div className="relative bg-gradient-to-b from-white to-gray-50 py-20 md:py-24 lg:py-28 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight">
          Cansado do{" "}
          <span className="bg-gradient-to-r from-coral to-coral-light bg-clip-text text-transparent">
            Caos
          </span>{" "}
          na Comunicação com Hóspedes?
        </h1>
        
        <p className="text-lg md:text-xl mb-10 text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Gerir mensagens do Airbnb, Booking, WhatsApp e Email ao mesmo tempo é um desafio. 
          Estamos a desenvolver uma solução <span className="font-semibold">específica</span> para gestores de AL em Portugal como você.
        </p>
        
        <div className="flex justify-center mb-12">
          <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
            <HostsyButton 
              size="lg"
              className="hover:scale-105 transition-transform duration-300 shadow-lg shadow-coral/20 flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Quero Partilhar a Minha Experiência (30 min)
            </HostsyButton>
          </a>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-10 bg-white p-6 rounded-2xl shadow-lg"
        >
          <div className="grid grid-cols-3 gap-4 items-center">
            {messageIcons.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="flex flex-col items-center p-3"
              >
                <div className="text-coral mb-2 bg-coral-light/10 p-3 rounded-full">
                  {item.icon}
                </div>
                <p className="text-sm text-gray-600">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
