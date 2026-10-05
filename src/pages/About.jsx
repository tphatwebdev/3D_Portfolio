import { useState } from "react";
import { skills, experiences } from "../constant";
import WorkExperienceTimeline from "../components/WorkExperienceTimeline";
import CTA from "../components/CTA";

const About = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = [
    { key: "All", label: "All Skills" },
    { key: "Frontend", label: "Frontend & UI" },
    { key: "Backend", label: "Backend & Database" },
    { key: "Tools", label: "Tools & Workflow" },
  ];

  const filteredSkills =
    activeFilter === "All"
      ? skills
      : skills.filter((skill) => skill.type === activeFilter);

  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Phát
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          A Software Engineering graduate with 4 months of internship experience,
          passionate about building real-world applications and growing as a
          Software Engineer. I enjoy solving problems, learning new technologies,
          and turning ideas into reliable, user-focused products.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <p className="mt-2 text-slate-500">
          Core technologies, libraries, and tools I use to build scalable,
          responsive, and high-performance applications.
        </p>

        {/* Category Filters for Mental Scanning & Quick ATS Navigation */}
        <div className="mt-6 flex flex-wrap gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveFilter(cat.key)}
              className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium font-poppins transition-all duration-200 cursor-pointer ${
                activeFilter === cat.key
                  ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 3D Skills Grid with Name Labels */}
        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-8">
          {filteredSkills.map((skill) => (
            <div
              className="flex flex-col items-center group w-20"
              key={skill.name}
              title={`${skill.name} (${skill.type})`}
            >
              <div className="block-container w-20 h-20">
                <div className="btn-back rounded-xl" />
                <div className="btn-front rounded-xl flex justify-center items-center">
                  <img
                    src={skill.imageUrl}
                    alt={skill.name}
                    className="w-1/2 h-1/2 object-contain"
                  />
                </div>
              </div>
              <p className="mt-3 text-center text-xs font-semibold text-slate-600 font-poppins group-hover:text-blue-600 transition-colors">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            My professional experience includes hands-on work in frontend
            development across multiple internships. I’ve contributed to
            real-world projects, collaborated with development teams, and
            strengthened my skills in building modern, responsive web
            applications.
          </p>
          <p>Here’s a look at my experience:</p>
        </div>
        <div className="mt-12 flex text-slate-500">
          <WorkExperienceTimeline experiences={experiences} />
        </div>
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};
export default About;
