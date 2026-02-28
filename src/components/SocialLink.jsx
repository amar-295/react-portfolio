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
    const Icon = icon;
    const isButton = variant === "button";
    const baseStyles = platformStyles[platform] || platformStyles.custom;

    if (isButton && label) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-center px-6 py-3 rounded-xl text-white transition-opacity transition-transform duration-200 font-bold shadow-lg active:scale-95 hover:opacity-90 ${baseStyles}`}
            >
                <Icon className="text-xl mr-2" aria-hidden="true" focusable="false" /> {label}
            </a>
        );
    }

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label || platform}
            title={label || platform}
            className={`w-12 h-12 flex items-center justify-center rounded-xl text-slate-400 hover:text-white transition-opacity transition-transform duration-200 active:scale-95 hover:opacity-90 ${baseStyles}`}
        >
            <Icon className="text-xl" aria-hidden="true" focusable="false" />
        </a>
    );
}

SocialLink.propTypes = {
    platform: PropTypes.oneOf(["linkedin", "github", "custom"]),
    href: PropTypes.string.isRequired,
    label: PropTypes.string,
    icon: PropTypes.elementType.isRequired,
    variant: PropTypes.oneOf(["button", "icon"]),
};
