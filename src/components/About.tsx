import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Code, Laptop, Network } from "lucide-react";
// import { experienceYears } from "../constants";
import { BrainCircuit, Cloud } from "lucide-react";
export const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const experienceYears: string = useMemo<string>(() => {
    const joinDate: Date = new Date("2022-02-17");
    const now: Date = new Date();
    const diff: number = now.getTime() - joinDate.getTime();
    const diffYears: number = diff / (1000 * 60 * 60 * 24 * 365.25); // account for leap years
    return diffYears.toFixed(1); // e.g., "3.3"
  }, []);
  return (
    <section id="about" className="py-20 bg-white dark:bg-dark">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            About{" "}
            <span className="text-primary-600 dark:text-primary-400">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mx-auto max-w-2xl mb-12">
            A passionate Full-Stack Developer with {experienceYears} years of
            experience building responsive, scalable, and high-performance web
            applications using React, Angular, Node.js, Python, and modern
            AI-driven workflows.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {aboutCards.map((card, index) => (
            <motion.div
              key={index}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
              className="bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-card hover:shadow-card-hover transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 flex items-center justify-center mb-4">
                <card.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gray-50 dark:bg-gray-900 p-8 rounded-2xl shadow-card"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
            Professional Summary
          </h3>

          <p className="text-gray-600 dark:text-gray-400 mb-4">
            A results-driven Full-Stack Developer with {experienceYears} years
            of experience building scalable, high-performance applications using
            React, Angular, Node.js, Python, and modern cloud & AI technologies.
            I specialize in crafting responsive UIs, intelligent workflows, and
            secure architectures for enterprise and government clients.
          </p>

          <p className="text-gray-600 dark:text-gray-400 mb-4">
            My core expertise spans JavaScript, TypeScript, HTML, CSS, React,
            Angular, Express.js, MongoDB, and Azure services—including MSAL
            authentication, RBAC, and API integrations. I focus on writing
            clean, maintainable code while optimizing performance,
            accessibility, and user experience across devices.
          </p>

          <p className="text-gray-600 dark:text-gray-400">
            At TCS, I have delivered impactful solutions across telecom,
            insurance, FMCG, and government sectors. My work includes AI-powered
            dashboards, agentic RAG workflows, document intelligence systems,
            SCADA-driven analytics for water utilities, and large-scale
            citizen-facing portals. I’m passionate about solving real-world
            problems through innovation, modern UI engineering, and AI-driven
            automation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const aboutCards = [
  {
    title: "Full-Stack Development",
    description:
      "Proficient in building scalable, end-to-end web applications using React, Angular, Node.js, Express, and MongoDB — delivering fast, reliable, and maintainable solutions.",
    icon: Code,
  },
  {
    title: "UI/UX Engineering",
    description:
      "Experienced in transforming wireframes and product concepts into polished, high-performance interfaces using modern CSS, responsive design principles, and component-driven architecture.",
    icon: Laptop,
  },
  {
    title: "API Integration & Architecture",
    description:
      "Specialized in integrating REST APIs, authentication workflows, MSAL (Azure AD), cloud services, and third-party tools to create seamless and secure app ecosystems.",
    icon: Network,
  },
  {
    title: "AI & Automation Workflows",
    description:
      "Hands-on experience implementing AI-powered features, workflow automation, and modern data processing pipelines that enhance user experience and business productivity.",
    icon: BrainCircuit, // Change to any icon you prefer
  },
  {
    title: "Cloud & Deployment",
    description:
      "Experienced in deploying and managing full-stack applications on Azure with CI/CD, versioning, performance tuning, and secure access configurations.",
    icon: Cloud,
  },
];

