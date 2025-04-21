import React from "react";
import { motion } from "framer-motion";
import HostsyButton from "./HostsyButton";
import { Calendar } from "lucide-react";
import WaitlistModal from "./WaitlistModal";

const HeroSectionPT = () => {
  const [waitlistOpen, setWaitlistOpen] = React.useState(false);

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
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href="https://calendly.com/hostsys" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <HostsyButton 
                size="lg"
                className="shadow-xl shadow-coral/20 flex items-center gap-2 relative z-10 w-full"
              >
                <Calendar className="w-5 h-5" />
                Agendar Entrevista de 30 mins
              </HostsyButton>
            </a>
            <button
              type="button"
              onClick={() => setWaitlistOpen(true)} 
              className="w-full sm:w-auto"
            >
              <HostsyButton 
                variant="ghost"
                size="lg"
                className="flex items-center justify-center gap-2 text-coral hover:text-coral-dark hover:bg-coral/5 w-full"
              >
                Lista de Espera
              </HostsyButton>
            </button>
          </div>
        </motion.div>
      </div>
      <WaitlistModal open={waitlistOpen} onOpenChange={setWaitlistOpen} />
    </section>
  );
};

export default HeroSectionPT;
