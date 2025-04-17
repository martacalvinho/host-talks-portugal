
import React from "react";

const AboutSection = () => {
  return (
    <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Quem Somos e Porque Queremos Falar Consigo?
        </h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-gray-700 mb-6">
            Somos uma pequena equipa em Lisboa apaixonada por tecnologia e Alojamento Local. 
            Estamos a criar uma nova ferramenta com IA para automatizar respostas e centralizar toda 
            a comunicação com hóspedes. <strong>A sua opinião é fundamental</strong> para garantir que 
            resolvemos os problemas reais dos gestores portugueses.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mt-8">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden mb-2">
                <svg viewBox="0 0 24 24" fill="none" className="text-gray-400 w-full h-full p-4" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="font-medium text-gray-800">Fundador</p>
              <p className="text-sm text-gray-600">Hostsy</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-gray-200 overflow-hidden mb-2">
                <svg viewBox="0 0 24 24" fill="none" className="text-gray-400 w-full h-full p-4" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="font-medium text-gray-800">Co-fundador</p>
              <p className="text-sm text-gray-600">Hostsy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
