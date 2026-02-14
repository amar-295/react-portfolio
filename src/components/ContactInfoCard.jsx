import PropTypes from "prop-types";

/**
 * Contact information card with icon, label, and content.
 * Used for email and location display.
 *
 * Props:
 *   icon        – FontAwesome icon class (e.g. "fa-regular fa-envelope")
 *   label       – small uppercase label (e.g. "PREFERRED")
 *   labelColor  – color for the label text (e.g. "text-blue-400")
 *   content     – main content (email, location, etc.)
 *   href        – optional link (for email mailto:)
 *   subtitle    – optional small text below content
 *   iconBg      – background color for icon (default: "bg-blue-500")
 *   variant     – "primary" (with background) | "secondary" (minimal)
 */

export default function ContactInfoCard({
    icon,
    label,
    labelColor = "text-blue-400",
    content,
    href,
    subtitle,
    iconBg = "bg-blue-500",
    variant = "primary",
}) {
    const Icon = icon;
    const isPrimary = variant === "primary";

    const ContentWrapper = href ? "a" : "span";
    const contentProps = href ? { href, className: "text-gray-900 dark:text-white text-xl hover:text-accent-dark dark:hover:text-accent-teal hover:underline transition-opacity hover:opacity-80 font-bold block" } : { className: "text-gray-900 dark:text-white text-lg font-medium" };

    return (
        <div
            className={`flex items-start space-x-5 ${isPrimary
                ? "p-4 rounded-xl bg-white dark:bg-blue-500/5 border border-gray-200 dark:border-blue-500/20 shadow-md dark:shadow-lg dark:shadow-blue-500/5 transition-transform hover:-translate-y-1 duration-300 cursor-pointer group"
                : "px-4"
                }`}
        >
            <div
                className={`shrink-0 w-14 h-14 ${isPrimary ? iconBg : "bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50"
                    } rounded-xl flex items-center justify-center ${isPrimary ? "text-gray-900 dark:text-white" : "text-gray-700 dark:text-blue-500"
                    } shadow-md`}
            >
                <Icon className="text-2xl" />
            </div>
            <div className="pt-1">
                <p className={`text-xs ${labelColor} font-bold tracking-widest uppercase mb-2`}>
                    {label}
                </p>
                <ContentWrapper {...contentProps}>{content}</ContentWrapper>
                {subtitle && <p className="text-xs text-gray-700 dark:text-slate-400 mt-1">{subtitle}</p>}
            </div>
        </div>
    );
}

ContactInfoCard.propTypes = {
    icon: PropTypes.elementType.isRequired,
    label: PropTypes.string.isRequired,
    labelColor: PropTypes.string,
    content: PropTypes.string.isRequired,
    href: PropTypes.string,
    subtitle: PropTypes.string,
    iconBg: PropTypes.string,
    variant: PropTypes.oneOf(["primary", "secondary"]),
};
