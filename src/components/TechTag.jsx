import PropTypes from "prop-types";

/**
 * Reusable tech stack pill/tag component.
 *
 * Props:
 *   size      – "default" | "sm"  (default: "default")
 *   children  – tag label text
 *   className – extra classes
 */

const sizes = {
    default: "px-2.5 py-1 text-xs font-semibold text-light-text-primary " +
             "dark:text-slate-300 bg-light-surface dark:bg-slate-800 " +
             "border border-light-border dark:border-slate-700 rounded " +
             "hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300 cursor-default",
    sm: "px-1.5 py-0.5 text-[10px] text-light-text-secondary " +
        "dark:text-slate-400 bg-light-surface dark:bg-slate-800 rounded " +
        "hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors duration-300 cursor-default",
};

export default function TechTag({ size = "default", className = "", children }) {
    return (
        <span className={[sizes[size] || sizes.default, className].filter(Boolean).join(" ")}>
            {children}
        </span>
    );
}

TechTag.propTypes = {
    size: PropTypes.oneOf(["default", "sm"]),
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
