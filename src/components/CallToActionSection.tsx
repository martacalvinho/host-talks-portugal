
import React from "react";
import HostsyButton from "./HostsyButton";
import { Calendar, Mail } from "lucide-react";
import { motion } from "framer-motion";

const CallToActionSection = () => {
  return (
    <div className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 rounded-full bg-coral/5 blur-3xl"></div>
        <div className="absolute -left-32 bottom-0 w-72 h-72 rounded-full bg-blue-100/20 blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="bg-white/70 backdrop-blur-lg rounded-3xl p-10 shadow-xl border border-gray-100/50"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
            Ajude-nos a Construir a Ferramenta Certa Para Si
          </h2>
          
          <div className="mb-10">
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              A sua experiência é valiosa e pode influenciar diretamente o produto que estamos a desenvolver.
            </p>
          </div>
          
          <div className="mb-10">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative"
            >
              <div className="absolute inset-0 coral-gradient blur-xl opacity-20 rounded-xl"></div>
              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="relative z-10 inline-block">
                <HostsyButton 
                  size="lg"
                  className="shadow-xl shadow-coral/20 flex items-center gap-2 mx-auto"
                >
                  <Calendar className="w-5 h-5" />
                  Agendar Entrevista de 30 Minutos Agora
                </HostsyButton>
              </a>
            </motion.div>
          </div>
          
          <div>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-gray-600 flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4 text-coral" />
              Prefere por email?{" "}
              <a 
                href="mailto:info@hostsy.com" 
                className="text-coral hover:underline font-medium"
              >
                Contacte-nos aqui
              </a>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CallToActionSection;
