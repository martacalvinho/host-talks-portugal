
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white py-8 px-4 border-t border-gray-100">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="flex items-center font-medium">
            <span className="text-coral text-xl mr-2">●</span> 
            <span className="bg-gradient-to-r from-coral to-coral-light bg-clip-text text-transparent font-bold">Hostsy</span>
          </p>
        </div>
        
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} Hostsy. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
