import PropTypes from "prop-types";
import TechTag from "./TechTag";

/**
 * Small "Code Experiment" card for the bottom grid section.
 *
 * Props:
 *   icon        – Material Symbols icon name
 *   iconColor   – color theme: "indigo" | "blue" | "slate"
 *   title       – experiment name
 *   type        – e.g. "Tooling"
 *   status      – e.g. "Learning"
 *   description – short description
 *   techStack   – string[] of tech names
 *   repoLink    – GitHub URL (optional)
 *   demoLink    – Live demo URL (optional)
 */

const colorMap = {
    indigo: {
        bg: "bg-indigo-100 dark:bg-indigo-900/30",
        border: "border-indigo-200 dark:border-indigo-500/20",
        text: "text-indigo-600 dark:text-indigo-400",
    },
    blue: {
        bg: "bg-blue-100 dark:bg-blue-900/30",
        border: "border-blue-200 dark:border-blue-500/20",
        text: "text-blue-600 dark:text-blue-400",
    },
    slate: {
        bg: "bg-slate-100 dark:bg-slate-900/30",
        border: "border-slate-200 dark:border-slate-500/20",
        text: "text-slate-600 dark:text-slate-400",
    },
};

export default function ExperimentCard({
    icon,
    iconColor = "indigo",
    title,
    type,
    status,
    description,
    techStack = [],
    repoLink,
    demoLink,
}) {
    const colors = colorMap[iconColor] || colorMap.indigo;

    return (
        <article className="bg-white dark:bg-card-bg rounded-xl border border-light-border dark:border-slate-800/50 p-6 flex flex-col h-full hover:border-accent-dark dark:hover:border-slate-600 transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-lg dark:shadow-black/20">
            {/* Header row: icon + links */}
            <div className="flex items-center justify-between mb-3">
                <div
                    className={`w-12 h-12 ${colors.bg} rounded-lg flex items-center justify-center border ${colors.border} group-hover:dark:border-blue-500/30 transition-all duration-300`}
                >
                    <span className={`material-symbols-outlined ${colors.text} text-2xl`}>
                        {icon}
                    </span>
                </div>
                <div className="flex gap-2">
                    {repoLink && (
                        <a
                            className="text-slate-400 hover:text-accent-dark dark:hover:text-white transition-colors"
                            href={repoLink}
                            title="GitHub"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="material-symbols-outlined text-lg">code</span>
                        </a>
                    )}
                    {demoLink && (
                        <a
                            className="text-slate-400 hover:text-accent-dark dark:hover:text-white transition-colors"
                            href={demoLink}
                            title="Live Demo"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="material-symbols-outlined text-lg">arrow_outward</span>
                        </a>
                    )}
                </div>
            </div>

            {/* Title */}
            <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 font-display">{title}</h4>

            {/* Type & Status */}
            <div className="text-xs text-slate-500 dark:text-slate-400 font-medium mb-2 uppercase tracking-wider">
                Type: {type} | Status: {status}
            </div>

            {/* Description */}
            <p className="text-sm text-light-text-secondary dark:text-slate-300 mb-3 grow leading-relaxed">
                {description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mt-auto">
                {techStack.map((tech) => (
                    <TechTag key={tech} size="sm">
                        {tech}
                    </TechTag>
                ))}
            </div>
        </article>
    );
}

ExperimentCard.propTypes = {
    icon: PropTypes.string.isRequired,
    iconColor: PropTypes.oneOf(["indigo", "blue", "slate"]),
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    techStack: PropTypes.arrayOf(PropTypes.string),
    repoLink: PropTypes.string,
    demoLink: PropTypes.string,
};
