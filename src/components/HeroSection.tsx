
import React from "react";
import HostsyButton from "./HostsyButton";

const HeroSection = () => {
  return (
    <div className="relative bg-white py-12 md:py-16 lg:py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
          Cansado do Caos na Comunicação com Hóspedes?
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
          Gerir mensagens do Airbnb, Booking, WhatsApp e Email ao mesmo tempo é um desafio. 
          Estamos a desenvolver uma solução <span className="font-semibold">específica</span> para gestores de AL em Portugal como você.
        </p>
        
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center">
          <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
            <HostsyButton size="lg">
              Quero Partilhar a Minha Experiência (30 min)
            </HostsyButton>
          </a>
        </div>
        
        <div className="mt-10 bg-gray-50 p-4 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="flex flex-col items-center p-2">
              <div className="text-coral mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
              </div>
              <p className="text-sm text-gray-600">WhatsApp</p>
            </div>
            <div className="flex flex-col items-center p-2">
              <div className="text-coral mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
              </div>
              <p className="text-sm text-gray-600">Email</p>
            </div>
            <div className="flex flex-col items-center p-2">
              <div className="text-coral mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
              </div>
              <p className="text-sm text-gray-600">Airbnb/Booking</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
