
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
    <div className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
          Como Funciona a Entrevista?
        </h2>
        
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
              className="bg-white p-6 rounded-xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1 bg-coral/10 p-2 rounded-lg text-coral">
                  {point.icon}
                </div>
                <span className="text-gray-700">{point.text}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InterviewInfoSection;
