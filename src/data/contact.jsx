/**
 * Contact page data
 * All contact information, social links, and footer data
 */
import {
    HiMail,
    HiLocationMarker
} from "react-icons/hi";
import {
    FaLinkedin,
    FaGithub
} from "react-icons/fa";

// Social Media URLs
export const SOCIAL_URLS = {
    linkedin: "https://www.linkedin.com/in/arnamath-webdev/",
    github: "https://github.com/amar-295",
};

export const contactInfo = [
    {
        id: "email",
        icon: HiMail,
        label: "Gmail",
        labelColor: "text-gray-700 dark:text-blue-300",
        content: "612amar@gmail.com",
        href: "mailto:612amar@gmail.com",
        iconBg: "bg-gray-200 dark:bg-blue-600",
        variant: "primary",
    },
    {
        id: "location",
        icon: HiLocationMarker,
        label: "LOCATION",
        labelColor: "text-slate-600 dark:text-slate-400",
        content: "Faridabad, India",
        iconBg: "bg-gray-800/50",
        variant: "secondary",
    },
];

export const socialLinks = [
    {
        id: "linkedin-button",
        platform: "linkedin",
        href: SOCIAL_URLS.linkedin,
        label: "LinkedIn",
        icon: FaLinkedin,
        variant: "button",
    },
    {
        id: "github-button",
        platform: "github",
        href: SOCIAL_URLS.github,
        icon: FaGithub,
        variant: "icon",
    },
];

export const footerData = {
    brandName: "AMARNATH",
    brandInitial: "A",
    tagline: "Building and learning one project at a time.",
    quickLinks: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
    ],
    socialLinks: [
        {
            platform: "Linkedin",
            icon: FaLinkedin,
            href: SOCIAL_URLS.linkedin,
        },
        {
            platform: "Github",
            icon: FaGithub,
            href: SOCIAL_URLS.github,
        },
    ],
};
