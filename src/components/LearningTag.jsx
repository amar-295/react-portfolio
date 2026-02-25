import PropTypes from "prop-types";

/**
 * Pill-shaped tag for "Currently Learning" items.
 *
 * Props:
 *   icon  – React Icon component or Material Symbols icon name
 *   label – display text
 *   color – optional text color class for icons
 */
export default function LearningTag({ icon: Icon, label, color = "" }) {
    const isComponent = typeof Icon !== "string";

    return (
        <div className="flex items-center gap-3 px-4 py-2 bg-light-surface dark:bg-blue-600/5 border border-light-border dark:border-blue-500/20 rounded-lg group hover:border-accent-dark dark:hover:border-blue-500/50 transition-opacity transition-transform duration-300 hover:opacity-90">
            {Icon && <Icon className={`text-lg ${color}`} />}
            <span className="text-gray-900 dark:text-slate-300 font-medium">{label}</span>
        </div>
    );
}

LearningTag.propTypes = {
    icon: PropTypes.elementType.isRequired,
    label: PropTypes.string.isRequired,
    color: PropTypes.string,
};
