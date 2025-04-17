
import React from "react";
import { motion } from "framer-motion";
import HostsyButton from "./HostsyButton";
import { Calendar } from "lucide-react";

const HeroSectionPT = () => {
  return (
    <section className="py-16 px-4 md:py-24">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent"
        >
          Está cansado do caos na comunicação com hóspedes?
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto"
        >
          Participe numa conversa rápida e ajude-nos a construir a ferramenta ideal de IA para a gestão de mensagens no AL em Portugal.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <a href="https://calendly.com/hostsys" target="_blank" rel="noopener noreferrer">
            <HostsyButton size="lg" className="flex items-center gap-2 mx-auto">
              <Calendar size={20} />
              <span>Agendar Entrevista de 30 Minutos</span>
            </HostsyButton>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSectionPT;
