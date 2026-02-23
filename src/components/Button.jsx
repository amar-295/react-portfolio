import PropTypes from "prop-types";

/* ---- variant class maps ---- */
const base =
    "group font-bold rounded-xl text-base transition-opacity transition-transform duration-300 inline-flex items-center justify-center gap-2.5 active:scale-95 hover:opacity-90";

const variants = {
    primary:
        "px-8 py-3.5 bg-gray-900 dark:bg-blue-600 hover:bg-black dark:hover:bg-blue-500 text-white shadow-lg hover:shadow-xl dark:shadow-blue-500/30 hover:-translate-y-0.5",
    outline:
        "px-8 py-3.5 bg-transparent border-2 border-gray-900 dark:border-slate-600 hover:border-gray-900 dark:hover:border-blue-500 hover:bg-gray-50 dark:hover:bg-blue-500/10 text-gray-900 dark:text-white",
};

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
    const widthClass = fullWidth ? "w-full" : "";

    const classes = `${base} ${variants[variant] || variants.primary} ${widthClass} ${className}`.trim();

    /* ---- icon element ---- */
    const Icon = icon;
    const iconEl = Icon ? (
        <Icon className="text-[1.25em] leading-none text-current" />
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
    icon: PropTypes.elementType,
    fullWidth: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};
