import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ChatbotSection from "../components/ChatbotSection";
import HelplineSection from "../components/HelplineSection";
import SOSSection from "../components/SOSSection";

const Home = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("heroSection");
      if (hero) {
        const heroBottom = hero.getBoundingClientRect().bottom + window.scrollY;
        setShowButton(window.scrollY > heroBottom - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-screen h-auto overflow-x-hidden">
      <Navbar />

      <section id="heroSection">
        <HeroSection />
      </section>

      <section id="chatbotSection">
        <ChatbotSection />
      </section>

      <section id="sosPageSection">
        <SOSSection />
      </section>

      <section
        id="journalSection"
        className="min-h-screen bg-green-100 flex items-center justify-center px-4 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Journal Description (Landing)
        </h2>
      </section>

      <section
        id="resourcesSection"
        className="min-h-screen bg-yellow-100 flex items-center justify-center px-4 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Resources Description (Landing)
        </h2>
      </section>

      <section id="emergencySection">
        <HelplineSection />
      </section>

      {showButton && (
        <ScrollLink
          to="heroSection"
          smooth={true}
          duration={500}
          offset={-60}
          className="fixed bottom-6 left-6 px-4 py-2 bg-blue-400 text-white hover:bg-blue-800 rounded-full text-sm shadow-lg transition-colors z-30 cursor-pointer"
        >
          Back to Top ⬆️
        </ScrollLink>
      )}
    </div>
  );
};

export default Home;
