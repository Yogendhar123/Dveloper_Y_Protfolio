import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";
import profile from "../assests/photo.jpeg";
import resume from "../assests/Yogendhar_resume.pdf";
import { useEffect } from "react";
import { Mail, Phone, MapPin, Send, Github } from "lucide-react";

export const Hero: React.FC = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [typedText, setTypedText] = useState("");
  const fullText = "Hi, I'm "; // Full text for the typed part
  const fullName = "Yogendhar Sri Ram"; // Full name part

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      setTypedText((prev) => prev + fullText[index]);
      index += 1;

      // Clear interval when all text is typed
      if (index === fullText.length) {
        clearInterval(typingInterval);
      }
    }, 100); // Adjust typing speed (100ms per character)

    return () => clearInterval(typingInterval); // Cleanup interval on unmount
  }, []);
  const handleCharacterHover = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsAudioPlaying(true);
    }
  };

  const handleCharacterLeave = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsAudioPlaying(false);
    }
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    console.log("enter");
    const link = document.createElement("a");
    link.href = resume; // imported path
    link.setAttribute("download", "Yogendhar_resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/30 to-transparent dark:from-primary-900/10 dark:to-transparent" />

      <div className="container mx-auto px-6 sm:px-16 h-full flex flex-col justify-center items-center pt-28">
        <div className="flex flex-col-reverse md:flex-row md:gap-10 items-center w-full max-w-7xl mx-auto">
          {/* Text Content */}
          <motion.div
            className="mt-10 md:mt-0 md:w-2/3 text-center md:text-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="overflow-hidden mb-2">
              <motion.h1
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                Hi, I'm{" "}
                <span className="text-primary-600 dark:text-primary-400">
                  Yogendhar Sri Ram
                </span>
              </motion.h1>
            </div>

            <div className="overflow-hidden">
              <motion.p
                className="text-xl sm:text-2xl mt-2 text-gray-600 dark:text-gray-300"
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                <span className="text-primary-500 dark:text-primary-300 font-medium">
                  Frontend Developer
                </span>{" "}
                specializing in React & Angular
              </motion.p>
            </div>

            <motion.p
              className="mt-6 max-w-lg mx-auto md:mx-0 text-gray-600 dark:text-gray-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              I develop responsive UIs and web applications with over 3 years of
              experience, delivering efficient, scalable solutions that meet
              client needs.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start z-[999] items-end"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <button
                onClick={handleDownloadCV}
                className="px-6 py-3 bg-primary-600 text-white rounded-full font-medium hover:bg-primary-700 transition-colors flex items-center gap-2  z-[999]  "
              >
                <Download size={20} />
                Download CV
              </button>
              <div className="flex gap-4 z-[999] ">
                <a
                  href="https://in.linkedin.com/in/yogendhar "
                  className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 flex items-center justify-center hover:bg-primary-200 dark:hover:bg-primary-800/50 transition-colors"
                  aria-label="LinkedIn"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/Yogendhar123"
                  className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 flex items-center justify-center hover:bg-primary-200 dark:hover:bg-primary-800/50 transition-colors"
                  aria-label="GitHub"
                  target="_blank"
                >
                  <Github size={20} />
                </a>
                {/* <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/50 text-primary-600 dark:text-primary-400 flex items-center justify-center hover:bg-primary-200 dark:hover:bg-primary-800/50 transition-colors"
                  aria-label="Twitter"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a> */}
              </div>

              {/* <a
                href="#projects"
                className="px-6 py-3 border border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 rounded-full font-medium hover:bg-primary-50 dark:hover:bg-primary-900/30 transition-colors"
              >
                View Projects
              </a> */}
            </motion.div>
          </motion.div>

          {/* 3D Character */}
          <motion.div
            className="relative md:w-1/3 flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-full bg-primary-100 dark:bg-primary-900/50 flex items-center justify-center cursor-pointer overflow-hidden"
              // onMouseEnter={handleCharacterHover}
              // onMouseLeave={handleCharacterLeave}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-primary-400/20 to-secondary-400/20 dark:from-primary-600/30 dark:to-secondary-600/30"
                animate={{
                  scale: isAudioPlaying ? [1, 1.05, 1] : 1,
                  rotate: isAudioPlaying ? [0, 5, -5, 0] : 0,
                }}
                transition={{
                  duration: 2,
                  repeat: isAudioPlaying ? Infinity : 0,
                  repeatType: "reverse",
                }}
              />

              <img
                src={profile}
                alt="Developer Avatar"
                className="w-full h-full object-cover rounded-full"
              />
              {/* 
              {isAudioPlaying && (
                <motion.div
                  className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                  <span
                    className="w-1.5 h-2 bg-white rounded-full animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  ></span>
                  <span
                    className="w-1.5 h-2.5 bg-white rounded-full animate-pulse"
                    style={{ animationDelay: "0.3s" }}
                  ></span>
                  <span
                    className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"
                    style={{ animationDelay: "0.4s" }}
                  ></span>
                </motion.div>
              )}

              <div className="absolute bottom-0 left-0 right-0 text-center text-xs text-white bg-black/40 py-1">
                {isAudioPlaying
                  ? "Playing introduction..."
                  : "Hover to hear my intro"}
              </div> */}
            </div>

            {/* <audio
              ref={audioRef}
              src="https://www.w3schools.com/html/horse.ogg"
              preload="auto"
            /> */}
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="absolute bottom-16 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          onClick={scrollToAbout}
        >
          <div className="flex flex-col items-center">
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Scroll Down
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            >
              <ChevronDown className="text-primary-500 dark:text-primary-400" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
