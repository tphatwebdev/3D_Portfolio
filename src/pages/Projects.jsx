import { div } from "framer-motion/client";
import { projects } from "../constant";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          A selection of projects I’ve built to strengthen my skills in software
          engineering and modern web development. From frontend interfaces to
          full-stack applications, these projects showcase my technical growth,
          problem-solving approach, and passion for building practical products.
        </p>
      </div>
      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="Projects Icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>

              {/* Context-Driven Tech Stack Badges */}
              {project.tags && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 text-xs font-medium font-poppins rounded-md bg-blue-50 text-blue-700 border border-blue-200/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <p className="mt-3 text-slate-500">{project.description}</p>
              <div className="mt-5 flex flex-col gap-3 font-poppins">
                {project.link && (
                  <div className="flex items-center gap-2">
                    <Link
                      to={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-600"
                    >
                      {project.linkText || "Live Link"}
                    </Link>
                    <img
                      src={arrow}
                      alt="arrow"
                      className="w-4 h-4 object-contain"
                    />
                  </div>
                )}
                {project.sourceCode && (
                  <div className="flex items-center gap-2">
                    <Link
                      to={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-600"
                    >
                      {project.sourceCodeText || "Source Code"}
                    </Link>
                    <img
                      src={arrow}
                      alt="arrow"
                      className="w-4 h-4 object-contain"
                    />
                  </div>
                )}
                {project.backendSourceCode && (
                  <div className="flex items-center gap-2">
                    <Link
                      to={project.backendSourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-600"
                    >
                      {project.backendSourceCodeText || "Backend API"}
                    </Link>
                    <img
                      src={arrow}
                      alt="arrow"
                      className="w-4 h-4 object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};
export default Projects;
