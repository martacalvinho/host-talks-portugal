
import React from "react";
import { motion } from "framer-motion";
import HostsyButton from "./HostsyButton";
import { Calendar, CheckCircle } from "lucide-react";

const CallToActionSectionPT = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white to-coral/5 z-0"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ajude-nos a Construir a Ferramenta Certa Para Si
          </h2>
          <p className="text-xl text-gray-600">
            A sua experiência importa. Marque já uma conversa rápida connosco.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8"
        >
          <a href="https://calendly.com/hostsys" target="_blank" rel="noopener noreferrer">
            <HostsyButton size="lg" className="flex items-center gap-2">
              <Calendar size={20} />
              <span>Agendar Entrevista Agora</span>
            </HostsyButton>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-center items-center text-sm text-gray-600"
        >
          <CheckCircle size={16} className="text-coral mr-2" />
          <span>Mais de 20 gestores portugueses de AL já participaram.</span>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToActionSectionPT;
