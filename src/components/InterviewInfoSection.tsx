
import React from "react";
import { motion } from "framer-motion";
import { 
  Clock, MessageSquare, Lightbulb, Gift, Lock, LineChart 
} from "lucide-react";

const InterviewInfoSection = () => {
  const interviewPoints = [
    { icon: <Clock className="w-5 h-5" />, text: "Conversa informal de 30 minutos (online, via Zoom/Meet)" },
    { icon: <MessageSquare className="w-5 h-5" />, text: "Partilhe os seus maiores desafios na comunicação com hóspedes" },
    { icon: <Lightbulb className="w-5 h-5" />, text: "Veja um vislumbre inicial da nossa ideia (opcional)" },
    { icon: <Gift className="w-5 h-5" />, text: "Acesso antecipado (e talvez gratuito) à ferramenta quando lançarmos" },
    { icon: <Lock className="w-5 h-5" />, text: "Totalmente confidencial" },
    { icon: <LineChart className="w-5 h-5" />, text: "Ajude a moldar a ferramenta com o seu feedback valioso" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 bottom-20 w-72 h-72 rounded-full bg-blue-100/20 blur-3xl"></div>
        <div className="absolute -left-24 top-36 w-64 h-64 rounded-full bg-coral/5 blur-3xl"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            Como Funciona a Entrevista?
          </span>
        </motion.h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {interviewPoints.map((point, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-white/70 backdrop-blur-lg p-6 rounded-xl border border-gray-100/50 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-coral/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="flex items-start gap-4 relative z-10">
                <div className="flex-shrink-0 mt-1 coral-gradient p-2 rounded-lg text-white">
                  {point.icon}
                </div>
                <span className="text-gray-700 font-medium">{point.text}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InterviewInfoSection;
