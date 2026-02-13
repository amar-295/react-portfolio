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
    return (
        <div className={`flex justify-between items-center mb-12 border-l-4 ${borderColor} pl-4`}>
            <h2 className="text-3xl md:text-4xl font-extrabold text-light-text-primary dark:text-white font-display tracking-tight">
                {title}
            </h2>
            {badge && (
                <span className="bg-light-surface dark:bg-gray-800 text-light-text-secondary dark:text-gray-400 text-xs px-3 py-1 rounded border border-light-border dark:border-gray-700 ml-auto font-medium">
                    {badge}
                </span>
            )}
        </div>
    );
}

SectionHeading.propTypes = {
    title: PropTypes.string.isRequired,
    badge: PropTypes.string,
    borderColor: PropTypes.string,
};
