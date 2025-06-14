import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import ChatbotSection from "../components/ChatbotSection";
import HelplineSection from "../components/HelplineSection";

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
    <div className="w-screen h-auto">
      <Navbar />

      <section id="heroSection">
        <HeroSection />
      </section>

      <section id="chatbotSection">
        <ChatbotSection />
      </section>

      <section id="journalSection" className="h-screen bg-green-100 flex items-center justify-center">
        <h2 className="text-4xl font-semibold">Journal Description (Landing)</h2>
      </section>

      <section id="resourcesSection" className="h-screen bg-yellow-100 flex items-center justify-center">
        <h2 className="text-4xl font-semibold">Resources Description (Landing)</h2>
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
          className="fixed bottom-6 left-6 px-4 py-2 bg-white/30 hover:bg-white/50 text-white rounded-full backdrop-blur-md text-sm z-20 cursor-pointer"
        >
          Back to Top ⬆️
        </ScrollLink>
      )}
    </div>
  );
};

export default Home;
