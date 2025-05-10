import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Laptop, Network } from 'lucide-react';

export const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

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
            About <span className="text-primary-600 dark:text-primary-400">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mx-auto max-w-2xl mb-12">
            A passionate Frontend Developer with 3+ years of experience crafting responsive and user-friendly web experiences.
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
            As a dedicated frontend developer with over 3 years of experience, I specialize in building responsive user interfaces and web applications using React.js and Angular. My expertise lies in creating seamless user experiences across devices and implementing complex UI components with modern design principles.
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            I have a strong foundation in JavaScript, TypeScript, HTML, and CSS, complemented by experience with various frontend frameworks and libraries. My approach focuses on writing clean, maintainable code while ensuring optimal performance and accessibility.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            Throughout my career at TCS, I've contributed to diverse projects in telecom, insurance, FMCG, and government sectors, working with cross-functional teams to deliver high-quality products that meet client needs. I'm passionate about staying updated with the latest web technologies and best practices to implement innovative solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const aboutCards = [
  {
    title: "Frontend Development",
    description: "Expertise in building responsive UIs with React.js and Angular, ensuring seamless user experiences across devices.",
    icon: Code,
  },
  {
    title: "UI/UX Implementation",
    description: "Skilled at translating design mockups into functional interfaces using modern CSS frameworks and techniques.",
    icon: Laptop,
  },
  {
    title: "Integration Specialist",
    description: "Experience integrating frontend applications with various backend services, APIs, and third-party tools.",
    icon: Network,
  },
];