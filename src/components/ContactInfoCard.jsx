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
    const contentProps = href ? { href, className: "text-gray-900 dark:text-white text-xl hover:text-accent-dark dark:hover:text-accent-teal hover:underline transition-opacity hover:opacity-80 font-bold block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-dark dark:focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-900 rounded-sm w-max" } : { className: "text-gray-900 dark:text-white text-lg font-medium" };

    const wrapperClasses = [
        "relative h-full flex items-start space-x-5",
        isPrimary ? "p-4 rounded-xl bg-white dark:bg-blue-500/5 border border-gray-200 dark:border-blue-500/20 shadow-sm hover:shadow-lg dark:hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)] transition-transform hover:-translate-y-1 duration-300 cursor-pointer" : "px-4"
    ].filter(Boolean).join(" ");

    const iconWrapperClasses = [
        "shrink-0",
        "w-14",
        "h-14",
        isPrimary ? iconBg : "bg-gray-100 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50",
        "rounded-xl",
        "flex",
        "items-center",
        "justify-center",
        isPrimary ? "text-gray-900 dark:text-white" : "text-gray-700 dark:text-blue-500",
        "shadow-md"
    ].filter(Boolean).join(" ");

    const cardContent = (
        <div className={wrapperClasses}>
            <div className={iconWrapperClasses}>
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

    if (isPrimary) {
        return (
            <div className="relative group w-full">
                {/* Subtle glow effect behind the card */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-dark/20 to-accent-dark/20 dark:from-primary-blue/30 dark:to-teal-400/30 rounded-xl blur opacity-0 group-hover:opacity-40 transition duration-1000 group-hover:duration-300"></div>
                {cardContent}
            </div>
        );
    }

    return cardContent;
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
