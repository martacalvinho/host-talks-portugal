import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "./ui/card";
import { MessageSquare, Gift, Bot, Brain, LockKeyhole, Video } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <MessageSquare className="text-coral" size={24} />,
      title: "Partilhe os seus maiores desafios com hóspedes",
      description: "Conte-nos como é a sua comunicação diária com os hóspedes."
    },
    {
      icon: <Gift className="text-coral" size={24} />,
      title: "Acesso antecipado (e gratuito) à ferramenta",
      description: "Seja dos primeiros a experimentar o Hostsy quando estiver pronto."
    },
    {
      icon: <Bot className="text-coral" size={24} />,
      title: "Veja uma demo com IA em ação (opcional)",
      description: "Demonstramos como a IA pode transformar a sua comunicação."
    },
    {
      icon: <Brain className="text-coral" size={24} />,
      title: "Ajude-nos a moldar a IA com base nas suas necessidades",
      description: "Influencie diretamente o desenvolvimento da nossa solução."
    },
    {
      icon: <LockKeyhole className="text-coral" size={24} />,
      title: "Conversa totalmente confidencial",
      description: "Todas as informações partilhadas são tratadas com sigilo absoluto."
    },
    {
      icon: <Video className="text-coral" size={24} />,
      title: "Sem compromisso — é só uma conversa por Zoom ou Meet",
      description: "Apenas 30 minutos do seu tempo, sem qualquer obrigação."
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Porque participar?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
