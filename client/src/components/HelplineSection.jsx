import React from "react";



const helplines = [
  {
    name: "iCall – TISS",
    number: "9152987821",
    description: "Free and confidential mental health support.",
  },
  {
    name: "AASRA",
    number: "91-9820466726",
    description: "24/7 mental health helpline.",
  },
  {
    name: "Vandrevala Foundation",
    number: "1860 266 2345 / 9999 666 555",
    description: "Counseling support for emotional distress.",
  },
];

const HelplineSection = () => {
  return (
    <section
      id="emergencySection"
      className="w-full bg-gradient-to-b from-blue-50 to-white py-16 px-4 md:px-20"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center text-blue-600 mb-10">
        Emergency Mental Health Support
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {helplines.map((line, index) => (
          <div
            key={index}
            className="bg-white shadow-xl rounded-2xl p-6 hover:scale-105 transition-transform duration-300 border border-blue-100"
          >
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              {line.name}
            </h3>
            <p className="text-gray-600 mb-3">{line.description}</p>
            <p className="text-lg font-bold text-blue-500">
              📞 {line.number}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HelplineSection;
