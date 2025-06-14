import React from 'react';

const ChatbotSection = () => {
  return (
    <section
      id="chatbotSection"
      className="min-h-screen flex items-center justify-center px-4 py-12 bg-gradient-to-br from-yellow-200 to-yellow-100"
    >
      <div className="text-center max-w-2xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Talk Freely, Anytime 💬
        </h2>
        <p className="text-md sm:text-lg text-gray-700 mb-6">
          Our AI-powered chatbot is available 24/7 to support your mental wellness journey.
        </p>
        <p className="text-red-600 font-semibold text-lg sm:text-xl">
          🚧 This feature is under construction. Coming soon!
        </p>
      </div>
    </section>
  );
};

export default ChatbotSection;
