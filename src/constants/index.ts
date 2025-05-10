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
  },
  {
    name: "CSS 3",
    icon: PenTool,
    color: "#1572B6",
  },
  {
    name: "Bootstrap",
    icon: Layers,
    color: "#7952B3",
  },
  {
    name: "JavaScript",
    icon: FileJson,
    color: "#F7DF1E",
  },
  {
    name: "TypeScript",
    icon: FileType,
    color: "#3178C6",
  },
  {
    name: "React JS",
    icon: Component,
    color: "#61DAFB",
  },
  {
    name: "React Material-UI",
    icon: Component,
    color: "#0081CB",
  },
  {
    name: "Angular",
    icon: Code,
    color: "#DD0031",
  },
  {
    name: "Redux Toolkit",
    icon: BrainCircuit,
    color: "#764ABC",
  },
  {
    name: "Tailwind CSS",
    icon: PenTool,
    color: "#38B2AC",
  },
  {
    name: "Node JS",
    icon: Cpu,
    color: "#339933",
  },
  {
    name: "MongoDB",
    icon: Database,
    color: "#47A248",
  },
  {
    name: "Git",
    icon: GitBranch,
    color: "#F05032",
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
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
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
    image: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg",
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
    image: "https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg",
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
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
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
    image: "https://images.pexels.com/photos/2422293/pexels-photo-2422293.jpeg",
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
    image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg",
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
