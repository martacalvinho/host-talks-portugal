
import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import InterviewInfoSection from "@/components/InterviewInfoSection";
import CallToActionSection from "@/components/CallToActionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

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
