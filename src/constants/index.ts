import {
  Code,
  FileCode2,
  Cpu,
  FileJson,
  FileType,
  Layers,
  PenTool,
  Component,
  GitBranch,
  MonitorSmartphone,
  Database,
  CopyCheck,
  BrainCircuit,
  Github,
  Download,
} from "lucide-react";
import eduLearn from "../assests/edulearn.jpg";
import loadmatcher from "../assests/loadmatch.png";
import gov from "../assests/govImg.jpeg";
import inc from "../assests/insurence.jpeg";
import fmcg from "../assests/fastMoving.jpeg";
import fb from "../assests/foode.jpeg";
import tel from "../assests/telCOm.jpeg";
import offer from "../assests/offerings.jpeg";
import { useMemo } from "react";
export const tagColorMap = {
  blue: {
    bg: "bg-blue-100",
    text: "text-blue-600",
    darkBg: "dark:bg-blue-900/30",
    darkText: "dark:text-blue-400",
  },
  green: {
    bg: "bg-green-100",
    text: "text-green-600",
    darkBg: "dark:bg-green-900/30",
    darkText: "dark:text-green-400",
  },
  pink: {
    bg: "bg-pink-100",
    text: "text-pink-600",
    darkBg: "dark:bg-pink-900/30",
    darkText: "dark:text-pink-400",
  },
  violet: {
    bg: "bg-violet-100",
    text: "text-violet-600",
    darkBg: "dark:bg-violet-900/30",
    darkText: "dark:text-violet-400",
  },
};

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const technologies = [
  {
    name: "HTML 5",
    icon: FileCode2,
    color: "#E34F26",
    proficiency: 100,
    category: "Frontend",
  },
  {
    name: "CSS 3",
    icon: PenTool,
    color: "#1572B6",
    proficiency: 100,
    category: "Frontend",
  },
  {
    name: "Bootstrap",
    icon: Layers,
    color: "#7952B3",
    proficiency: 100,
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: PenTool,
    color: "#38B2AC",
    proficiency: 100,
    category: "CSS",
  },
  {
    name: "JavaScript",
    icon: FileJson,
    color: "#F7DF1E",
    proficiency: 80,
    category: "Frontend",
  },
  {
    name: "React JS",
    icon: Component,
    color: "#61DAFB",
    proficiency: 100,
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: FileType,
    color: "#3178C6",
    proficiency: 75,
    category: "Frontend",
  },

  {
    name: "React Material-UI",
    icon: Component,
    color: "#0081CB",
    proficiency: 100,
    category: "Frontend",
  },
  {
    name: "Angular",
    icon: Code,
    color: "#DD0031",
    proficiency: 75,
    category: "Frontend",
  },
  {
    name: "Redux",
    icon: BrainCircuit,
    color: "#764ABC",
    proficiency: 100,
    category: "Frontend",
  },

  {
    name: "Node JS",
    icon: Cpu,
    color: "#339933",
    proficiency: 70,
    category: "Backend",
  },
  {
    name: "MongoDB",
    icon: Database,
    color: "#47A248",
    proficiency: 75,
    category: "Database",
  },
  {
    name: "Git",
    icon: GitBranch,
    color: "#F05032",
    proficiency: 85,
    category: "Tools",
  },
];

export const experiences = [
  {
    title: "Frontend Developer",
    company_name: "TCS (Tata Consultancy Services)",
    iconBg: "#383E56",
    date: "Feb 2022 - present",
    points: [
      "Developing and maintaining web applications using React.js and Angular technologies.",
      "Currently working on UI development for a telecom client using Angular, building admin and user login interfaces with Azure MSAL for secure authentication.",
      "Integrated AWS Guardrails to enhance security and flexibility, allowing administrators to enable or disable features directly from the UI.",
      "Integrated Power BI reports to provide administrators with advanced reporting and management capabilities.",
      "Worked with insurance and FMCG clients to create responsive UIs using ReactJS and Material UI, integrating GPT-based chat interfaces.",
      "Implemented solutions to extract data from PDF documents using Streamlit, and successfully integrated Power BI reports into React applications.",
      "Developed multiple Proof of Concepts (POCs) using the latest version of Angular, incorporating Generative AI features.",
      "Contributed to Indian government portals by developing responsive UIs using React, Redux, Bootstrap, and React Material UI.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export const projects = [
  {
    name: "Project-1 Indian GOV",
    description:
      "I worked for Election Commission of India (ECI) customer, including EPTBS, NGSP, and NVSP modules. These platforms allow citizens to apply for voter registration, update/delete details, and obtain EPIC cards. I developed responsive UIs using React, Bootstrap, and Material UI, ensuring accessibility and performance across devices.",
    tags: [
      {
        name: "react",
        color: "blue",
      },
      {
        name: "bootstrap",
        color: "green",
      },
      {
        name: "material-ui",
        color: "pink",
      },
    ],
    image: gov,
    source_code_link: "https://www.eci.gov.in/",
  },
  {
    name: "Project-2 Insurance Domain",
    description:
      "Worked with an insurance domain client (Generali) to create responsive UIs using Redux, ReactJS and React Material UI. Integrated a chat interface that utilizes GPT prompts for user queries, including auto-complete and auto-suggest features.",
    tags: [
      {
        name: "react",
        color: "blue",
      },
      {
        name: "material-ui",
        color: "green",
      },
      {
        name: "redux",
        color: "pink",
      },
    ],
    image: inc,
    source_code_link: "https://www.generali.com/",
  },
  {
    name: "Project-3 FMCG Customer",
    description:
      "Integrated Power BI reports into a React application using ReactJS and Bootstrap. This integration significantly reduced the time required to develop dashboards and was successfully deployed on a remote server.",
    tags: [
      {
        name: "react",
        color: "blue",
      },
      {
        name: "powerbi",
        color: "green",
      },
      {
        name: "bootstrap",
        color: "pink",
      },
    ],
    image: fmcg,
    source_code_link: "#",
  },
  {
    name: "Project-4 Food and beverage industry",
    description:
      "Developed responsive UIs using React and React Material-UI, integrating GenAI use cases for product suggestions and displaying product details and ingredients. Implemented a chat interface to extract results from documents and provide user responses.",
    tags: [
      {
        name: "react",
        color: "blue",
      },
      {
        name: "material-ui",
        color: "green",
      },
      {
        name: "genai",
        color: "pink",
      },
    ],
    image: fb,
    source_code_link: "#",
  },
  {
    name: "Project-5 Telecom Domain",
    description:
      "Worked on UI development using Angular for a telecom company, integrating Power BI reports into the application. Developed multiple UIs and chat interfaces with GPT prompt integration to enhance functionality.",
    tags: [
      {
        name: "angular",
        color: "blue",
      },
      {
        name: "powerbi",
        color: "green",
      },
      {
        name: "azure",
        color: "pink",
      },
    ],
    image: tel,
    source_code_link: "#",
  },
  {
    name: "Project-6 TCS Offerings",
    description:
      "Worked on multiple internal use cases for TCS, developing over 10+ GenAI-driven UI solutions, including price prediction, CAD drawing analysis, image generation, PDF generation, and resume analysis.",
    tags: [
      {
        name: "react",
        color: "blue",
      },
      {
        name: "angular",
        color: "green",
      },
      {
        name: "genai",
        color: "pink",
      },
    ],
    image: offer,
    source_code_link: "#",
  },
];

export const personalProjects = [
  {
    name: "EduLearn",
    description:
      "A comprehensive education management app designed to facilitate course learning and track student progress. It offers separate login systems for students, faculty, and admins.",
    tags: [
      {
        name: "react",
        color: "blue",
      },
      {
        name: "typescript",
        color: "green",
      },
      {
        name: "git",
        color: "pink",
      },
      {
        name: "TailwindCss",
        color: "violet",
      },
    ],
    image: eduLearn,
    source_code_link: "https://edulearnapp.netlify.app/",
  },
  {
    name: "Load Matcher",
    description:
      "An intelligent logistics platform that connects shippers with carriers using a dynamic scoring system. Features advanced algorithms for optimal transport partner matching.",
    tags: [
      {
        name: "react",
        color: "blue",
      },
      {
        name: "typescript",
        color: "green",
      },
      {
        name: "git",
        color: "pink",
      },
      {
        name: "TailwindCss",
        color: "violet",
      },
    ],
    image: loadmatcher,
    source_code_link: "https://loadmatchapp.netlify.app/",
  },
];
export const additionalSkills = [
  "Responsive Design",
  "Cross-browser Compatibility",
  "Web Accessibility",
  "Performance Optimization",
  "RESTful APIs",
  "UI/UX Implementation",
  "Agile/Scrum Methodology",
  "PowerBI",
];
export const skillCategories = [
  { name: "Frontend", color: "#3B82F6" },
  { name: "Backend", color: "#10B981" },
  { name: "Design", color: "#EC4899" },
  { name: "Tools", color: "#F59E0B" },
  { name: "Methodologies", color: "#8B5CF6" },
];
// Connections between technologies for the skill graph.
// Make sure each 'source' and 'target' matches the 'name' field in the technologies array exactly.
export const skillConnections = [
  { source: "HTML 5", target: "CSS 3" },
  { source: "HTML 5", target: "JavaScript" },
  { source: "CSS 3", target: "Tailwind CSS" },
  { source: "CSS 3", target: "Bootstrap" },
  { source: "JavaScript", target: "TypeScript" },
  { source: "JavaScript", target: "React JS" },
  { source: "JavaScript", target: "Angular" },
  { source: "JavaScript", target: "Node JS" },
  { source: "TypeScript", target: "React JS" },
  { source: "TypeScript", target: "Angular" },
  { source: "React JS", target: "Redux" },
  { source: "React JS", target: "React Material-UI" },
  { source: "React JS", target: "Tailwind CSS" },
  { source: "Node JS", target: "MongoDB" },
  { source: "Git", target: "JavaScript" },
  { source: "Git", target: "Node JS" },
];
