import PropTypes from "prop-types";

/**
 * Section heading with a left accent border and optional badge.
 *
 * Props:
 *   title       – heading text
 *   badge       – optional badge text (e.g. "Updated 2025")
 *   borderColor – tailwind border color class (default: "border-primary-blue")
 */
export default function SectionHeading({
    title,
    badge,
    borderColor = "border-gray-900 dark:border-primary-blue",
}) {
    // Map border color to background color for the new bar style
    const barColor = borderColor.replaceAll("border-", "bg-");

    return (
        <div className="flex items-center mb-12">
            <div className={`w-1.5 h-8 md:h-10 rounded-full ${barColor} mr-4 md:mr-6 shrink-0`}></div>
            <div className="grow flex flex-col sm:flex-row sm:items-end sm:justify-between gap-2">
                <h2 className="text-2xl md:text-4xl font-extrabold text-light-text-primary dark:text-white font-display tracking-tight leading-none">
                    {title}
                </h2>
                {badge && (
                    <span className="self-start sm:self-center bg-light-surface dark:bg-gray-800/50 text-light-text-secondary dark:text-gray-400 text-xs px-3 py-1 rounded-full border border-light-border dark:border-gray-700/50 font-medium whitespace-nowrap">
                        {badge}
                    </span>
                )}
            </div>
        </div>
    );
}

SectionHeading.propTypes = {
    title: PropTypes.string.isRequired,
    badge: PropTypes.string,
    borderColor: PropTypes.string,
};
