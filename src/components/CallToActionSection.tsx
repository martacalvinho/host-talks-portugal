
import React from "react";
import HostsyButton from "./HostsyButton";

const CallToActionSection = () => {
  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          Ajude-nos a Construir a Ferramenta Certa Para Si
        </h2>
        
        <div className="mb-8">
          <p className="text-lg text-gray-700 mb-4">
            A sua experiência é valiosa e pode influenciar diretamente o produto que estamos a desenvolver.
          </p>
        </div>
        
        <div className="mb-8">
          <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
            <HostsyButton size="lg">
              Agendar Entrevista de 30 Minutos Agora
            </HostsyButton>
          </a>
        </div>
        
        <div>
          <p className="text-gray-600">
            Prefere por email?{" "}
            <a 
              href="mailto:info@hostsy.com" 
              className="text-coral hover:underline"
            >
              Contacte-nos aqui
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallToActionSection;
