import React from "react";
import Typewriter from "typewriter-effect";

const SOSSection = () => {
  const sosFeatures = [
    'One-Tap <span class="text-red-500 font-bold text-2xl">Emergency Alert</span>',
    'Share <span class="text-blue-500 font-bold text-2xl">Live Location</span> Instantly with Contacts',
    'Send <span class="text-yellow-400 font-bold text-2xl">Distress Message</span> to Trusted People',
    '<span class="text-purple-400 font-bold text-2xl">Anonymous Reporting</span> of Incidents',
    'Guaranteed <span class="text-green-400 font-bold text-2xl">Privacy and Safety</span> for Every User',
  ];

  return (
    <section id="SOSSection" className="w-full h-[40vw] bg-gray-900 text-white">
      <div className="flex flex-col items-center justify-center px-4 py-8">
        <h1 className="text-4xl font-bold text-red-500 mb-6">Instant SOS Help Center</h1>

        <div className="flex w-[95vw] h-[30vw] p-4  rounded-lg">
          {/* Left side */}
          <div className="w-[50%] p-4 flex items-center justify-center">
            <img
              src="./sos.jpg"
              alt="SOS"
              className="rounded-lg max-h-full object-contain"
            />
          </div>

          {/* Right side - Typewriter Effect */}
          <div className="w-[50%] p-4 flex items-center justify-center text-center  md:text-xl">
            <Typewriter
              options={{
                strings: sosFeatures,
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 20,
                pauseFor: 1800,
                html: true,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SOSSection;
