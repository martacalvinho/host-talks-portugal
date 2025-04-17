
import React from "react";
import Header from "@/components/Header";
import HeroSectionPT from "@/components/HeroSectionPT";
import SneakPeekSection from "@/components/SneakPeekSection";
import BenefitsSection from "@/components/BenefitsSection";
import TeamSection from "@/components/TeamSection";
import CallToActionSectionPT from "@/components/CallToActionSectionPT";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow">
        <HeroSectionPT />
        <SneakPeekSection />
        <BenefitsSection />
        <TeamSection />
        <CallToActionSectionPT />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
