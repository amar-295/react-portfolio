import PropTypes from "prop-types";

/**
 * Glass-morphism skill card with a devicon and skill name.
 *
 * Props:
 *   icon      – devicon class string (e.g. "devicon-react-original colored")
 *   name      – skill display name
 *   className – extra classes
 */
export default function SkillCard({ icon, name, color = "", className = "" }) {
    const Icon = icon;
    return (
        <div
            className={`bg-light-surface dark:bg-transparent border border-light-border dark:border-white/10 p-6 rounded-xl flex items-center gap-6 hover:border-accent-dark dark:hover:border-blue-500/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1.5 dark:shadow-none dark:hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)] group cursor-default ${className}`}
        >
            <Icon className={`text-4xl transition-transform duration-300 group-hover:scale-110 ${color}`} />
            <span className="font-semibold text-gray-900 dark:text-gray-200">{name}</span>
        </div>
    );
}

SkillCard.propTypes = {
    icon: PropTypes.elementType.isRequired,
    color: PropTypes.string,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
};
