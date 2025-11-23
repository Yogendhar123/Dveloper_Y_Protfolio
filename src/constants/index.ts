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
  Cloud
} from "lucide-react";
import eduLearn from "../assests/edulearn.jpg";
import loadmatcher from "../assests/loadmatch.png";
import gov from "../assests/govImg.jpeg";
import inc from "../assests/insurence.jpeg";
import fmcg from "../assests/fastMoving.jpeg";
import fb from "../assests/foode.jpeg";
import tel from "../assests/telCOm.jpeg";
import offer from "../assests/offerings.jpeg";
import water from "../assests/water.png";
import tender from "../assests/tender.png";
import { useMemo } from "react";
import cd from "../assests/DC.png";
import stockimg from "../assests/stockvision.png"
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
  {
    name: "Azure",
    icon: Cloud, // Use lucide-react Cloud icon or substitute appropriate icon
    color: "#008AD7", // Azure blue
    proficiency: 70,
    category: "Cloud / DevOps",
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
    title: "Full-Stack Developer | Azure",
    company_name: "TCS (Tata Consultancy Services)",
    iconBg: "#383E56",
    date: "Feb 2022 - Present",
    points: [
      "Building and maintaining enterprise-grade web applications using React.js, Angular, Node.js, and modern JavaScript/TypeScript workflows.",
      
      "Leading UI development for a major telecom client using Angular, implementing secure authentication workflows with Azure MSAL and role-based access control.",
      
      "Integrated AWS Guardrails to provide dynamic feature management, enabling administrators to control UI functionalities directly from the dashboard.",
      
      "Embedded Power BI dashboards and reports to deliver advanced analytics, enabling stakeholders to track KPIs and operational insights in real time.",
      
      "Delivered responsive UI solutions for insurance and FMCG clients using ReactJS, Material UI, and custom component architectures, including GPT-powered conversational interfaces.",
      
      "Designed PDF-data extraction workflows using Python and Streamlit, and integrated processed insights seamlessly into React-based applications.",
      
      "Developed multiple Angular POCs featuring Generative AI workflows, automation tools, and modern frontend performance optimizations.",
      
      "Contributed to Indian government digital portals by building scalable React applications with Redux, Bootstrap, and Material UI to support high-traffic user journeys.",
      
      "Collaborated closely with designers, product owners, and backend teams to deliver performant, accessible, and aesthetically consistent user interfaces.",
      
      "Implemented responsive design strategies, optimized performance across browsers/devices, and ensured strict adherence to accessibility guidelines.",
      
      "Actively participated in peer code reviews, improving code quality, standards, and best practices across the team."
    ],
  },
];


export const projects = [
  // ---------------------- GOV PROJECT ----------------------
  {
    name: "Indian Government – ECI Portals (NVSP, NGSP, ETPBS)",
    description:
      "Developed scalable and accessible UIs for key Election Commission of India portals including NVSP, NGSP, and ETPBMS. Built modules for voter services, grievance handling, and secure postal ballot workflows using React, Redux, Bootstrap, and MUI. Optimized performance and resolved live issues for high-traffic government systems used by millions of citizens.",
    tags: [
      { name: "react", color: "blue" },
      { name: "bootstrap", color: "green" },
      { name: "material-ui", color: "pink" },
    ],
    image: gov,
    source_code_link: "https://www.eci.gov.in/",
  },

  // ---------------------- INSURANCE PROJECT ----------------------
  {
    name: "Insurance Domain – Generali",
    description:
      "Built responsive insurance workflow UIs using React, Redux, and Material-UI. Integrated GPT-powered conversational agent supporting auto-suggest, PDF intelligence, and policy Q&A. Implemented agentic workflows for classification, policy lookup, claim tracking, and renewal assistance—reducing manual effort by ~40%.",
    tags: [
      { name: "react", color: "blue" },
      { name: "material-ui", color: "green" },
      { name: "genai", color: "pink" },
    ],
    image: inc,
    source_code_link: "https://www.generali.com/",
  },

  // ---------------------- FMCG POWER BI PROJECT ----------------------
  {
    name: "FMCG – Power BI Embedded Dashboards",
    description:
      "Integrated Power BI embedded analytics within a React application, enabling interactive dashboards with edit/save modes. Delivered secure deployments on remote servers and improved decision-making by embedding real-time insights, reducing dependency on standalone BI tools.",
    tags: [
      { name: "react", color: "blue" },
      { name: "powerbi", color: "green" },
      { name: "bootstrap", color: "pink" },
    ],
    image: fmcg,
    source_code_link: "#",
  },

  // ---------------------- FOOD & BEVERAGE AI PROJECT ----------------------
  {
    name: "Food & Beverage – GenAI Product Intelligence",
    description:
      "Developed interactive UIs using React and MUI for product suggestions and ingredient insights. Integrated GenAI to perform document extraction, product comparisons, and user-guided chat interactions for customer assistance and product discovery.",
    tags: [
      { name: "react", color: "blue" },
      { name: "genai", color: "green" },
      { name: "material-ui", color: "pink" },
    ],
    image: fb,
    source_code_link: "#",
  },

  // ---------------------- TELECOM PROJECT ----------------------
  {
    name: "Telecom Client – AI-Enhanced Dashboards & Assistant",
    description:
      "Developed enterprise-grade Angular UIs with integrated Power BI embedded analytics for KPI dashboards. Built intelligent GPT-based assistants to answer telecom data queries, guide workflows, and enhance reporting—improving user efficiency by 35%.",
    tags: [
      { name: "angular", color: "blue" },
      { name: "powerbi", color: "green" },
      { name: "genai", color: "pink" },
    ],
    image: tel,
    source_code_link: "#",
  },

  // ---------------------- TCS GENAI OFFERINGS ----------------------
  {
    name: "TCS Innovation – Generative & Agentic AI Suite",
    description:
      "Built 10+ GenAI-driven POCs including price prediction, CAD drawing analysis, PDF intelligence, image generation, resume analysis, and manufacturing guideline lookup. Integrated solutions into React and Angular apps with agentic workflows, multistep reasoning, and automated decision support.",
    tags: [
      { name: "react", color: "blue" },
      { name: "angular", color: "green" },
      { name: "genai", color: "pink" },
    ],
    image: offer,
    source_code_link: "#",
  },

  // ---------------------- WATER UTILITY COPILOT ----------------------
  {
    name: "Water Utility Copilot – AI-Driven Treatment Optimization",
    description:
      "Built AI-enabled dashboards for real-time water treatment insights using React, Redux, Tailwind, Recharts, and Python APIs. Implemented ML-driven dosage optimization reducing chemical usage by ~38%. Designed digital log systems replacing manual diaries and integrated Agentic RAG workflows to provide SOP-based actionable guidance to field operators.",
    tags: [
      { name: "react", color: "blue" },
      { name: "redux", color: "green" },
      { name: "python", color: "pink" },
    ],
    image: water,
    source_code_link: "#",
  },

  // ---------------------- AGENTIC AI – TENDER ANALYSIS ----------------------
  {
    name: "AI Tender Advisor – Agentic AI & Document Intelligence",
    description:
      "Developed a full Agentic AI system for tender evaluation using React/Angular, Python and RAG pipelines. Implemented clause comparison, conflict detection, corrigendum analysis, and multistep reasoning across documents. Delivered AI-driven Q&A, summarization, and risk assessment—cutting review time by 70%.",
    tags: [
      { name: "angular", color: "blue" },
      { name: "python", color: "green" },
      { name: "genai", color: "pink" },
    ],
    image: tender,
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
  {
    name: "Document Comparsion",
    description:
      "The Document Comparison feature automatically scans two versions of a document to identify every insertion, deletion, or modification; organizes each change by page number and shows the original and revised text side-by-side; lets users filter and browse changes in a list; and provides deep-link buttons that jump the embedded PDF viewer to the exact page and highlight the passage in context—making it easy to see what changed, where, and share or cite specific revisions.",
    tags: [
      {
        name: "React",
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
    image: cd,
    source_code_link: "https://documencomparsion.netlify.app/",
  },
   {
    name: "StockVision Lite",
    description:
      "A lightweight stock visualization and analysis demo application that highlights interactive UI, responsive charts, and statistical insights using static sample data.This POC replicates a real-world stock tracking dashboard experience but is not connected to actual market feeds — designed purely to showcase functionality and design capabilities.",
    tags: [
      {
        name: "React",
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
    image: stockimg,
    source_code_link: "https://stockvisionlite.netlify.app/",
  },
];
export const additionalSkills = [
  "Responsive Design",
  "Cross-Browser Compatibility",
  "Web Accessibility (A11y)",
  "Performance Optimization",
  "RESTful API Integration",
  "UI/UX Implementation",
  "Agile / Scrum Methodology",
  "Azure Active Directory (MSAL Authentication)",
  "Cloud Deployment (Azure)",
  "CI/CD & Git Version Control",
  "Power BI Integration",
  "PDF Data Extraction & Automation",
  "Generative AI Workflows (GPT Integrations)",
  "State Management (Redux, RxJS)",
  "Micro-Frontend Architecture Basics"
];

export const skillCategories = [
  { name: "Frontend", color: "#3B82F6" },
  { name: "Backend", color: "#10B981" },
  { name: "Database", color: "#22C55E" },
  { name: "Cloud & DevOps", color: "#0EA5E9" },
  { name: "AI / LLM Workflows", color: "#F43F5E" },
  { name: "Tools", color: "#F59E0B" },
  { name: "Methodologies", color: "#8B5CF6" }
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

  { source: "Angular", target: "Tailwind CSS" },
  { source: "Angular", target: "Redux" },

  { source: "Node JS", target: "MongoDB" },
  { source: "Node JS", target: "Express JS" },

  { source: "MongoDB", target: "Express JS" },

  { source: "Git", target: "JavaScript" },
  { source: "Git", target: "Node JS" },

  // 🔥 NEW — Azure & Authentication
  { source: "Azure", target: "React JS" },
  { source: "Azure", target: "Angular" },
  { source: "Azure", target: "MSAL Authentication" },
  { source: "MSAL Authentication", target: "React JS" },
  { source: "MSAL Authentication", target: "Angular" },

  // 🔥 NEW — Power BI Integration
  { source: "Power BI", target: "React JS" },
  { source: "Power BI", target: "Angular" },

  // 🔥 NEW — LLM / AI Skills
  { source: "Generative AI", target: "React JS" },
  { source: "Generative AI", target: "Angular" },
  { source: "Generative AI", target: "Python" },
  { source: "Python", target: "RAG Workflows" },
  { source: "RAG Workflows", target: "Generative AI" }
];

