import React, { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { navLinks } from "../constants";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";
import LOGOHERO from "../assests/logo.png";
interface HeaderProps {
  scrollY: number;
}

export const Header: React.FC<HeaderProps> = ({ scrollY }) => {
  const [toggle, setToggle] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  const handleNavClick = (id: string) => {
    setToggle(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      className={`fixed w-full top-0 z-20 px-6 sm:px-16 py-5 transition-all duration-300 ${
        isScrolled
          ? "bg-white/70 dark:bg-dark/70 backdrop-blur-lg shadow-md"
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <img
            src={LOGOHERO}
            className="h-[40px] w-[40px] rounded-full shadow-md"
          />

          {/* <span className="text-lg sm:text-xl font-bold text-primary-700 dark:text-primary-400">
            Yogendhar
          </span> */}
        </a>

        <div className="flex items-center gap-8">
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className="text-sm font-medium cursor-pointer hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                onClick={() => handleNavClick(nav.id)}
              >
                {nav.title}
              </li>
            ))}
          </ul>

          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/40 dark:text-primary-300 hover:bg-primary-200 dark:hover:bg-primary-800/60 transition-colors"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <div className="md:hidden flex">
            <button
              className="text-gray-700 dark:text-gray-200"
              onClick={() => setToggle(!toggle)}
            >
              <Menu />
            </button>

            <div
              className={`${
                !toggle ? "hidden" : "flex"
              } fixed top-0 right-0 w-full h-screen bg-white dark:bg-dark z-10`}
            >
              <div className="w-full h-full p-6 flex flex-col justify-start items-end">
                <button
                  className="text-gray-700 dark:text-gray-200 mb-8"
                  onClick={() => setToggle(!toggle)}
                >
                  <X />
                </button>

                <ul className="flex flex-col items-center w-full gap-8">
                  {navLinks.map((nav) => (
                    <li
                      key={nav.id}
                      className="text-base font-medium cursor-pointer"
                      onClick={() => handleNavClick(nav.id)}
                    >
                      {nav.title}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
