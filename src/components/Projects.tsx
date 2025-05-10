import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ExternalLink, Github } from "lucide-react";
import { personalProjects, projects, tagColorMap } from "../constants";

export const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
          ref={ref}
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            My{" "}
            <span className="text-primary-600 dark:text-primary-400">
              Projects
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mx-auto max-w-2xl">
            Explore some of my recent work and personal projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <a
                    href={project.source_code_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white font-medium text-sm bg-primary-600/80 hover:bg-primary-600 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <ExternalLink size={16} />
                    Visit Project
                  </a>
                </div> */}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.name}
                  <span className="text-gray-500 text-base"> (TCS)</span>
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => {
                    const color = tagColorMap[tag.color] || {};
                    return (
                      <span
                        key={tag.name}
                        className={`px-3 py-1 text-[14px] font-medium rounded-full ${color.bg} ${color.text} ${color.darkBg} ${color.darkText}`}
                      >
                        # {tag.name}
                      </span>
                    );
                  })}
                </div>

                {/* <a
                  href={project.source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                >
                  View Project
                  <ExternalLink size={16} className="ml-1" />
                </a> */}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-[30px]">
          {personalProjects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <a
                    href={project.source_code_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white font-medium text-sm bg-primary-600/80 hover:bg-primary-600 px-3 py-1.5 rounded-lg transition-colors"
                  >
                    <ExternalLink size={16} />
                    Visit Project
                  </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => {
                    const color = tagColorMap[tag.color] || {};
                    return (
                      <span
                        key={tag.name}
                        className={`px-3 py-1 text-[14px] font-medium rounded-full ${color.bg} ${color.text} ${color.darkBg} ${color.darkText}`}
                      >
                        # {tag.name}
                      </span>
                    );
                  })}
                </div>

                <a
                  href={project.source_code_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium"
                >
                  View Project
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
