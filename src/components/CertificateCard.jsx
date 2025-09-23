import React from "react";

const CertificateCard = ({ cert }) => {
  return (
    <div className="bg-[#19142b] p-6 rounded-2xl shadow-lg hover:scale-105 transform transition duration-300">
      <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
      <p className="text-gray-400 mb-4">{cert.institution}</p>
      <a
        href={cert.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400 hover:underline"
      >
        View Certificate
      </a>
    </div>
  );
};

export default CertificateCard;
