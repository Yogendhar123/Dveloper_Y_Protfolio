import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  VerticalTimeline, 
  VerticalTimelineElement 
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Briefcase } from 'lucide-react';
import { experiences } from '../constants';
import { useTheme } from '../context/ThemeContext';

export const Experience: React.FC = () => {
  const { isDarkMode } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section 
      id="experience" 
      className="py-20 bg-gray-50 dark:bg-gray-900/50 relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-50/30 to-white/0 dark:from-primary-900/10 dark:to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-16 relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Work <span className="text-primary-600 dark:text-primary-400">Experience</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mx-auto max-w-2xl">
            My professional journey in frontend development and the projects I've worked on.
          </p>
        </motion.div>

        <VerticalTimeline lineColor={isDarkMode ? '#4c1d95' : '#8b5cf6'}>
          {experiences.map((experience, index) => (
            <VerticalTimelineElement
              key={index}
              contentStyle={{
                background: isDarkMode ? '#1f2937' : '#ffffff',
                color: isDarkMode ? '#f3f4f6' : '#1f2937',
                boxShadow: '0px 10px 25px -10px rgba(0, 0, 0, 0.1)',
                borderRadius: '1rem',
                border: isDarkMode ? '1px solid #374151' : 'none',
              }}
              contentArrowStyle={{ 
                borderRight: isDarkMode 
                  ? '7px solid #1f2937' 
                  : '7px solid #ffffff' 
              }}
              date={experience.date}
              dateClassName="text-gray-600 dark:text-gray-400"
              iconStyle={{
                background: isDarkMode ? '#4c1d95' : '#8b5cf6',
                color: '#ffffff',
              }}
              icon={<Briefcase />}
            >
              <div>
                <h3 className="text-xl font-bold dark:text-white">
                  {experience.title}
                </h3>
                <h4 className="text-primary-600 dark:text-primary-400 font-medium">
                  {experience.company_name}
                </h4>
                <div className="mt-4 text-gray-600 dark:text-gray-300">
                  <ul className="list-disc pl-5 space-y-2">
                    {experience.points.map((point, idx) => (
                      <li key={idx} className="text-sm sm:text-base">
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
};