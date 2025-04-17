
import React from "react";
import { motion } from "framer-motion";

interface TeamMemberProps {
  name: string;
  role: string;
}

const TeamMember = ({ name, role }: TeamMemberProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="flex flex-col items-center"
    >
      <div className="w-24 h-24 bg-gradient-to-br from-coral/20 to-coral rounded-full mb-4 overflow-hidden flex items-center justify-center text-white font-bold text-2xl">
        {name.charAt(0)}
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">{role}</p>
    </motion.div>
  );
};

const TeamSection = () => {
  const team = [
    { name: "Alváro", role: "CEO" },
    { name: "Marta", role: "Engenharia / AI" },
    { name: "Ruim", role: "Marketing / Sales" }
  ];
  
  return (
    <section className="py-16 px-4 bg-gray-50/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quem está por trás do Hostsy?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos uma pequena equipa em Lisboa apaixonada por tecnologia e Alojamento Local.
            <br />
            Estamos a criar uma solução simples, bonita e inteligente para resolver o caos da comunicação com hóspedes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-16"
        >
          {team.map((member, index) => (
            <TeamMember key={index} name={member.name} role={member.role} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
