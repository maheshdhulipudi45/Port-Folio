import React from "react";

const education = [
  {
    degree: "Master of Computer Applications",
    institution: "Aditya College Of Engineering",
    duration: "2024 - 2026",
    cgpa: "7.33",
  },
  {
    degree: "Bachelor of Science (Computer Science)",
    institution: "Aditya Degree College",
    duration: "2021 - 2024",
    cgpa: "7.77",
  },
  {
    degree: "Intermediate (MPC)",
    institution: "Aditya Junior College",
    duration: "2019 - 2021",
    cgpa: "7.61",
  },
];

const Education = ({ visible = true }) => (
  <section
    id="education"
    className={`py-16 md:py-20 bg-[#0d0d16] text-white transition-opacity duration-1000 transform 
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} font-[Poppins]`}
  >
    {/* ==================== Education Section ==================== */}
    <div className="text-center mb-10 md:mb-16 mt-5 md:mt-7">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
        Education
      </h2>
      <p className="mt-2 md:mt-3 text-gray-400 max-w-xl md:max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
        Academic background and qualifications.
      </p>
    </div>

    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-0 relative">
      {/* Vertical timeline line */}
      <div className="absolute top-0 bottom-0 left-6 sm:left-6 md:left-12 w-1 bg-[#2f1860]"></div>

      {education.map((item, index) => (
        <div
          key={index}
          className="mb-8 sm:mb-10 md:mb-12 relative pl-8 sm:pl-12 md:pl-16"
        >
          {/* Circle marker */}
          <div className="absolute top-1/2 left-3 sm:left-6 md:left-12 transform -translate-x-1/2 -translate-y-1/2 w-4 sm:w-5 h-4 sm:h-5 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full border-4 border-[#0d0d16] shadow-lg"></div>

          {/* Card */}
          <div className="relative bg-[#1a142b] p-5 sm:p-6 md:p-8 rounded-2xl shadow-xl hover:scale-[1.02] transition-transform duration-300 border border-[#2f1860] ml-2 sm:ml-3 md:ml-4">
            <div className="flex justify-between items-center mb-2 md:mb-3">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wide">
                {item.degree}
              </h3>
              <span className="text-xs sm:text-sm md:text-base text-gray-400">
                {item.duration}
              </span>
            </div>
            <p className="text-purple-400 font-medium mb-1 sm:mb-2 text-sm sm:text-base md:text-lg">
              {item.institution}
            </p>
            <p className="text-yellow-400 text-xs sm:text-sm md:text-base leading-relaxed">
              CGPA: {item.cgpa}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Education;
