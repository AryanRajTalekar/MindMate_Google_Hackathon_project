import React, { useEffect, useState } from "react";
import { useTheme } from "../utils/ThemeContext";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  const name = "Aryan";
  const { theme } = useTheme();
  const [videoSrc, setVideoSrc] = useState("");

  const [showWelcome, setShowWelcome] = useState(false);
  const [moveUp, setMoveUp] = useState(false);
  const [showFeatures, setShowFeatures] = useState(false);

  const features = [
    'Track your <span class="text-indigo-600 font-semibold">Mental Health</span> journey.',
    'Connect with a <span class="text-indigo-600 font-semibold">Chatbot</span> anytime.',
    'Write privately in your <span class="text-purple-600 font-semibold">Journal</span>.',
    'Access 24/7 <span class="text-indigo-600 font-semibold">Emergency Helplines</span>.',
    'Tap <span class="text-red-700 font-semibold">SOS</span> in Critical Situations.',
    'Log and review your <span class="text-yellow-500 font-semibold">Daily Mood</span> over time.',
    'Receive <span class="text-purple-600 font-semibold">Wellness Tips</span> every day.',
    'Listen to <span class="text-indigo-600 font-semibold">Calming Music</span> anytime you need.',
  ];

  useEffect(() => {
    const videoList = {
      light: ["light1.mp4", "light2.mp4", "light4.mp4"],
      dark: ["dark1.mp4", "dark2.mp4", "dark3.mp4"],
    };
    const selectedVideos = videoList[theme];
    const randomVideo = selectedVideos[Math.floor(Math.random() * selectedVideos.length)];
    setVideoSrc(`/${theme}/${randomVideo}`);
  }, [theme]);

  useEffect(() => {
    const showTimer = setTimeout(() => setShowWelcome(true), 1000);
    const moveTimer = setTimeout(() => setMoveUp(true), 3000);
    const featuresTimer = setTimeout(() => setShowFeatures(true), 3500);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(moveTimer);
      clearTimeout(featuresTimer);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden" id="heroSection">
      {videoSrc && (
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 transition-opacity duration-1000 opacity-100"
        />
      )}

      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-black/40 px-4 text-center">
        {showWelcome && (
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: moveUp ? -80 : 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="text-white text-3xl sm:text-4xl md:text-6xl font-bold leading-tight"
          >
            Welcome, {name}<br className="block sm:hidden" /> To Your Safe Space
          </motion.h1>
        )}

        {showFeatures && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute bottom-[20%] sm:bottom-[15%] text-white text-xl sm:text-2xl md:text-3xl flex items-center justify-center px-2 sm:px-0"
          >
            <Typewriter
              options={{
                strings: features,
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 20,
                pauseFor: 1800,
                html: true,
              }}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
