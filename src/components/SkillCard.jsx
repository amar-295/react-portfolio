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
        <div className={`relative group w-full ${className}`}>
            {/* Subtle glow effect behind the card */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-accent-dark/20 to-accent-dark/20 dark:from-primary-blue/30 dark:to-teal-400/30 rounded-xl blur opacity-0 group-hover:opacity-40 transition duration-1000 group-hover:duration-300"></div>

            <div
                className="relative h-full bg-light-surface dark:bg-card-bg border border-light-border dark:border-white/10 p-6 rounded-xl flex items-center gap-6 hover:border-accent-dark dark:hover:border-primary-blue/50 transition-transform hover:-translate-y-1 duration-300 shadow-sm hover:shadow-md dark:shadow-none cursor-default"
            >
                <Icon className={`text-4xl transition-transform duration-300 group-hover:scale-110 ${color}`} />
                <span className="font-semibold text-gray-900 dark:text-gray-200">{name}</span>
            </div>
        </div>
    );
}

SkillCard.propTypes = {
    icon: PropTypes.elementType.isRequired,
    color: PropTypes.string,
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
};
