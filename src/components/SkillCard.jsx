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
            className={`bg-light-surface dark:bg-transparent border border-light-border dark:border-white/10 p-6 rounded-xl flex items-center gap-6 hover:border-accent-dark dark:hover:border-primary-blue/50 transition-all shadow-sm hover:shadow-md dark:shadow-none group cursor-default ${className}`}
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
