import PropTypes from "prop-types";

/**
 * Reusable Button / Link component extracted from the Projects section.
 *
 * Variants:
 *   "primary"  – solid blue background (CTA actions)
 *   "outline"  – transparent with border (secondary actions)
 *
 * Props:
 *   variant    – "primary" | "outline"  (default: "primary")
 *   href       – if provided, renders an <a> tag; otherwise renders <button>
 *   icon       – Material Symbols icon name shown after the label (optional)
 *   fullWidth  – if true, stretches to fill container width (default: false)
 *   className  – extra classes to merge in
 *   children   – button label text
 *   ...rest    – any other native attributes (onClick, target, rel, etc.)
 */
export default function Button({
    variant = "primary",
    href,
    icon,
    fullWidth = false,
    className = "",
    children,
    ...rest
}) {
    /* ---- variant class maps ---- */
    const base =
        "font-medium rounded-lg text-sm transition-all inline-flex items-center justify-center gap-2";

    const variants = {
        primary:
            "px-6 py-3 bg-gray-900 dark:bg-blue-500 hover:bg-black dark:hover:bg-blue-600 text-white shadow-md dark:shadow-lg dark:shadow-blue-500/20",
        outline:
            "px-6 py-3 bg-transparent border-2 border-gray-900 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800 text-gray-900 dark:text-slate-300 font-bold",
    };

    const widthClass = fullWidth ? "w-full" : "";

    const classes = `${base} ${variants[variant] || variants.primary} ${widthClass} ${className}`.trim();

    /* ---- icon element ---- */
    const iconEl = icon ? (
        <span className="material-symbols-outlined text-sm">
            {icon}
        </span>
    ) : null;

    /* ---- render as <a> or <button> ---- */
    if (href) {
        return (
            <a href={href} className={classes} {...rest}>
                {children}
                {iconEl}
            </a>
        );
    }

    return (
        <button className={classes} {...rest}>
            {children}
            {iconEl}
        </button>
    );
}

Button.propTypes = {
    variant: PropTypes.oneOf(["primary", "outline"]),
    href: PropTypes.string,
    icon: PropTypes.string,
    fullWidth: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
