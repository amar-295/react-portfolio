import PropTypes from "prop-types";

/**
 * Pill-shaped tag for "Currently Learning" items.
 *
 * Props:
 *   icon  – Material Symbols icon name (e.g. "school")
 *   label – display text
 */
export default function LearningTag({ icon, label }) {
    return (
        <div className="px-6 py-3 rounded-full border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800/50 text-gray-900 dark:text-gray-300 text-sm font-bold dark:font-normal flex items-center gap-2 shadow-sm dark:shadow-none">
            <span className="material-symbols-outlined text-gray-600 dark:text-emerald-400 text-xl dark:text-lg">
                {icon}
            </span>
            {label}
        </div>
    );
}

LearningTag.propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};
