import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface TabProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isDarkMode: boolean;
}

const SkillsTabs: React.FC<TabProps> = ({ 
  tabs, 
  activeTab, 
  setActiveTab,
  isDarkMode
}) => {
  return (
    <div className="flex justify-center mb-10">
      <div className={`inline-flex p-1 rounded-xl ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative px-6 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
              activeTab === tab
                ? 'text-white'
                : isDarkMode
                ? 'text-gray-300 hover:text-white'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {activeTab === tab && (
              <motion.div
                layoutId="activeTabBg"
                className="absolute inset-0 bg-primary-600 dark:bg-primary-500 rounded-lg"
                initial={false}
                transition={{ type: 'spring', duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SkillsTabs;