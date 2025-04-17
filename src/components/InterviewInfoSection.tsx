
import React from "react";

const InterviewInfoSection = () => {
  return (
    <div className="py-12 px-4 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Como Funciona a Entrevista?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-3 text-coral">⏱️</span>
                <span>Conversa informal de 30 minutos (online, via Zoom/Meet)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-coral">🗣️</span>
                <span>Partilhe os seus maiores desafios na comunicação com hóspedes</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-coral">💡</span>
                <span>Veja um vislumbre inicial da nossa ideia (opcional)</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="mr-3 text-coral">🎁</span>
                <span>Acesso antecipado (e talvez gratuito) à ferramenta quando lançarmos</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-coral">🔒</span>
                <span>Totalmente confidencial</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3 text-coral">📊</span>
                <span>Ajude a moldar a ferramenta com o seu feedback valioso</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InterviewInfoSection;
