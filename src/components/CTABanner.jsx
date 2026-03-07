import PropTypes from "prop-types";
import Button from "./Button";

/**
 * Glassmorphism call-to-action banner.
 *
 * Props:
 *   heading     – CTA heading text
 *   buttonText  – label for the action button (default: "Contact Me")
 *   buttonIcon  – Material Symbols icon name (default: "mail")
 *   buttonHref  – link URL (default: "#")
 */
export default function CTABanner({
    heading,
    buttonText = "Contact Me",
    buttonIcon,
    buttonHref = "#",
}) {
    return (
        <div className="max-w-4xl mx-auto my-24 text-center px-4 relative z-10 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-teal-600 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200" aria-hidden="true"></div>
            <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl p-10 rounded-xl border border-gray-200 dark:border-slate-800 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{heading}</h3>
                <div className="mt-8">
                    <Button variant="primary" href={buttonHref} icon={buttonIcon}>
                        {buttonText}
                    </Button>
                </div>
            </div>
        </div>
    );
}

CTABanner.propTypes = {
    heading: PropTypes.string.isRequired,
    buttonText: PropTypes.string,
    buttonIcon: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
    buttonHref: PropTypes.string,
};
