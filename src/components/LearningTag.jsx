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
        <div className="flex items-center gap-3 px-4 py-2 bg-light-surface dark:bg-blue-600/5 border border-light-border dark:border-blue-500/20 rounded-lg group hover:border-accent-dark dark:hover:border-blue-500/50 transition-all duration-300">
            {icon.includes("devicon") ? (
                <i className={`${icon} text-xl text-accent-dark dark:text-blue-500`}></i>
            ) : (
                <span className="material-symbols-outlined text-accent-dark dark:text-blue-500 text-xl group-hover:scale-110 transition-transform duration-300">
                    {icon}
                </span>
            )}
            <span className="text-gray-900 dark:text-slate-300 font-medium">{label}</span>
        </div>
    );
}

LearningTag.propTypes = {
    icon: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
};
