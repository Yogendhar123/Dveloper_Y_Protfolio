import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { technologies, additionalSkills } from "../constants";
import SkillRadarChart from "./SkillRadarChart";
import SkillNetworkGraph from "./SkillNetworkGraph";
import SkillsTabs from "./SkillsTabs";

export const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeTab, setActiveTab] = useState("Grid");
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detect dark mode
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);

    // Optional: Listen for changes in dark mode
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          setIsDarkMode(document.documentElement.classList.contains("dark"));
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-dark">
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
              Skills
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mx-auto max-w-2xl">
            Technologies and tools I work with to bring ideas to life.
          </p>
        </motion.div>

        <SkillsTabs
          tabs={["Grid", "Radar", "Network"]}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          isDarkMode={isDarkMode}
        />

        {activeTab === "Grid" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
            {technologies.map((technology, index) => {
              const Icon = technology.icon;

              return (
                <motion.div
                  key={technology.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gray-50 dark:bg-gray-900 shadow-card flex items-center justify-center mb-3 hover:shadow-card-hover transition-shadow"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 20px 30px -10px rgba(0, 0, 0, 0.2)",
                    }}
                    style={{
                      boxShadow: "0px 10px 25px -10px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    <Icon
                      size={32}
                      style={{ color: technology.color }}
                      strokeWidth={1.5}
                    />
                  </motion.div>
                  <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {technology.name}
                  </p>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 h-1.5 mt-2 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: technology.color }}
                      initial={{ width: 0 }}
                      animate={
                        inView
                          ? { width: `${technology.proficiency}%` }
                          : { width: 0 }
                      }
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {activeTab === "Radar" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center my-10"
          >
            <div className="w-full max-w-3xl">
              <SkillRadarChart isDarkMode={isDarkMode} />
            </div>
          </motion.div>
        )}

        {activeTab === "Network" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center my-10"
          >
            <div className="w-full">
              <SkillNetworkGraph isDarkMode={isDarkMode} />
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Additional Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {additionalSkills.map((skill, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 + 0.6 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
