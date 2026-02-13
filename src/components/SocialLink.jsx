import PropTypes from "prop-types";

/**
 * Social media link button.
 *
 * Props:
 *   platform  – "linkedin" | "github" | "custom"
 *   href      – link URL
 *   label     – optional text label (e.g. "LinkedIn")
 *   icon      – FontAwesome icon class
 *   variant   – "button" (with label) | "icon" (icon only)
 */

const platformStyles = {
    linkedin: "bg-[#0077b5] hover:bg-[#006097] shadow-blue-900/20",
    github: "bg-slate-800 hover:bg-slate-700 border border-slate-700/50",
    custom: "bg-slate-800 hover:bg-slate-700 border border-slate-700/50",
};

export default function SocialLink({
    platform = "custom",
    href,
    label,
    icon,
    variant = "button",
}) {
    const isButton = variant === "button";
    const baseStyles = platformStyles[platform] || platformStyles.custom;

    if (isButton && label) {
        return (
            <a
                href={href}
                className={`flex items-center justify-center px-6 py-3 rounded-lg text-white transition-all duration-200 font-medium shadow-lg ${baseStyles}`}
            >
                <i className={`${icon} text-xl mr-2`}></i> {label}
            </a>
        );
    }

    return (
        <a
            href={href}
            className={`w-12 h-12 flex items-center justify-center rounded-lg text-slate-400 hover:text-white transition-all duration-200 ${baseStyles}`}
        >
            <i className={`${icon} text-xl`}></i>
        </a>
    );
}

SocialLink.propTypes = {
    platform: PropTypes.oneOf(["linkedin", "github", "custom"]),
    href: PropTypes.string.isRequired,
    label: PropTypes.string,
    icon: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(["button", "icon"]),
};
