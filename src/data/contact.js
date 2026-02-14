/**
 * Contact page data
 * All contact information, social links, and footer data
 */

// Social Media URLs
export const SOCIAL_URLS = {
    linkedin: "https://www.linkedin.com/in/arnamath-webdev/",
    github: "https://github.com/amar-295",
};

export const contactInfo = [
    {
        id: "email",
        icon: "fa-solid fa-envelope",
        label: "Gmail",
        labelColor: "text-gray-600 dark:text-blue-400",
        content: "612amar@gmail.com",
        href: "mailto:612amar@gmail.com",
        iconBg: "bg-gray-200 dark:bg-blue-500",
        variant: "primary",
    },
    {
        id: "location",
        icon: "fa-solid fa-location-dot",
        label: "LOCATION",
        labelColor: "text-slate-500",
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
        icon: "fa-brands fa-linkedin",
        variant: "button",
    },
    {
        id: "github-button",
        platform: "github",
        href: SOCIAL_URLS.github,
        icon: "fa-brands fa-github",
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
            icon: "fa-brands fa-linkedin",
            href: SOCIAL_URLS.linkedin,
        },
        {
            platform: "Github",
            icon: "fa-brands fa-github",
            href: SOCIAL_URLS.github,
        },
    ],
};
