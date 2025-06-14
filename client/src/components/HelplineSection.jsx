import React from "react";

const helplines = [
  {
    name: "KIRAN – Govt. of India",
    number: "1800-599-0019",
    description: "National mental health helpline, available 24x7 across India.",
  },
  {
    name: "NIMHANS Helpline",
    number: "080-46110007",
    description: "Professional mental health support by NIMHANS, Bengaluru.",
  },
  {
    name: "iCall – TISS",
    number: "9152987821",
    description: "Free and confidential psychosocial support by trained counselors.",
  },
  {
    name: "AASRA",
    number: "91-9820466726",
    description: "24x7 helpline for individuals in emotional distress or suicidal thoughts.",
  },
  {
    name: "Vandrevala Foundation",
    number: "1860 266 2345 / 9999 666 555",
    description: "Emotional support and crisis intervention by mental health professionals.",
  },
  {
    name: "Fortis Stress Helpline",
    number: "91-8376804102",
    description: "Mental wellness support by Fortis National Mental Health Program.",
  },
];

const HelplineSection = () => {
  return (
    <section
      id="emergencySection"
      className="w-full bg-gradient-to-b from-gray-50 to-white py-16 px-4 md:px-20"
    >
      <h2 className="text-3xl md:text-5xl font-bold text-center text-blue-800 mb-10">
        Emergency Mental Health Helplines 🇮🇳
      </h2>

      <p className="text-center max-w-3xl mx-auto text-gray-600 mb-12 text-base md:text-lg">
        If you or someone you know is going through a mental health crisis, please reach out
        to one of the verified helplines below. Trained professionals are available to support
        you with compassion and confidentiality.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {helplines.map((line, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
          >
            <h3 className="text-lg font-semibold text-blue-700 mb-2">
              {line.name}
            </h3>
            <p className="text-gray-600 text-sm mb-3">{line.description}</p>
            <p className="text-md font-medium text-blue-600">
              📞 {line.number}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HelplineSection;
