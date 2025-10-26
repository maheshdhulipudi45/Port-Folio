import React from "react";

const experienceData = [
  {
    title: "Full Stack Developer Intern",
    company: "Technical Hub",
    duration: "June 2025 - July 2025",
    description:
      "Developed and maintained full-stack web applications using MERN stack. Collaborated with a team of developers on projects, including an electrical issue management system, and implemented RESTful APIs and real-time features.",
  },
];

const Experience = ({ visible }) => (
  <section
    id="experience"
    className={`py-20 bg-[#0d0d16] text-white transition-opacity duration-1000 transform ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    } font-[Poppins]`}
  >
    {/* ==================== Heading ==================== */}
    <div className="text-center mb-16 mt-7">
      <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400">
        Experience
      </h2>
      <p className="mt-3 text-gray-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
        Hands-on experience in building and deploying real-world applications.
      </p>
    </div>

    {/* ==================== Timeline ==================== */}
    <div className="max-w-5xl mx-auto px-5 relative">
      {/* Timeline line */}
      <div className="absolute top-0 bottom-0 left-6 md:left-12 w-1 bg-[#2f1860]"></div>

      {experienceData.map((exp, index) => (
        <div key={index} className="mb-12 relative pl-12 md:pl-16">
          {/* Circle marker */}
<div
  className="absolute top-11 left-2 md:left-7
              w-4 h-4 md:w-5 md:h-5 bg-gradient-to-r from-purple-400 to-cyan-400 
              rounded-full border-4 border-[#0d0d16] shadow-lg 
              -translate-x-1/2 -translate-y-1/2"
></div>


          {/* Card */}
    <div
  className="relative bg-[#1a142b] p-5 rounded-2xl shadow-xl 
             hover:scale-[1.01] transition-transform duration-300 
             border border-[#2f1860] w-full md:w-[83%] lg:w-[80%] xl:w-[80%] 
             ml-[0px] md:ml-[2px] mr-[7px]"
>

            <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-3">
              <h3 className="text-xl md:text-2xl font-semibold tracking-wide">
                {exp.title}
              </h3>
              <span className="text-sm md:text-base text-gray-400 mt-1 md:mt-0">
                {exp.duration}
              </span>
            </div>
            <p className="text-purple-300 font-medium mb-2 text-justify md:text-lg">
              {exp.company}
            </p>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              {exp.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;