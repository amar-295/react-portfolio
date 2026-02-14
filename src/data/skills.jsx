import {
    SiReact,
    SiTailwindcss,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiGit,
    SiNodedotjs,
    SiExpress,
    SiMongodb
} from "react-icons/si";

export const coreSkills = [
    { icon: SiReact, name: "React", color: "text-[#61DAFB]" },
    { icon: SiTailwindcss, name: "Tailwind CSS", color: "text-[#06B6D4]" },
    { icon: SiJavascript, name: "JavaScript (ES6+)", color: "text-[#F7DF1E]" },
    { icon: SiHtml5, name: "HTML / CSS", color: "text-[#E34F26]" },
    { icon: SiGit, name: "Git & GitHub", color: "text-[#F05032]" },
];

export const learningItems = [
    { icon: SiNodedotjs, label: "Backend Basics", color: "text-[#339933]" },
    { icon: SiExpress, label: "REST APIs", color: "text-gray-400" },
    { icon: SiMongodb, label: "Database Concepts", color: "text-[#47A248]" },
];

export const timelineEntries = [
    {
        period: "2024 – 2027",
        subtitle: "Formal Education",
        emoji: "🎓",
        badge: "Class of 2027",
        badgeColor: "green",
        title: "BCA Student",
        institution: "DAV Centenary College | Faridabad",
        description:
            "Pursuing a Bachelor's degree in Computer Applications. Studied core subjects including Data Structures, OOP, DBMS, and Operating Systems.",
        side: "right",
        dotColor: "blue",
        isActive: true,
    },
    {
        period: "2026 – Present",
        subtitle: "Skill Development",
        emoji: "💻",
        badge: "Self-Directed",
        badgeColor: "blue",
        title: "Independent Learning Projects",
        institution: null,
        description:
            "Building and deploying frontend projects to practice React, UI design, and JavaScript fundamentals. Focused on writing clean code and understanding modern development workflows.",
        side: "left",
        dotColor: "blue",
        isActive: false,
    },
];
