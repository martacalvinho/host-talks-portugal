
import React from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import InterviewInfoSection from "@/components/InterviewInfoSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white py-4 px-4 border-b border-gray-100">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-coral text-2xl mr-2">●</span>
            <span className="font-medium text-xl">Hostsy</span>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <InterviewInfoSection />
        <CallToActionSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
