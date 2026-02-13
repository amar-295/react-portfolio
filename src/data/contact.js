/**
 * Contact page data
 * All contact information, social links, and footer data
 */

export const contactInfo = [
    {
        id: "email",
        icon: "fa-regular fa-envelope",
        label: "PREFERRED",
        labelColor: "text-gray-600 dark:text-blue-400",
        content: "612amar@gmail.com",
        href: "mailto:612amar@gmail.com",
        subtitle: "Typical response time: < 24 hours",
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
        href: "#",
        label: "LinkedIn",
        icon: "fa-brands fa-linkedin",
        variant: "button",
    },
    {
        id: "github-button",
        platform: "github",
        href: "#",
        icon: "fa-brands fa-github",
        variant: "icon",
    },
];

export const footerData = {
    brandName: "AMARNATH",
    brandInitial: "A",
    tagline: "Building and learning one project at a time.",
    quickLinks: [
        { label: "Home", href: "#" },
        { label: "About", href: "#" },
        { label: "Projects", href: "#" },
        { label: "Resume", href: "#" },
    ],
    socialLinks: [
        {
            platform: "Linkedin",
            icon: "fa-brands fa-linkedin",
            href: "#",
        },
        {
            platform: "Github",
            icon: "fa-brands fa-github",
            href: "#",
        },
    ],
};
