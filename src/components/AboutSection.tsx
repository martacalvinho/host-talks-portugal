
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <div className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 bottom-0 w-64 h-64 rounded-full bg-coral/5 blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-8 text-center"
        >
          <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
            Quem Somos e Porque Queremos Falar Consigo?
          </span>
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Card className="overflow-hidden border-0 shadow-xl bg-white/80 backdrop-blur-sm">
            <CardContent className="p-8">
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Somos uma pequena equipa em Lisboa apaixonada por tecnologia e Alojamento Local. 
                Estamos a criar uma nova ferramenta com IA para automatizar respostas e centralizar toda 
                a comunicação com hóspedes. <strong className="text-coral">A sua opinião é fundamental</strong> para garantir que 
                resolvemos os problemas reais dos gestores portugueses.
              </p>
              
              <div className="flex flex-wrap justify-center gap-10 mt-12">
                {[
                  { title: 'Fundador', role: 'Hostsy' },
                  { title: 'Co-fundador', role: 'Hostsy' }
                ].map((person, index) => (
                  <motion.div 
                    key={index}
                    whileHover={{ y: -8, scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="flex flex-col items-center"
                  >
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden mb-3 shadow-lg border-4 border-white ring-2 ring-gray-50">
                      <svg viewBox="0 0 24 24" fill="none" className="text-gray-400 w-full h-full p-5" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="font-bold text-gray-800">{person.title}</p>
                    <p className="text-sm bg-gradient-to-r from-coral to-coral-light bg-clip-text text-transparent font-semibold">{person.role}</p>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
