
import React from "react";
import HostsyButton from "./HostsyButton";
import { Calendar } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white/80 backdrop-blur-sm py-4 px-4 border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-coral text-2xl mr-2">●</span>
          <span className="font-medium text-xl">Hostsy</span>
        </div>
        <div className="hidden md:block">
          <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
            <HostsyButton variant="outline" size="sm" className="flex items-center gap-2">
              <Calendar size={16} />
              <span>Agendar Entrevista</span>
            </HostsyButton>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
