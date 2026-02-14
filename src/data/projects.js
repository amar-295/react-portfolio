import portfolioLight from "../assets/projects/portfolio-1.webp";
import portfolioDark from "../assets/projects/portfolio-2.webp";
// import backendSnippet from "../assets/projects/backend-snippet.webp"; // Reverted as per user request
import passwordGenerator from "../assets/projects/password-generator.webp";

export const featuredProjects = [
    {
        image:
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
        imageAlt: "Express JS Authentication Backend",
        title: "Express Authentication Backend",
        type: "Backend API",
        focus: "REST API & Data Modeling",
        status: "Production Ready",
        description:
            "A Node.js REST API that implements authentication logic with JWT and refresh tokens. Features include secure file upload pipelines, MongoDB schemas, and custom middleware for handling media and user data.",
        learningOutcome:
            "Built a functional authentication system with token-based security and integrated cloud storage for media processing.",
        techStack: ["Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
        repoLink: "https://github.com/amar-295/backend",
        featured: false,
    },
    {
        image: portfolioLight,
        imageDark: portfolioDark,
        imageAlt: "Personal Portfolio Website",
        title: "Personal Portfolio Website",
        type: "Frontend Application",
        focus: "UI Architecture & Design Systems",
        status: "Live",
        description:
            "A personal portfolio featuring a component-based architecture, a strict 12-column grid system, and persistent theme management. Built with a focus on clean layouts and responsive design.",
        learningOutcome:
            "Implemented a custom design system, accessibility standards, and centralized state management for consistent UI themes.",
        techStack: ["React", "Tailwind CSS", "Vite", "Framer Motion"],
        repoLink: "https://github.com/amar-295/react-portfolio",
        liveDemoLink: "/",
        featured: false,
    },
    {
        image: passwordGenerator,
        imageAlt: "React Password & Security Tool",
        title: "React Password Generator",
        type: "Frontend Utility",
        focus: "State & Performance Optimization",
        status: "Live",
        description:
            "A customizable password generator built with React 19 and Tailwind v4. Features include real-time complexity validation, performance-optimized generation logic via useCallback, and a seamless clipboard integration using the modern Web API.",
        learningOutcome:
            "Implemented advanced React patterns including useRef for DOM manipulation and optimized side effects with useEffect for a responsive user experience.",
        techStack: ["React", "Tailwind CSS", "Vite"],
        repoLink: "https://github.com/amar-295/react-password-generator",
        liveDemoLink: "https://byteshield.netlify.app/",
        featured: false,
    },
];

import { MdPalette } from "react-icons/md";

export const experimentsData = [
    {
        icon: MdPalette,
        iconColor: "pink",
        title: "Bg Color Changer",
        type: "DOM Tool",
        status: "Completed",
        description:
            "Interactive background color switcher with real-time state updates.",
        techStack: ["React", "Tailwind"],
        repoLink: "https://github.com/amar-295/react-bg-changer",
        demoLink: "https://bg-changer-live.netlify.app/",
    },
];
